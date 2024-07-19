<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\rafistoleur;
use Illuminate\Support\Facades\Validator;

class rafistoleurController extends Controller
{
    public function index(){

        $rafistoleurs = Rafistoleur::all();
        if($rafistoleurs ->count() > 0){
            return response()->json([
                'status' => 200,
                'message' => $rafistoleurs
            ],200);
        }else{
            return response()->json([
               'status' => 404,
               'message' => 'No rafistoleurs found'
            ],404);
        }
    }


    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'email' => 'required|email|max:191',
            'location' => 'required|string|max:191',
            'tel' => 'required|digits:10',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }
    
        $rafistoleur = Rafistoleur::create([
            'name' => $request->name,
            'email' => $request->email,
            'location' => $request->location,
            'tel' => $request->tel,
        ]);
    
        if ($rafistoleur) {
            return response()->json([
                'status' => 200,
                'message' => 'Rafistoleur created successfully',
            ], 200);
        } else {
            return response()->json([
                'status' => 500,
                'message' => 'Failed to create rafistoleur'
            ], 500);
        }
    }


    public function show($id){
        $rafistoleur=Rafistoleur::find($id);

        if($rafistoleur){
            
            return response()->json([
               'status' => 200,
               'message' => $rafistoleur
            ],200);

        }else{
            return response()->json([
               'status' => 404,
               'message' => 'Rafistoleur not found'
            ],404);

        }
    }


    public function edit($id){

        $rafistoleur=Rafistoleur::find($id);

        if($rafistoleur){
            
            return response()->json([
            'status' => 200,
            'message' => $rafistoleur
            ],200);

        }else{
            return response()->json([
            'status' => 404,
            'message' => 'Rafistoleur not found'
            ],404);

        }
    }

    public function update(Request $request, int $id){
        $validator = Validator::make($request->all(),[
            'name' =>'required|string|max:191',
            'email' =>'required||email|max:191',
            'location' =>'required|string|max:191',
            'tel' =>'required|digits:10',
        ]);

        if ($validator->fails()){
            return response()->json([
               'status' => 422,
               'errors' => $validator->messages()
            ],422);
        }else{

            $rafistoleur=Rafistoleur::find($id);
          

           if($rafistoleur){
           
            $rafistoleur->update([
                'name'=> $request->name,
                'email'=> $request->email,
                'location'=> $request->location,
                'tel'=> $request->tel,
           ]);
            return response()->json([
               'status' => 200,
               'message' => 'Rafistoleur updated successfully',
            ],200);
           }else{
            return response()->json([
               'status' => 404,
               'message' => 'Failed to create rafistoleur'
            ],404);
           }

        }
    }


    public function destroy($id){

        $rafistoleur=Rafistoleur::find($id);
        if($rafistoleur){
            $rafistoleur->delete();
            return response()->json([
               'status' => 200,
               'message' => 'Rafistoleur deleted successfully',
            ],200);
        }else{
            
            return response()->json([
               'status' => 404,
               'message' => 'Rafistoleur not found'
            ],404);
        }

    }

}
