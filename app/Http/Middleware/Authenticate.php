<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        // if not authenticated, redirect to login page
        // if (! $request->expectsJson()) {
        //     return route('login');
        // }
        
        if (Auth::check() == false) {
            session()->flash('error', 'You must login first');
            return route('login');
        }

    }
}
