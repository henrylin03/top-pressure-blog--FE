import { Container } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { createFileRoute, notFound } from "@tanstack/react-router";
import PostBody from "@/components/post/Body";
import CommentsSection from "@/components/post/comments/CommentsSection";
import PostHeader from "@/components/post/Header";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import styles from "@/styles/Post.module.css";
import type { Post } from "@/types/post";

const DEFAULT_DOCUMENT_TITLE =
	"BJJ, Wrestling, Judo | Top Pressure Blog for Submission Grapplers";
const DOCUMENT_TITLE_SUFFIX = "Top Pressure Blog for Submission Grapplers";

async function fetchPost(postId: string): Promise<Post> {
	const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY) || "";
	const res = await fetch(
		`${import.meta.env.VITE_API_URL}/api/posts/${postId}`,
		{
			headers: { Authorization: jwt ? `Bearer ${jwt}` : "" },
		},
	);
	if (!res.ok) throw notFound();

	const { post } = await res.json();
	if (!post) throw notFound();

	return post;
}

function PostPage() {
	const { post } = Route.useLoaderData();
	const { postId } = Route.useParams();
	useDocumentTitle(
		post ? `${post.title} | ${DOCUMENT_TITLE_SUFFIX}` : DEFAULT_DOCUMENT_TITLE,
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
				<CommentsSection comments={comments} postId={postId} />
			</Container>
		</Container>
	);
}

export const Route = createFileRoute("/posts/$postId")({
	component: PostPage,
	loader: async ({ params: { postId } }) => {
		const post = await fetchPost(postId);
		return { post };
	},
});
