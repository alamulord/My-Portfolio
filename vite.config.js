// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';
// import { resolve, dirname } from 'path';
// import { fileURLToPath } from 'url';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       '#components': resolve(
//         dirname(fileURLToPath(import.meta.url)),
//         'src/components',
//       ),
//       '#windows': resolve(
//         dirname(fileURLToPath(import.meta.url)),
//         'src/windows',
//       ),
//       '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
//       '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
//       '#constants': resolve(
//         dirname(fileURLToPath(import.meta.url)),
//         'src/constants',
//       ),
//     },
//   },
//   server: {
//     fs: {
//       strict: false,
//       allow: ['..'],
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

function pdfBase64Loader() {
  return {
    name: 'pdf-base64',
    enforce: 'pre',
    load(id) {
      const cleanId = id.split('?')[0];
      if (cleanId.endsWith('.pdf') && fs.existsSync(cleanId)) {
        const buffer = fs.readFileSync(cleanId);
        const base64 = buffer.toString('base64');
        return `export default "data:application/pdf;base64,${base64}";`;
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pdfBase64Loader()],
  resolve: {
    alias: {
      '#components': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/components',
      ),
      '#windows': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/windows',
      ),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#constants': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/constants',
      ),
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});