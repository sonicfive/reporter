const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
// mix.js('node_modules/@cmyee/pushy/js/pushy.js', 'public/js')
// .sass('node_modules/@cmyee/pushy/scss/pushy.scss', 'public/css')
   .sass('resources/sass/app.scss', 'public/css')
   mix.browserSync('reporter.whatever')
