import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import viteUniComponentPlaceholder from 'vite-uni-component-placeholder'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    viteUniComponentPlaceholder()
  ],
})
