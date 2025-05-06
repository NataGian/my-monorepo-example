import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/components/**/*.ts', 'src/hooks/**/*.ts', 'src/lib/**/*.ts', 'src/styles/globals.css'],
    format: ['esm', 'cjs'],
    dts: {
        resolve: true,
        entry: 'src/index.ts',
    },
    clean: true,
    outDir: 'dist',
    shims: true,
    external: ['react', 'react-dom'],
    noExternal: ['@radix-ui/**'],
})
