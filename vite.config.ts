import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages base path configuration
  // For project pages: use '/repository-name/'
  // For user/organization pages (root): use '/'
  // Change this to match your repository name or use '/' for root
  const repositoryName = 'StudentPlatform_Landing'; // Change this to your repo name
  const base = process.env.NODE_ENV === 'production' 
    ? `/${repositoryName}/` 
    : '/';

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
