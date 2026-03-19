import { Container } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import PostBody from "@/components/post/Body";
import CommentsSection from "@/components/post/comments/CommentsSection";
import PostHeader from "@/components/post/Header";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import styles from "@/styles/Post.module.css";
import type { Comment } from "@/types/comment";
import type { PublishedPost } from "@/types/post";

export const Route = createFileRoute("/posts/$postId")({
	component: PostPage,
});

function PostPage() {
	const [post, setPost] = useState<PublishedPost | null>(null);
	const [comments, setComments] = useState<Comment[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { postId } = Route.useParams();
	const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY) || "";

	const fetchPost = useCallback(async (postId: string, token: string) => {
		try {
			const res = await fetch(`/api/posts/${postId}`, {
				headers: { Authorization: token ? `Bearer ${token}` : "" },
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

	const fetchComments = useCallback(async (postId: string) => {
		try {
			const res = await fetch(`/api/posts/${postId}/comments`);
			if (!res.ok) throw new Error("Error retrieving comments from post");
			const { comments } = await res.json();
			setComments(comments);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchPost(postId, token);
		fetchComments(postId);
	}, [token, postId, fetchPost, fetchComments]);

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
				<CommentsSection comments={comments} postId={postId} />
			</Container>
		</Container>
	);
}
