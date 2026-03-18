import { Button } from "@mantine/core";
import { Link, useRouter } from "@tanstack/react-router";

const SignInButton = () => {
	const router = useRouter();
	return (
		<Link to="/login" search={{ redirect: router.state.location.href }}>
			<Button variant="filled" size="md">
				Sign in
			</Button>
		</Link>
	);
};

export default SignInButton;
