import { Button, Container, Group, Stack, Tabs, Title } from "@mantine/core";
import { IconBallpen } from "@tabler/icons-react";
import { Outlet } from "react-router";

export default function MyPostsPage() {
	const TABS = ["published", "drafts"];

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

				<Tabs component="nav" defaultValue={TABS[0]}>
					<Tabs.List>
						{TABS.map((t) => (
							<Tabs.Tab
								value={t}
								key={t}
								style={{ textTransform: "capitalize" }}
							>
								{t}
							</Tabs.Tab>
						))}
					</Tabs.List>
				</Tabs>

				<Outlet />
			</Stack>
		</Container>
	);
}
