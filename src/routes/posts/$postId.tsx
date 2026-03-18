import { Anchor, Container, Group, Text, Title } from "@mantine/core";
import { IconHourglassHigh } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import styles from "@/styles/Post.module.css";
import type { PublishedPost } from "@/types/post";

export const Route = createFileRoute("/posts/$postId")({
	component: PostPage,
});

function PostPage() {
	const [post, setPost] = useState<PublishedPost | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const { postId } = Route.useParams();

	useEffect(() => {
		const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

		fetch(`/api/posts/${postId}`, {
			headers: { Authorization: token ? `Bearer ${token}` : "" },
		})
			.then((res) => res.json())
			.then((json) => {
				if (!json.post) throw new Error("404: Post not found");
				setPost(json.post);
			})
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	}, [postId]);

	if (isLoading) return <Container>Loading...</Container>;

	if (!post)
		return (
			<Container>
				An error has occurred when fetching blog post. Please refresh the page.
			</Container>
		);

	const { title, timeToReadInMinutes, text, lede, publishedAt } = post;
	if (!title || !timeToReadInMinutes || !text || !lede || !publishedAt)
		return (
			<Container>
				An error has occurred when fetching blog post. Please refresh the page.
			</Container>
		);

	const timeToReadPostRounded = Math.ceil(post.timeToReadInMinutes);

	return (
		<Container className={styles.wrapper} mt="xl">
			<Container component="section" className={styles.section}>
				<Group component={Text} fz="sm" c="dimmed" gap={8}>
					<IconHourglassHigh size={16} />
					<span>{timeToReadPostRounded} min read</span>
				</Group>
				<Title order={2} size="h1" fw={400}>
					{post?.title}
				</Title>
				<Text>
					{String(publishedAt)} by{" "}
					<Anchor href="https://henrylin.io" target="_blank" rel="noreferrer">
						Henry Lin
					</Anchor>
				</Text>
			</Container>

			<Container component="section" className={styles.section}>
				<Title order={3} fw={400}>
					Latest comments (2)
				</Title>
			</Container>
		</Container>
	);
}
