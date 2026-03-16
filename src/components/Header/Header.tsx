import { Box, Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import logo from "/images/logo.png";
import styles from "./Header.module.css";

const SignInButton = () => (
	<Button variant="filled" component={Link} to="/login" size="md">
		Sign in
	</Button>
);

const Header = () => (
	<Box component="header" className={styles.header}>
		<Group
			gap="md"
			h="100%"
			renderRoot={(props) => <Link to="/" aria-label="Go home" {...props} />}
			className={styles.link}
		>
			<img src={logo} loading="eager" alt="logo" width="32" height="32" />
			<h1 className={styles.title}>Top Pressure</h1>
		</Group>
		<SignInButton />
	</Box>
);

export default Header;
