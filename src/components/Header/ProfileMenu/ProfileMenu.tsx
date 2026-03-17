import {
	Avatar,
	Group,
	type MantineSize,
	Menu,
	Text,
	UnstyledButton,
} from "@mantine/core";
import { forwardRef } from "react";

interface UserAvatarProps {
	username: string;
	size?: MantineSize;
}

const UserAvatar = ({ username, size }: UserAvatarProps) => (
	<Avatar variant="filled" color="cyan" radius="xl" size={size}>
		{username[0].toUpperCase()}
	</Avatar>
);

interface ProfileButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	username: string;
	email: string;
}

const ProfileButton = forwardRef<HTMLButtonElement, ProfileButtonProps>(
	({ username, email, ...others }: ProfileButtonProps, ref) => (
		<UnstyledButton ref={ref} {...others}>
			<UserAvatar username={username} />
		</UnstyledButton>
	),
);

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
