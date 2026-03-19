import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signup")({
	component: SignUpForm,
});

function SignUpForm() {
	return <div>Hello "/signup"!</div>;
}
