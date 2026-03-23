import {
	Anchor,
	Button,
	Card,
	Container,
	List,
	SimpleGrid,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import styles from "@/styles/Auth.module.css";
import type { ServerSideError } from "@/types/error";
import logoImg from "/images/logo.png";

export const Route = createFileRoute("/signup")({
	component: SignUpForm,
});

function SignUpForm() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState<ServerSideError["msg"][] | null>(null);

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setErrors(null);

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: formData.get("email"),
					username: formData.get("username"),
					firstName: formData.get("firstName") || null,
					lastName: formData.get("lastName") || null,
					password: formData.get("password"),
				}),
			});

			const json = await res.json();

			if (res.ok) return navigate({ to: "/login", search: { redirect: "/" } });

			const { errors } = json;
			const errorMessages = errors.map((err: ServerSideError) => err.msg);
			setErrors(errorMessages);
		} catch (_err) {
		} finally {
			setIsLoading(false);
		}
	};

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
						<Title order={2} fz="h1" my={4}>
							Sign up for free
						</Title>
					</Stack>

					<form onSubmit={handleSubmit}>
						<Stack>
							<TextInput name="username" placeholder="Username" required />
							<TextInput
								type="email"
								name="email"
								placeholder="Email"
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
							{Array.isArray(errors) && errors.length && (
								<List fz="sm" c="#FF3399" listStyleType="disc">
									{errors.map((err) => (
										<List.Item key={err}>{err}</List.Item>
									))}
								</List>
							)}
							<Button type="submit" size="md" loading={isLoading} mt="md">
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
