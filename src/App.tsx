import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";
import "@mantine/core/styles.css";
import Header from "@components/Header";
import { SOCIALS_LINKS } from "@/data/socialsLinks";
import Footer from "./components/Footer";

const App = () => (
	<MantineProvider theme={theme}>
		<Header />
		<p>hello world</p>
		<Footer links={SOCIALS_LINKS} />
	</MantineProvider>
);

export default App;
