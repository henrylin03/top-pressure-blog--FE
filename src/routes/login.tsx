import { createFileRoute } from "@tanstack/react-router";

const LoginPage = () => {
	return <div>Hello "/login"!</div>;
};

export const Route = createFileRoute("/login")({
	component: LoginPage,
});
