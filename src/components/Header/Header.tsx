import { Box, Group } from "@mantine/core";
import { Link, useLocation } from "@tanstack/react-router";
import type { AuthState } from "@/contexts/auth";
import logo from "/images/logo.png";
import styles from "./Header.module.css";
import HeaderRight from "./HeaderRight";

const AUTH_PAGE_PATHS = ["/login", "/signup"];

interface Props {
	logout: AuthState["logout"];
	user: AuthState["user"];
}
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
				<h1 className={styles.title}>Top Pressure</h1>
			</Group>

			<HeaderRight user={user} isAuthPage={isAuthPage} logout={logout} />
		</Box>
	);
};

export default Header;
