// const fs = require('fs');
// const compress = require('brotli/compress');

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { compress } from 'brotli';

const brotliSettings = {
    extension: 'br',
    skipLarger: true,
    mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
    quality: 10, // 0 - 11,
    lgwin: 12, // default
    threshold: 10240
};

// fs.readdirSync('dist/').forEach(file => {
//     if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
//         const result = brotli.compress(fs.readFileSync('dist/' + file), brotliSettings);
//         fs.writeFileSync('dist/' + file + '.br', result);
//     }
// });

readdirSync('dist/').forEach(file => {
    if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
        const result = compress(readFileSync('dist/' + file), brotliSettings);
        writeFileSync('dist/' + file + '.br', result);
    }
});
