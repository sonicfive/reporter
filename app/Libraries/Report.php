<?php

namespace App\Libraries;
use Illuminate\Http\Request;
// use \Carbon\Carbon;

Class Report{

    public function __construct(){

    }

    /****************************
     * Function gets a request with start and end dates
     * returns result
     *
     */

    public function getRange(Request $request){

         $start = $request->from;
         $end = $request->to;
        $report = \App\Report::where('Date','>=', $start)
        ->where('Date', '<=', $end)
        ->get();

        $columns = $report->map(function( $row ){
            return array_keys($row->getAttributes());
        })->first();

        $columns = collect($columns);

        $columns =  $columns->map( function($column){
            return [
                'field' => (string) $column,
                'label' => (string) $column,
                // 'width' => 40,
                'numeric' => true,
                'visible' => ($column == "Date") ? true : false
            ];
        });
        // return $columns;
        return [
            'data' => $report,
            'columns' => $columns
            ];

    }
}
