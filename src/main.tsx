import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "@/styles/global.css";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { theme } from "@/styles/theme";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("#root element not found");

if (!rootElement.innerHTML) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<MantineProvider theme={theme}>
				<ModalsProvider>
					<RouterProvider router={router} />
				</ModalsProvider>
			</MantineProvider>
		</StrictMode>,
	);
}
