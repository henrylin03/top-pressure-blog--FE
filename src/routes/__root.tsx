import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
	<>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer />

		<TanStackRouterDevtools />
	</>
);

export const Route = createRootRoute({ component: RootLayout });
