import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		tanstackRouter({ target: "react", autoCodeSplitting: true }),
		react(),
	],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:6969",
				changeOrigin: true,
			},
		},
	},
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./vitest.setup.mjs",
	},
});
