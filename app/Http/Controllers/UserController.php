<?php

namespace App\Http\Controllers;

use App\Jobs\UserJob;
use App\Models\Candidate;
use App\Models\Time;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

     
//    Show all users
    public function index(Request $request)
    {
         try {
            $users = User::with('candidate');

            if($request->has('class')){
                $class_parsed = str_replace('%20', ' ', $request->get('class'));
                $users = User::with('candidate')->where('class', $class_parsed);
            }
            if ($request->has('votestatus')){
                $users = $request->get('votestatus') == '1' ? $users->whereNotNull('candidate_id') : $users->where('candidate_id', null);
            }
            $users = $users->paginate(15);
            $candidates = Candidate::all();
            $classes = User::select('class')->distinct()->get();
            $classes = $classes->map(function ($class){
                return $class->class;
            });

            return response()->json([
                'message' => 'Dashboard retrieved successfully',
                'students'=> Cache::has('users') ? Cache::get('users') : $users,
                'candidates'=> $candidates,
                'tabChoosen' => 'students',
                'classes' => $classes->sort()->values(),
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error while getting dashboard',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function postIndex(Request $request){
       if($request->has('add-voter')){
              $this->validate($request, [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'NIS' => 'required|string|max:255|unique:users',
                'password'=> 'required|string|min:6',
              ]);
              $user = new User();
              $user->name = $request->get('name');
              $user->nis = $request->get('NIS');
              $user->class = $request->get('class');
              $user->role = $request->get('role');    
              $user->password = $request->get('password');
              $user->save();
              return redirect()->route('dashboard')->with('success', 'Voter added successfully');
       }

        if($request->has('tab-choosen')){
            
            $candidates = Candidate::with('users')->get();
            switch ($request->get('tab-choosen')){
                case 'students':
                    $users = User::with('candidate')->paginate(15);
                    // $users = cache()->remember('users', 3600, function () {
                    //     return User::with('candidate')->paginate(10);
                    // });
                    // Chace for 2 hours
                    $classes = User::select('class')->distinct()->get();
                    $classes = $classes->map(function ($class){
                        return $class->class;
                    });
                    return view('dashboard', [
//                       
                        'students'=> Cache::has('users') ? Cache::get('users') : $users,
                        'candidates'=> $candidates,
                        'tabChoosen' => 'students',
                        'classes' => $classes->sort()->values(),
                    ]);
                case 'statistics':
                    if ($request->has('showing-time') && $request->has('detail-time')){
                        $newTime = new Time();
                        $newTime->deadline = $request->get('showing-time');
                        $newTime->started = $request->get('detail-time');
                        $newTime->save();
                    }
                    // Get the latest time
                    $time = Time::latest()->first() ?? Time::createNewTime('15 Jan 2025', '15:00:00');
                    return view('dashboard', [
                        'time' => $time,
                        'candidates' => $candidates,
                        'candidate_names' => $candidates->pluck('name')->push('Not Voters'),
                        'n_candidate_voters' => $candidates->map(function ($candidate){
                            return $candidate->users->count();
                        })->push(User::where('candidate_id', null)->count()),
                        
                        'tabChoosen' => 'statistics'
                    ]);
                case 'candidates':
                    return view('dashboard', [
                        'tabChoosen' => 'candidates',
                        'candidates' => collect($candidates)
                    ]);
                case 'generate-data':
                    // Job Here
                    $job = new UserJob();
                    $this->dispatch($job);
                    Cache::flush();
                    return view('dashboard', [
                        'tabChoosen' => 'generate-data'
                    ]);

            }
        }
    }

    public function generate(Request $request){
        $job = new UserJob();
        $this->dispatch($job);
        return redirect()->route('dashboard')->with('success', 'Data generated successfully');
    }

    public function update(Request $request, $id){

        if ($request->has('time_id')){
            $time = Time::find($request->get('time_id'));
            $time->is_clicked = true;
            $time->save();
            // route to dashboard with post method

            return redirect()->route('dashboard')->with('success', 'Time updated successfully');
        }

//       validate data
        $request->validate([
            'nis'=> 'required|numeric',
            'name' => 'required|string|max:255',
            'password' => 'required',
            'candidate_id' => 'required|numeric',
        ]);


//        update data
        $user = User::find($id);
        $old_name = $user->name;
        $user->nis = $request->get('nis');
        $user->name = $request->get('name');
        $user->password = $request->get('password');
        $user->candidate_id = $request->get('candidate_id') != 0 ? $request->get('candidate_id') : null;
        $user->save();
        Cache::flush();

        return redirect()->route('dashboard')->with('success', 'Data '.$old_name.' was updated');
    }

    public function destroy(Request $request, $id)
    {
        $user = User::find($id);
        $user->delete();
        Cache::flush();
        return redirect()->route('dashboard')->with('success', 'User deleted successfully');
    }
}
