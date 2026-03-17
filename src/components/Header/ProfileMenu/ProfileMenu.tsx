import { Avatar, Menu, UnstyledButton } from "@mantine/core";
import { forwardRef } from "react";

interface ProfileButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	username: string;
	email: string;
}

const ProfileButton = forwardRef<HTMLButtonElement, ProfileButtonProps>(
	({ username, email, ...others }: ProfileButtonProps, ref) => (
		<UnstyledButton ref={ref} {...others}>
			<Avatar color="cyan" radius="xl">
				{username[0].toUpperCase()}
			</Avatar>
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
	<Menu withArrow>
		<Menu.Target>
			<ProfileButton username={username} email={email} />
		</Menu.Target>
		<Menu.Dropdown>
			<Menu.Item>Log out</Menu.Item>
		</Menu.Dropdown>
	</Menu>
);

export default ProfileMenu;
