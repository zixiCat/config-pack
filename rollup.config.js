import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/index.tsx',
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [sass({ insert: true }), typescript()],
    external: ['react', 'react-dom']
}
