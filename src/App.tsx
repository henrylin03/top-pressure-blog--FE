import { MantineProvider } from "@mantine/core";
import "./styles/global.css";
import "@mantine/core/styles.css";

const App = () => (
	<MantineProvider>
		<h1>hello world</h1>
	</MantineProvider>
);

export default App;
