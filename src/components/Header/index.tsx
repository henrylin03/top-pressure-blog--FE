import { Divider, Group, Paper, Title } from "@mantine/core";
import { Link } from "react-router";
import { useAuth } from "@/contexts/auth";
import logo from "/images/logo.png";
import HeaderRight from "./HeaderRight";

const Header = () => {
	const { user, logout } = useAuth();

	return (
		<Paper component="header" px="xl" py="lg" shadow="xs" radius={0}>
			<Group justify="space-between">
				<Group
					gap="md"
					h="100%"
					renderRoot={(props) => (
						<Link to="/" aria-label="Go home" {...props} />
					)}
				>
					<img src={logo} loading="eager" alt="logo" width="32" height="32" />
					<Group gap="xs">
						<Title order={1} fz="h3" mb={4} visibleFrom="sm">
							Top Pressure
						</Title>
						{user?.isAuthor && (
							<>
								<Divider
									orientation="vertical"
									size="sm"
									h={24}
									my="auto"
									visibleFrom="sm"
								/>
								<Title order={1} fz="h3" mb={4} visibleFrom="sm">
									Editor
								</Title>
							</>
						)}
					</Group>
				</Group>

				<HeaderRight user={user} logout={logout} />
			</Group>
		</Paper>
	);
};

export default Header;
