import { Group, Menu, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { useNavigate, useRouter } from "@tanstack/react-router";
import ProfileButton from "./ProfileButton";
import UserAvatar from "./UserAvatar";

type Props = Readonly<{ username: string; email: string; logout: () => void }>;

const ProfileMenu = ({ username, email, logout }: Props) => {
	const navigate = useNavigate();
	const router = useRouter();

	const handleClickOnSignOut = async () => {
		logout();
		await router.invalidate();
		navigate({ to: "/" });
	};

	return (
		<Menu width={180}>
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
				<Menu.Item
					onClick={handleClickOnSignOut}
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
