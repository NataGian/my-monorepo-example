import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/components/**/*.tsx', 'src/hooks/**/*.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    outDir: 'dist',
    shims: true,
    external: ['react', 'react-dom'],
})
