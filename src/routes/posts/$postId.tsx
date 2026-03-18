import { Container, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import styles from "@/styles/Post.module.css";
import type { PublishedPost } from "@/types/post";

export const Route = createFileRoute("/posts/$postId")({
	component: PostPage,
});

function PostPage() {
	const [_post, _setPost] = useState<PublishedPost | null>(null);

	const { postId } = Route.useParams();
	console.log(postId);

	// useEffect(() => {

	// }, []);

	return (
		<Container>
			<Container component="section" className={styles.section}>
				<Title order={2} size="h1" fw={400}>
					The Deep Half
				</Title>
			</Container>
			<Container component="section" className={styles.section}></Container>
		</Container>
	);
}
