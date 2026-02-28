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
        return view("edit-page");
    }
}
