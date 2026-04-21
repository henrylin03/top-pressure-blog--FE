import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";
import "@mantine/core/styles.css";

const App = () => (
	<MantineProvider theme={theme}>
		<p>hello world</p>
	</MantineProvider>
);

export default App;
