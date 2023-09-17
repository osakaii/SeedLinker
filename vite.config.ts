import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import viteSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: "@emotion/react" }), viteTsconfigPaths(), viteSvgr()],
  server: {
    port: 3001,
    open: true,
  },
});
