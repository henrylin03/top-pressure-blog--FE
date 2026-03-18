import {
	Button,
	Card,
	Container,
	PasswordInput,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import {
	createFileRoute,
	Link,
	useNavigate,
	useRouter,
} from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/contexts/auth";
import styles from "@/styles/Login.module.css";
import logoImg from "/images/logo.png";

export const Route = createFileRoute("/login")({
	validateSearch: (search) => ({
		redirect: search.redirect || "/",
	}),
	component: LoginPage,
});

function LoginPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();
	const router = useRouter();
	const { redirect } = Route.useSearch();

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		const formDataObject = new FormData(e.currentTarget);
		const usernameOrEmail = formDataObject.get("usernameOrEmail");
		const password = formDataObject.get("password");

		try {
			await login(String(usernameOrEmail), String(password));
			await router.invalidate();
			navigate({ to: redirect ? String(redirect) : "/" });
		} catch (_err) {
			setError("Invalid username or password");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container mt="5rem">
			<Card
				shadow="sm"
				maw="24rem"
				m="auto"
				pt="xl"
				pb={{ base: "xl", xs: "5rem" }}
				px={{ base: "md", xs: "2.5rem" }}
				radius="lg"
			>
				<Stack align="center" gap="lg">
					<Stack component="header" align="center" gap={0}>
						<Link to="/" aria-label="Return to home page">
							<img
								className={styles.logo}
								src={logoImg}
								alt="Logo of Top Pressure Blog"
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
							{error && (
								<li>
									<Text fz="sm" c="#FF3399">
										{error}
									</Text>
								</li>
							)}
							<li>
								<Button size="md" fullWidth type="submit" loading={isLoading}>
									{isLoading ? "Signing in" : "Sign in"}
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
}
