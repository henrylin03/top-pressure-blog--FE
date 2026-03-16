import {
	Button,
	Card,
	Container,
	PasswordInput,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import styles from "@/styles/Login.module.css";
import logoImg from "/images/logo.png";

const LoginPage = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formDataObject = new FormData(e.currentTarget);
		const response = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				usernameOrEmail: formDataObject.get("usernameOrEmail"),
				password: formDataObject.get("password"),
			}),
		});

		if (response.ok) navigate({ to: "/" });
	};

	return (
		<Container mt="5rem">
			<Card
				shadow="sm"
				maw="24rem"
				m="auto"
				pt="xl"
				pb="5rem"
				px="2.5rem"
				radius="lg"
			>
				<Stack align="center" gap="lg">
					<Stack component="header" align="center" gap={0}>
						<Link to="/" aria-label="Return to home page">
							<img
								src={logoImg}
								alt="Logo of Top Pressure Blog"
								width="80"
								height="80"
								loading="eager"
							/>
						</Link>
						<h2 className={styles.heading}>Welcome back</h2>
					</Stack>

					<form className={styles.form} onSubmit={handleSubmit}>
						<Stack component="ul" className={styles.inputs}>
							<li>
								<TextInput
									placeholder="Email or username"
									required
									name="usernameOrEmail"
								/>
							</li>
							<li>
								<PasswordInput
									placeholder="Password"
									required
									name="password"
								/>
							</li>
							<li>
								<Button size="md" fullWidth type="submit">
									Sign in
								</Button>
							</li>
						</Stack>
					</form>

					<Text fz="xs" c="dimmed">
						Don't have an account? <Link to="/signup">Sign up</Link>
					</Text>
				</Stack>
			</Card>
		</Container>
	);
};

export const Route = createFileRoute("/login")({
	component: LoginPage,
});
