import { Container } from "@mantine/core";
import { useParams } from "react-router";
import { useFetchPost } from "@/hooks/useFetchPost";
import CommentsSection from "./CommentsSection";
import styles from "./Post.module.css";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

const PostPage = () => {
	const { postId } = useParams();
	const { post, isLoading } = useFetchPost(String(postId));
	console.log("post (in component):", post);

	if (isLoading || !post) return <>Loading...</>;

	const {
		author,
		lastModifiedAt,
		publishedAt,
		title,
		timeToReadInMinutes,
		lede,
		text,
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
				<CommentsSection comments={comments} postId={String(postId)} />
			</Container>
		</Container>
	);
};

export default PostPage;
