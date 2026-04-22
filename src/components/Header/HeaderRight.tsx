import { Button } from "@mantine/core";
import { Link } from "react-router";
import type { AuthState } from "@/contexts/auth";
import ProfileMenu from "./ProfileMenu";

interface Props {
	user: AuthState["user"];
	logout: AuthState["logout"];
}

const HeaderRight = ({ user, logout }: Props) => {
	if (user) return <ProfileMenu user={user} logout={logout} />;

	return (
		<Button component={Link} to="/login" variant="filled" size="md">
			Sign in
		</Button>
	);
};

export default HeaderRight;
