import { Box, Group, Title } from "@mantine/core";
import { Link, useLocation } from "@tanstack/react-router";
import type { AuthState } from "@/contexts/auth";
import logo from "/images/logo.png";
import styles from "./Header.module.css";
import HeaderRight from "./HeaderRight";

const AUTH_PAGE_PATHS = ["/login", "/signup"];

type Props = Omit<AuthState, "login">;
const Header = ({ user, logout }: Props) => {
	const pathname = useLocation({ select: (location) => location.pathname });
	const isAuthPage = AUTH_PAGE_PATHS.includes(pathname);

	return (
		<Box component="header" className={styles.header}>
			<Group
				gap="md"
				h="100%"
				renderRoot={(props) => <Link to="/" aria-label="Go home" {...props} />}
				className={styles.link}
			>
				<img src={logo} loading="eager" alt="logo" width="32" height="32" />
				<Title order={1} fz="h2" mb="2" visibleFrom="xs">
					Top Pressure
				</Title>
			</Group>

			<HeaderRight user={user} isAuthPage={isAuthPage} logout={logout} />
		</Box>
	);
};

export default Header;
