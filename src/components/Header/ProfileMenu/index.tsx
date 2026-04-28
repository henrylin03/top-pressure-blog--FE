import UserAvatar from "@components/UserAvatar";
import { Group, Menu, Text } from "@mantine/core";
import { IconAlignLeft2, IconLogout } from "@tabler/icons-react";
import { Link } from "react-router";
import type { AuthContextProps as AuthState } from "@/contexts/auth";
import type { User } from "@/types/user";
import ProfileButton from "./ProfileButton";

type Props = { user: User; logout: AuthState["logout"] };

const ProfileMenu = ({ user, logout }: Props) => {
	const { username, email, isAuthor } = user;

	return (
		<Menu width={180} shadow="md">
			<Menu.Target>
				<ProfileButton username={username} email={email} />
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Label>
					<Group>
						<UserAvatar username={username} size="md" />
						<Text c="dark.7">{username}</Text>
					</Group>
				</Menu.Label>
				<Menu.Divider />
				{isAuthor && (
					<Menu.Item
						c="dark.7"
						leftSection={<IconAlignLeft2 size={20} strokeWidth={1} />}
						component={Link}
						to="/my-posts"
					>
						View posts
					</Menu.Item>
				)}
				<Menu.Item
					onClick={() => logout()}
					leftSection={<IconLogout size={20} strokeWidth={1} />}
					c="dark.7"
				>
					Sign out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};

export default ProfileMenu;
