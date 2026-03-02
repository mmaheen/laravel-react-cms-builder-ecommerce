<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index()
    {
        return view("home");
    }

    public function dashboard()
    {
        return view("dashboard");
    }
    public function edit()
    {
        $title = "Edit Page";
        $description = "This is the edit page description.";
        $props = [
            "title" => $title,
            "description" => $description
        ];
        return view("edit-page", compact("props"));
    }
}
