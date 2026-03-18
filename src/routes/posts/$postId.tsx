import { Container } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import CommentsSection from "@/components/post/CommentsSection";
import PostHeader from "@/components/post/Header";
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

	const {
		title,
		timeToReadInMinutes,
		text,
		lede,
		publishedAt,
		author,
		lastModifiedAt,
	} = post;

	console.log(post);

	return (
		<Container className={styles.wrapper} mt="xl">
			<Container component="section" className={styles.section}>
				<PostHeader
					postDetails={{
						author,
						lastModifiedAt,
						publishedAt,
						title,
						timeToReadInMinutes,
					}}
				/>
			</Container>

			<Container component="section" className={styles.section}>
				<CommentsSection comments={[{ id: "test", text: "hello" }]} />
			</Container>
		</Container>
	);
}
