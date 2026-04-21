import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";
import "@mantine/core/styles.css";
import Header from "@components/Header";
import { Outlet } from "react-router";
import { SOCIALS_LINKS } from "@/data/socialsLinks";
import Footer from "./components/Footer";
import "@/styles/global.css";

const App = () => (
	<MantineProvider theme={theme}>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer links={SOCIALS_LINKS} />
	</MantineProvider>
);

export default App;
