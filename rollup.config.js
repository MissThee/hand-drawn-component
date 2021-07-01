import path from 'path'
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-dev-server'
import esbuild from 'rollup-plugin-esbuild'
import html2 from 'rollup-plugin-html2'
import alias from '@rollup/plugin-alias';
const isProd = process.env.NODE_ENV === 'production'

const outputPath = process.env.NODE_PACKAGED_PATH
const config = {
    input: 'public/index.js',
    output: {
        dir: outputPath,
        format: 'es',
    },
    plugins: [
        copy({
            targets: [
                {src: 'src/assets', dest: path.resolve(outputPath)},
                {src: 'public/favicon.ico', dest: path.resolve(outputPath)},
            ]
        }),
        resolve(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.NODE_PACKAGED_PATH': JSON.stringify(outputPath),
            preventAssignment: true
        }),
        alias({
            entries: [
                {
                    find: 'src',
                    replacement: path.resolve(__dirname, 'src')
                }
            ],
        }),
        html2({
            template: 'public/index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
                keepClosingSlash: isProd,
            },
            title: 'bundle by rollup'
        }),
        esbuild({ // include rollup-plugin-terser & @rollup/plugin-typescript & rollup-plugin-ts
            sourceMap: true,
            minify: isProd,
        }),
        serve({
            contentBase: '.',
            port: 8000,
            // historyApiFallback: true
        })
    ],
    preserveEntrySignatures: false,
};

export default config;