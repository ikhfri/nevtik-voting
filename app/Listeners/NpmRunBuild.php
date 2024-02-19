<?php

namespace App\Listeners;

use App\Events\BuildAssets;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NpmRunBuild
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\BuildAssets  $event
     * @return void
     */
    public function handle(BuildAssets $event)
    {
        //
    }
}
