import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';
import path from 'path'
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-dev-server'

const outputPath = process.env.NODE_PACKAGED_PATH

const config = {
    input: 'public/index.js',
    output: {
        dir: outputPath,
        format: 'es',
    },
    plugins: [
        minifyHTML(),
        copy({
            targets: [
                {src: 'node_modules/@webcomponents', dest: path.resolve(outputPath, 'node_modules')},
                {src: 'src/assets', dest: path.resolve(outputPath)},
                {src: 'public/index.html', dest: path.resolve(outputPath)},
            ]
        }),
        resolve(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.NODE_PACKAGED_PATH': JSON.stringify(outputPath),
            preventAssignment: true
        }),
        typescript({
            outDir: path.resolve(outputPath, 'lib')
        }),
        serve({
            contentBase: '.',
            port: 3000,
        })
    ],
    preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser());
}

export default config;