const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
    .setPublicPath('./')
    .sass('app.scss', '')
    .options({
        processCssUrls: true,
        postCss: [ tailwindcss() ],
    })
;
