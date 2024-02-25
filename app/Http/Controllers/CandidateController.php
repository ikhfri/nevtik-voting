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

        
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|max:255|min:3|unique:candidates|regex:/^[a-zA-Z ]+$/',
                'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Ensure the image size doesn't exceed 2MB
            ]);
            $photo = $request->file('photo');
            $filename = $photo->getClientOriginalName();
            $path = 'storage/candidates/' . $filename;
            $candidate = Candidate::create([
                "name" => $request->name,
                "photo" => $path,
                "vision" => $request->vision,
                "missions" => json_encode(explode(',', json_encode($request->all_missions))),
            ]);
            $photo->move(storage_path('app/public/candidates'), $filename);
            event(new BuildAssets());
            return response()->json(['message' => 'Candidate created successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function destroy($id)
    {
        try {
            $candidate = Candidate::find($id);
            $candidate->delete();

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
