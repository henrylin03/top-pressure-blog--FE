import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SOCIALS_LINKS } from "../data/socialsLinks";

const RootLayout = () => (
	<>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer links={SOCIALS_LINKS} />

		<TanStackRouterDevtools />
	</>
);

export const Route = createRootRoute({ component: RootLayout });
