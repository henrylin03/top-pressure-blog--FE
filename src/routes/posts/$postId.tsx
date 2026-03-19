import { Container } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import PostBody from "@/components/post/Body";
import CommentsSection from "@/components/post/comments/CommentsSection";
import PostHeader from "@/components/post/Header";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import styles from "@/styles/Post.module.css";
import type { Post } from "@/types/post";

export const Route = createFileRoute("/posts/$postId")({
	component: PostPage,
});

function PostPage() {
	const [post, setPost] = useState<Post | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const { postId } = Route.useParams();
	const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY) || "";

	const fetchPost = useCallback(async (postId: string, jwt: string) => {
		try {
			const res = await fetch(`/api/posts/${postId}`, {
				headers: { Authorization: jwt ? `Bearer ${jwt}` : "" },
			});
			if (!res.ok) throw new Error("404: post not found.");

			const { post } = await res.json();
			if (!post) throw new Error("404: post not found");
			setPost(post);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchPost(postId, token);
	}, [token, postId, fetchPost]);

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
		comments,
	} = post;

	return (
		<Container className={styles.wrapper} my="xl">
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
				<PostBody lede={lede} text={text} />
			</Container>

			<Container component="section" className={styles.section}>
				<CommentsSection
					comments={comments}
					postId={postId}
					fetchPost={fetchPost}
				/>
			</Container>
		</Container>
	);
}
