import { Button, Container, Group, Stack, Tabs, Title } from "@mantine/core";
import { IconBallpen } from "@tabler/icons-react";
import { Outlet, useNavigate, useParams } from "react-router";

export default function MyPostsPage() {
	const TABS = ["published", "drafts"] as const;
	const URL_PREFIX = "/my-posts";

	const navigate = useNavigate();
	const { type: postType } = useParams();

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

				<Tabs
					component="nav"
					value={postType}
					onChange={(value) => navigate(`${URL_PREFIX}/${value}`)}
				>
					<Tabs.List>
						{TABS.map((t) => (
							<Tabs.Tab
								value={t}
								style={{ textTransform: "capitalize" }}
								key={t}
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
