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
import { Link } from "react-router";
import logoImg from "/images/logo.png";

export function SignUpPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState("");
	const isNarrowScreen = useMediaQuery("(max-width: 48em)");

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setErrors("");

		const form = e.currentTarget;
		const _formData = new FormData(form);
	};

	return (
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
	);
}
