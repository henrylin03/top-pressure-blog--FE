import {
	Anchor,
	Button,
	Card,
	Container,
	SimpleGrid,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import styles from "@/styles/Auth.module.css";
import logoImg from "/images/logo.png";

export const Route = createFileRoute("/signup")({
	component: SignUpForm,
});

function SignUpForm() {
	const [isLoading, _setIsLoading] = useState(false);
	const [error, _setError] = useState("");

	const handleSubmit = (_e) => {};

	return (
		<Container my={{ base: "xl", xs: "5rem" }}>
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
						<Title order={2} className={styles.heading}>
							Sign Up For Free
						</Title>
					</Stack>

					<form onSubmit={handleSubmit}>
						<Stack>
							<TextInput name="username" placeholder="Username" required />
							<TextInput
								type="email"
								name="email"
								placeholder="Email address"
								required
							/>
							<SimpleGrid cols={2}>
								<TextInput name="firstName" placeholder="First name" />
								<TextInput name="lastName" placeholder="Last name" />
							</SimpleGrid>
							<TextInput
								type="password"
								name="password"
								placeholder="Password"
								required
							/>
							{error && (
								<Text fz="sm" c="#FF3399">
									{error}
								</Text>
							)}
							<Button type="submit" size="md" loading={isLoading}>
								Sign up for free
							</Button>
						</Stack>
					</form>

					<Text fz="xs" c="dimmed">
						Already have an account?{" "}
						<Anchor
							component={Link}
							to="/login"
							fz="xs"
							underline="not-hover"
							c="dimmed"
						>
							Sign in
						</Anchor>
					</Text>
				</Stack>
			</Card>
		</Container>
	);
}
