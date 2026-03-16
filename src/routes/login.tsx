import {
	Button,
	Card,
	Container,
	PasswordInput,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "@/styles/Login.module.css";
import logoImg from "/images/logo.png";

const LoginPage = () => (
	<Container>
		<Card shadow="sm" maw="28rem" mx="auto" py="xl" px="5rem">
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

				<form className={styles.form} method="POST" action="/api/login">
					<Stack component="ul" className={styles.inputs}>
						<li>
							<TextInput
								placeholder="Email or username"
								required
								name="usernameOrEmail"
							/>
						</li>
						<li>
							<PasswordInput placeholder="Password" required name="password" />
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

export const Route = createFileRoute("/login")({
	component: LoginPage,
});
