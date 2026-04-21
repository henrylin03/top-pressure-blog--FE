import { Container } from "@mantine/core";
import { useParams } from "react-router";
import ErrorMessageSection from "@/components/ErrorMessage";
import { useFetchPost } from "@/hooks/useFetchPost";
import CommentsSection from "./CommentsSection";
import styles from "./Post.module.css";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

const PostPage = () => {
	const { postId } = useParams();
	const { post, isLoading, error } = useFetchPost(String(postId));

	if (isLoading) return <>Loading...</>;
	if (error || !post) return <ErrorMessageSection />;

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
