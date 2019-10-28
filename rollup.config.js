
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: ['build/pwa-install.js'],
	output: {
		file: 'dist/pwa-install.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve()
  ]
};