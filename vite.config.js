import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 
            'resources/js/app.js',
            'resources/js/flowbite.js',
            'resources/js/bootstrap.js',
            'resources/js/jquery-3.6.3.slim.min.js',
            'resources/js/chart.js',
            // 'resources/images/*.{png,jpg,jpeg,gif,svg}',
            // 'resources/images/**/*.{png,jpg,jpeg,gif,svg}',
            ],
            // refresh: ['resources/views/**/*.blade.php'],
            // ssr: true,
        }),
    ],
});
