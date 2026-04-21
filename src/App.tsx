import Header from "@components/Header";
import { Outlet } from "react-router";
import { SOCIALS_LINKS } from "@/data/socialsLinks";
import Footer from "./components/Footer";

const App = () => (
	<>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer links={SOCIALS_LINKS} />
	</>
);

export default App;
