import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH;
const outputDir = production ? 'dist' : 'public';
const outputFile = 'bundle';

export default {
    input: 'src/main.js',
    output: {
        sourcemap: production,
        format: 'iife',
        name: 'app',
        file: `${outputDir}/${outputFile}.js`,
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file — better for performance
            css: css => {
                css.write(`${outputDir}/${outputFile}.css`);
            },
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration —
        // consult the documentation for details:
        // https://github.com/rollup/rollup-plugin-commonjs
        resolve(),
        commonjs(),
        !production && serve(outputDir),
        !production && livereload(outputDir),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ]
};
