import Feed from "@components/Feed/Feed";
import { Container, Text, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { PublishedPostPreview } from "@/types/post";

const Index = () => {
	const [posts, setPosts] = useState<PublishedPostPreview[]>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/v1/posts`)
			.then((res) => res.json())
			.then((data) => setPosts(data.posts));
	}, []);

	return (
		<Container my="xl" h="100%">
			<header>
				<Title order={1} fz={{ base: "2.5rem", sm: "2.75rem" }} mb="sm">
					Top Pressure Blog
				</Title>
				<Text c="dark.6">
					This blog is a place for submission grappling hobbyists to share
					learnings. Whether you're a wrestler, judoka, jiujitero or just love
					giving hugs to the homies, all are welcome here.
				</Text>
			</header>

			{posts.length > 0 && <Feed posts={posts} />}
		</Container>
	);
};

export const Route = createFileRoute("/")({
	component: Index,
});
