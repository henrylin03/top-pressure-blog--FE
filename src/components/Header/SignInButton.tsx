import { Button } from "@mantine/core";
import { Link } from "@tanstack/react-router";

const SignInButton = () => (
	<Button variant="filled" component={Link} to="/login" size="md">
		Sign in
	</Button>
);

export default SignInButton;
