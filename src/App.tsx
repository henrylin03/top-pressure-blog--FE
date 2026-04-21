import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";
import "@mantine/core/styles.css";

const App = () => <MantineProvider theme={theme}>hello</MantineProvider>;

export default App;
