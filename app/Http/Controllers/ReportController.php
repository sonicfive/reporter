<?php

namespace App\Http\Controllers;
use \App\Libraries\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{
     private $report;

     public function __construct(){
         $this->report = new Report();
     }


    public function getRange(Request $request){
        return $this->report->getRange($request);
    }
}
