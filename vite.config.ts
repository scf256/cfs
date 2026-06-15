import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const normalizeBasePath = (basePath: string) => {
  if (basePath === "/" || basePath === "./") {
    return basePath;
  }

  return basePath.endsWith("/") ? basePath : `${basePath}/`;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: normalizeBasePath(process.env.VITE_BASE_PATH ?? "/"),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
