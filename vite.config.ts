import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages base path configuration
  // For project pages (subdirectory): use '/repository-name/'
  // For user/organization pages (root domain): use '/'
  // IMPORTANT: This must match REPOSITORY_NAME in src/config/base-path.ts
  const repositoryName = 'StudentPlatform_Landing';
  const base = repositoryName ? `/${repositoryName}/` : '/';

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  };
});
