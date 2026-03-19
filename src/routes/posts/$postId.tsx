import { Container } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
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

const DEFAULT_DOCUMENT_TITLE =
	"BJJ, Wrestling, Judo | Top Pressure Blog for Submission Grapplers";
const DOCUMENT_TITLE_SUFFIX = "Top Pressure Blog for Submission Grapplers";

function PostPage() {
	const [post, setPost] = useState<Post | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const { postId } = Route.useParams();
	useDocumentTitle(
		post ? `${post.title} | ${DOCUMENT_TITLE_SUFFIX}` : DEFAULT_DOCUMENT_TITLE,
	);

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
		const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY) || "";

		fetchPost(postId, token);
	}, [postId, fetchPost]);

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
