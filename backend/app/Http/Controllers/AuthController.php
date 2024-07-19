<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use App\Models\Admin;
use App\Models\Rafistoleur;


class AuthController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(Request $request)
    {
        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Failed !!Email or password not Matches'], 401);
        }
        return $this->respondWithToken($token);
    }

    public function signup(Request $request)
    {
        $validated = $request->validate([
            'name' =>'required',
            'email' =>'required|email|unique:users',
            'location' =>'required',
            'tel' =>'required|digits:10',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required'
        ]);

        $userData = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'location' => $request->location,
            'tel' => $request->tel,
            'password' => bcrypt($request->password),
        ]);

        return response()->json(['message' => "User created successfully", 'userData' => $userData], 200);
    }

    public function adminsign(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:admins',
            'password' => 'required|confirmed',
        ]);

        $adminData = Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json(['message' => 'Admin created successfully', 'adminData' => $adminData], 201);
    }

    // public function rafistoleurLogin(Request $request)
    // {
    //     $credentials = request(['email', 'password']);
    //     if (!$token = auth()->attempt($credentials)) {
    //         return response()->json(['error' => 'Failed !!Email or password not Matches'], 401);
    //     }
    //     return $this->respondWithToken($token);
    // }

    public function admilogin(Request $request)
    {
        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Failed !!Email or password not Matches'], 401);
        }
        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
