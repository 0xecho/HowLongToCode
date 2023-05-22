import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  const loadedEnvs = loadEnv(mode, process.cwd())

  console.log('loadedEnvs :>> ', loadedEnvs)

  return defineConfig({
    plugins: [vue()],
    base: mode === 'production' ? loadedEnvs.VITE_APP_BASE_URL : '/',
  })
}
