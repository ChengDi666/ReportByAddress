<?php

namespace Norgeit\ReportByAddress;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class ReportByAddress extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('report-by-address', __DIR__.'/../dist/js/tool.js');
        Nova::style('report-by-address', __DIR__.'/../dist/css/tool.css');
//        Nova::script('element-composer', 'https://unpkg.com/element-ui/lib/index.js');
//        Nova::style('element-ui', 'https://unpkg.com/element-ui/lib/theme-chalk/index.css');
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return \Illuminate\View\View
     */
    public function renderNavigation()
    {
        return view('report-by-address::navigation');
    }
}
