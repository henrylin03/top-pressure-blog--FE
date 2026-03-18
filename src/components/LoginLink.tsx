import { Link, useRouter } from "@tanstack/react-router";

const LoginLink = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	return (
		<Link to="/login" search={{ redirect: router.state.location.href }}>
			{children}
		</Link>
	);
};

export default LoginLink;
