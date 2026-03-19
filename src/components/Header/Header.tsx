import LoginLink from "@components/LoginLink";
import { Box, Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import type { AuthState } from "@/contexts/auth";
import logo from "/images/logo.png";
import styles from "./Header.module.css";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

type Props = Omit<AuthState, "login">;

const Header = ({ isAuthenticated, user, logout }: Props) => (
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

		{isAuthenticated && user ? (
			<ProfileMenu
				username={user.username}
				email={user.email}
				logout={logout}
			/>
		) : (
			<LoginLink>
				<Button variant="filled" size="md">
					Sign in
				</Button>
			</LoginLink>
		)}
	</Box>
);

export default Header;
