import { Anchor, Button, Container, Stack, Text, Title } from "@mantine/core";
import { Link } from "@tanstack/react-router";

const ErrorComponent = () => (
	<Container mt={{ base: "8rem", xs: "10rem" }} mb="5rem">
		<Stack align="center" mx="auto" gap="sm">
			<Title order={2} size="4rem" ta="center" c="dark.7">
				404
			</Title>
			<Stack gap="4">
				<Title order={3} size="h2" ta="center" fw="normal" c="dark.7">
					Page not found
				</Title>
				<Text c="dark.5">The page you're looking for doesn't exist.</Text>
			</Stack>
			<Stack gap="md" mt="lg" justify="center">
				<Button component={Link} to="/" size="lg">
					Return home
				</Button>
				<Anchor
					href="https://github.com/henrylin03/top-pressure-blog--FE/issues/new"
					aria-label="Raise GitHub issue"
					underline="not-hover"
					ta="center"
					target="_blank"
					rel="noreferrer"
				>
					Get help
				</Anchor>
			</Stack>
		</Stack>
	</Container>
);

export default ErrorComponent;
