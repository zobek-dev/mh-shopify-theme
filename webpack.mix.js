const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .sourceMaps(true, 'source-map')
  .js('src/js/main.js', 'assets/vendor.js')
  .sass('src/styles/main.scss', 'assets')
  .options({
    postCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')],
  });
