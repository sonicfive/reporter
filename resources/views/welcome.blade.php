@extends('layouts.master')

@section('app')
<div id="app">
    <navigation></navigation>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
@endsection
