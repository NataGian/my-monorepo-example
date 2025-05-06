import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/components/**/*.ts', 'src/hooks/**/*.ts', 'src/lib/**/*.ts', 'src/styles/globals.css'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    outDir: 'dist',
    shims: false,
    external: ['react', 'react-dom'],
    noExternal: ['@radix-ui/**'],
})
