import { MantineProvider } from "@mantine/core";
import { render as testingLibraryRender } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { AuthProvider } from "@/contexts/auth";

export function render(ui: React.ReactNode) {
	return testingLibraryRender(ui, {
		wrapper: ({ children }: { children: React.ReactNode }) => (
			<MemoryRouter>
				<MantineProvider env="test">
					<AuthProvider>{children}</AuthProvider>
				</MantineProvider>
			</MemoryRouter>
		),
	});
}
