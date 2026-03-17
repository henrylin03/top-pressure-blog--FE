import { Group, Menu, Text } from "@mantine/core";
import ProfileButton from "./ProfileButton";
import UserAvatar from "./UserAvatar";

const ProfileMenu = ({
	username,
	email,
}: {
	username: string;
	email: string;
}) => (
	<Menu withArrow width={180}>
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
			<Menu.Item>Log out</Menu.Item>
		</Menu.Dropdown>
	</Menu>
);

export default ProfileMenu;
