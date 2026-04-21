import { Box, Button, Group, Title } from "@mantine/core";
import { Link } from "react-router";
import logo from "/images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<Box component="header" className={styles.header}>
			<Group gap="md" h="100%" className={styles.link}>
				<img src={logo} loading="eager" alt="logo" width="32" height="32" />
				<Title order={1} fz="h2" mb="2" visibleFrom="xs">
					Top Pressure
				</Title>
			</Group>

			<Button component={Link} to="/login" variant="filled" size="md">
				Sign in
			</Button>
		</Box>
	);
};

export default Header;
