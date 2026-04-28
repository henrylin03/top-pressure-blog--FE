import {
	Anchor,
	Button,
	Card,
	Container,
	Image,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import { useAuth } from "@/contexts/auth";
import logoImg from "/images/logo.png";

export default function LoginPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const isNarrowScreen = useMediaQuery("(max-width: 48em)");
	const { user, login } = useAuth();
	const location = useLocation();

	const origin = location.state?.from?.pathname || "/";
	if (user) return <Navigate to={origin} replace />;

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		const formData = new FormData(e.currentTarget);
		const usernameOrEmail = formData.get("usernameOrEmail");
		const password = formData.get("password");

		try {
			if (!usernameOrEmail || !password)
				throw new Error("Username and/or password missing");
			await login(usernameOrEmail.toString(), password.toString());
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
				setError(err.message);
			} else {
				console.error(err);
				setError(String(err));
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<title>Log in | Top Pressure Blog for Grapplers</title>
			<Container mt="6rem">
				<Card
					shadow="xl"
					maw="22rem"
					mx="auto"
					py={{ base: "xl", xs: "4rem" }}
					px={{ base: "lg", xs: "xl" }}
					radius="lg"
				>
					<Stack align="center" gap="xl">
						<Stack component="header" align="center" gap="xs">
							<Link
								to="/"
								aria-label="Return to home page of Top Pressure blog"
							>
								<Image
									w={60}
									h="auto"
									fit="contain"
									src={logoImg}
									loading="eager"
									alt="Logo of Top Pressure Blog"
								/>
							</Link>
							<Title order={2} fz="h1" c="dark.6" ta="center">
								Welcome back!
							</Title>
						</Stack>

						<form onSubmit={handleSubmit} style={{ width: "100%" }}>
							<Stack component="ul">
								<li>
									<TextInput
										placeholder="Email or username"
										required
										name="usernameOrEmail"
										size={isNarrowScreen ? "sm" : "md"}
										error={!!error}
									/>
								</li>
								<li>
									<PasswordInput
										placeholder="Password"
										required
										name="password"
										size={isNarrowScreen ? "sm" : "md"}
										error={!!error}
									/>
								</li>
								{error && (
									<li>
										<Text
											fz="sm"
											style={{ color: "var(--mantine-color-error)" }}
										>
											{error}
										</Text>
									</li>
								)}
								<li>
									<Button
										size={isNarrowScreen ? "md" : "lg"}
										fullWidth
										type="submit"
										loading={isLoading}
									>
										Sign in
									</Button>
								</li>
							</Stack>
						</form>

						<Text fz="xs" c="dimmed">
							Don't have an account?{" "}
							<Anchor
								component={Link}
								to="/signup"
								fz="xs"
								underline="not-hover"
								c="dimmed"
							>
								Sign up
							</Anchor>
						</Text>
					</Stack>
				</Card>
			</Container>
		</>
	);
}
