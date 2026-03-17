import { Box, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import type { User } from "@/types/user";
import logo from "/images/logo.png";
import styles from "./Header.module.css";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import SignInButton from "./SignInButton";

interface Props {
	isAuthenticated: boolean;
	user: User | null;
}

const Header = ({ isAuthenticated, user }: Props) => (
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
			<ProfileMenu username={user.username} email={user.email} />
		) : (
			<SignInButton />
		)}
	</Box>
);

export default Header;
