import { UnstyledButton } from "@mantine/core";
import { forwardRef } from "react";
import UserAvatar from "./UserAvatar";

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

export default ProfileButton;
