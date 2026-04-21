import { Box, Group, Title } from "@mantine/core";
import logo from "/images/logo.png";
import styles from "./Header.module.css";
import HeaderRight from "./HeaderRight";

const Header = () => {
	return (
		<Box component="header" className={styles.header}>
			<Group gap="md" h="100%" className={styles.link}>
				<img src={logo} loading="eager" alt="logo" width="32" height="32" />
				<Title order={1} fz="h2" mb="2" visibleFrom="xs">
					Top Pressure
				</Title>
			</Group>

			<HeaderRight />
		</Box>
	);
};

export default Header;
