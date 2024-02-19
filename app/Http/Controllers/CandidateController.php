<?php

namespace App\Http\Controllers;

use App\Events\BuildAssets;
use Illuminate\Http\Request;
use App\Models\Candidate;
use App\Models\User;
use Illuminate\Support\Facades\Cache;

class CandidateController extends Controller
{
    public function index()
    {
        try {
            $candidates = Candidate::with('users')->get();
            // $not_voted = User::where('candidate_id', null)->count();

            return response()->json([
                'message' => 'Candidates retrieved successfully',
                'candidates' => $candidates,
                // 'not_voted' => $not_voted,
                // 'users' => User::count()
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error while getting candidates',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function rate(){
        try {
            $not_voted = User::where('candidate_id', null)->count();

            return response()->json([
                'message' => 'Rate retrieved successfully',
                'not_voted' => $not_voted,
                'users' => User::count()
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error while getting rate',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $candidate = Candidate::findOrFail($id);

            return response()->json([
                'message' => 'Candidate retrieved successfully',
                'candidate' => $candidate,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error while getting candidate',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function vote($id)
    {
        $user = auth()->user();

        try {
            if ($user->candidate_id == null) {
                $user->candidate_id = $id;
                $user->save();
                $user->tokens()->delete();
            } else {
                // Handle the case where the user has already voted
                return response()->json([
                    'message' => 'User has already voted for a candidate',
                ], 400);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error while updating data',
                'error' => $e->getMessage(),
            ], 500);
        }

        return response()->json([
            'message' => 'Data updated successfully',
        ], 200);

        // if(auth()->user()->candidate_id != null){
        //     return redirect()->route('voting')->with('error', 'Anda sudah Voting!!');
        // } else {
        //     auth()->user()->candidate_id = $id;

        //     auth()->user()->save();

        //     Cache::flush();

        //     // Auto Logout after voted
        //     auth()->logout();

        //     return redirect()->route('voting')->with('success', 'Voted Succesfuly');;
        // }

        
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255|min:3|unique:candidates|regex:/^[a-zA-Z ]+$/',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $photo = $request->file('photo');
        $filename = $photo->getClientOriginalName();
        $candidate = Candidate::create([
            "name" => $request->name,
            "photo" => $filename,
            "vision" => $request->vision,
            "missions" => json_encode(explode(',', json_encode($request->all_missions))),
        ]);
        $photo->move(base_path('/resources/images'), $filename);
        event(new BuildAssets());
        return redirect()->route('voting')->with('success', 'Candidate has been added');
    }

    public function destroy(Request $request, $id)
    {
        $candidate = Candidate::find($id);
        $candidate->delete();
        return redirect()->route('voting')->with('success', 'Candidate has been deleted');
    }

}
