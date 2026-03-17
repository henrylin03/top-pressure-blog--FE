import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { AuthState } from "@/contexts/auth";
import { SOCIALS_LINKS } from "@/data/socialsLinks";

interface RouterContext {
	auth: AuthState;
}

const RootLayout = () => {
	const { auth } = Route.useRouteContext();
	const { isAuthenticated, user } = auth;

	return (
		<>
			<Header isAuthenticated={isAuthenticated} user={user} />
			<main>
				<Outlet />
			</main>
			<Footer links={SOCIALS_LINKS} />

			<TanStackRouterDevtools />
		</>
	);
};

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootLayout,
});
