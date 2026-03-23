import LoginLink from "@components/LoginLink";
import { Button } from "@mantine/core";
import type { AuthState } from "@/contexts/auth";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

interface Props {
	user: AuthState["user"];
	isAuthPage: boolean;
	logout: AuthState["logout"];
}

const HeaderRight = ({ user, isAuthPage, logout }: Props) => {
	if (user)
		return (
			<ProfileMenu
				username={user.username}
				email={user.email}
				logout={logout}
			/>
		);

	if (!isAuthPage)
		return (
			<LoginLink>
				<Button variant="filled" size="md">
					Sign in
				</Button>
			</LoginLink>
		);
};

export default HeaderRight;
