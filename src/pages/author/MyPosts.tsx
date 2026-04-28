import { Button, Container, Group, Stack, Title } from "@mantine/core";
import { IconBallpen } from "@tabler/icons-react";

export default function MyPostsPage() {
	return (
		<Container my="xl">
			<Stack gap="xl">
				<Group justify="space-between" align="center" component="header">
					<Title order={2} size="h1">
						My Posts
					</Title>
					<Button leftSection={<IconBallpen size={20} />} size="md" mt="xs">
						Write post
					</Button>
				</Group>
			</Stack>
		</Container>
	);
}
