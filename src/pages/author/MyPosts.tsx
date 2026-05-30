import { Button, Container, Group, Stack, Tabs, Title } from "@mantine/core";
import { IconBallpen } from "@tabler/icons-react";
import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import { AUTHORED_POST_TYPE as TABS } from "@/types/post";

export default function MyPostsPage() {
	const [isLoading, setIsLoading] = useState(false);

	const URL_PREFIX = "/my-posts";

	const navigate = useNavigate();
	const { type: postsType } = useParams();

	const handleClickOnCreateNewPost = async () => {
		setIsLoading(true);
		const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
		if (!jwt) navigate("/login");

		try {
			const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/posts`, {
				method: "POST",
				headers: { Authorization: `Bearer ${jwt}` },
			});

			if (!res.ok) throw new Error("Cannot create new post");
			const json = await res.json();
			const { id: draftPostId } = json.newDraftPost;

			if (!draftPostId)
				throw new Error("Server could not generate new post ID");

			navigate(`${URL_PREFIX}/${draftPostId}/edit?new`);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<title>My posts | Top Pressure Blog for Grapplers</title>
			<Container my="xl">
				<Stack gap="xl">
					<Group justify="space-between" align="center" component="header">
						<Title order={2} size="h1">
							My Posts
						</Title>
						<Button
							leftSection={<IconBallpen size={20} />}
							size="md"
							mt="xs"
							onClick={handleClickOnCreateNewPost}
							loading={isLoading}
						>
							Write post
						</Button>
					</Group>

					<Tabs
						component="nav"
						value={postsType}
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
		</>
	);
}
