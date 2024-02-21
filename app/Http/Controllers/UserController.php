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
                $users = $request->get('votestatus') == 'Voted' ? $users->whereNotNull('candidate_id') : $users->where('candidate_id', null);
            }
            $users = $users->paginate();
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
                'pagination' => [
                    'total' => $users->total(),
                    'per_page' => $users->perPage(),
                    'current_page' => $users->currentPage(),
                    'last_page' => $users->lastPage(),
                    'from' => $users->firstItem(),
                    'to' => $users->lastItem(),
                ],
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error while getting dashboard',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function postIndex(Request $request){
        try {
            if($request->has('add-voter')){
                $this->validate($request, [
                    'name' => 'required|string|max:255',
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
                return response()->json(['message' => 'User created successfully'], 200);
            }

            if($request->has('tab-choosen')){
                switch ($request->get('tab-choosen')){
                    case 'students':
                        $users = User::with('candidate')->paginate(15);
                        return response()->json(['students' => $users], 200);
                    case 'statistics':
                        if ($request->has('showing-time') && $request->has('detail-time')){
                            $newTime = new Time();
                            $newTime->deadline = $request->get('showing-time');
                            $newTime->started = $request->get('detail-time');
                            $newTime->save();
                        }
                        $time = Time::latest()->first() ?? Time::createNewTime('15 Jan 2025', '15:00:00');
                        return response()->json(['time' => $time], 200);
                    case 'candidates':
                        $candidates = Candidate::with('users')->get();
                        return response()->json(['candidates' => $candidates], 200);
                    case 'generate-data':
                        // Job Here
                        $job = new UserJob();
                        $this->dispatch($job);
                        Cache::flush();
                        return response()->json(['message' => 'Data generation job dispatched'], 200);
                }
            }
            return response()->json(['message' => 'Invalid request'], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function statistics(Request $request){
        try {
            $candidates = Candidate::with('users')->get();
            if ($request->has('showing-time') && $request->has('detail-time')){
                $newTime = new Time();
                $newTime->deadline = $request->get('showing-time');
                $newTime->started = $request->get('detail-time');
                $newTime->save();
            }
            // Get the latest time
            $time = Time::latest()->first() ?? Time::createNewTime('15 Jan 2025', '15:00:00');
            return response()->json([
                'time' => $time,
                'candidates' => $candidates,
                'candidate_names' => $candidates->pluck('name')->push('Not Voters'),
                'n_candidate_voters' => $candidates->map(function ($candidate){
                    return $candidate->users->count();
                })->push(User::where('candidate_id', null)->count())
            ]);
        }
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
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

        return response()->json([
            'message' => 'Data '.$old_name.' updated successfully',
        ]);
    }

    public function destroy($id)
    {
        try {
            $user = User::find($id);
            $user->delete();
            Cache::flush();

            return response()->json([
                'message' => 'Candidate deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error while deleting candidate',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
