import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
// this plugin is used to fix antd style issue
import svgrPlugin from 'vite-plugin-svgr';
// this plugin is used for use svg as react component in vite
import reactJsx from 'vite-react-jsx';

// this plugin is used for support react-jsx syntax
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // this alias is used to fix antd less "import issue"
      { find: /^~/, replacement: '' },
      { find: '@', replacement: '/src' },
    ],
  },
  envPrefix: ['VITE_', 'TEST_'],
  plugins: [
    reactJsx(),
    reactRefresh(),
    svgrPlugin(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => {
            if (name === 'col' || name === 'row') {
              return 'antd/lib/style/index.less';
            }
            return `antd/es/${name}/style/index.less`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: {},
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    port: 3030,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
