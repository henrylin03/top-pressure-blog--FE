import Header from "@components/Header";
import { Outlet } from "react-router";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/contexts/auth";
import { SOCIALS_LINKS } from "@/data/socialsLinks";

const App = () => (
	<AuthProvider>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer links={SOCIALS_LINKS} />
	</AuthProvider>
);

export default App;
