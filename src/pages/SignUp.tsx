import {
	Anchor,
	Button,
	Card,
	Container,
	Image,
	List,
	SimpleGrid,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { useAuth } from "@/contexts/auth";
import type { ServerSideError } from "@/types/error";
import logoImg from "/images/logo.png";

export default function SignUpPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState("");
	const isNarrowScreen = useMediaQuery("(max-width: 48em)");
	const { user } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	const origin = location.state?.from?.pathname || "/";
	if (user) return <Navigate to={origin} replace />;

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setErrors("");

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

			// todo: add user's email into that page (login) straightaway
			if (res.ok) return navigate("/login");

			const json = await res.json();
			const { errors } = json;
			const errorMessages = errors.map((err: ServerSideError) => err.msg);
			setErrors(errorMessages);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<title>
				Join the community for free | Top Pressure Blog for Grapplers
			</title>
			<Container my={{ base: "xl", xs: "5rem" }}>
				<Card
					shadow="sm"
					maw="24rem"
					m="auto"
					py="xl"
					px={{ base: "md", xs: "2.5rem" }}
					radius="lg"
				>
					<Stack align="center" gap="lg">
						<Stack component="header" align="center" gap={0}>
							<Link to="/" aria-label="Return to home page">
								<Image
									w={60}
									h="auto"
									fit="contain"
									src={logoImg}
									loading="eager"
									alt="Logo of Top Pressure Blog"
								/>
							</Link>
							<Title order={2} fz="h1" my={4}>
								Sign up for free
							</Title>
						</Stack>

						<form onSubmit={handleSubmit}>
							<Stack>
								<TextInput
									name="username"
									placeholder="Username"
									required
									size={isNarrowScreen ? "sm" : "md"}
								/>
								<TextInput
									type="email"
									name="email"
									placeholder="Email"
									required
									size={isNarrowScreen ? "sm" : "md"}
								/>
								<SimpleGrid cols={2}>
									<TextInput
										name="firstName"
										placeholder="First name"
										size={isNarrowScreen ? "sm" : "md"}
									/>
									<TextInput
										name="lastName"
										placeholder="Last name"
										size={isNarrowScreen ? "sm" : "md"}
									/>
								</SimpleGrid>
								<TextInput
									type="password"
									name="password"
									placeholder="Password"
									required
									size={isNarrowScreen ? "sm" : "md"}
								/>
								{Array.isArray(errors) && errors.length && (
									<List fz="sm" c="#FF3399" listStyleType="disc">
										{errors.map((err) => (
											<List.Item key={err}>{err}</List.Item>
										))}
									</List>
								)}
								<Button
									type="submit"
									size={isNarrowScreen ? "md" : "lg"}
									loading={isLoading}
									mt="md"
								>
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
		</>
	);
}
