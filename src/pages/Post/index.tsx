import { Container } from "@mantine/core";
import { useParams } from "react-router";
import { useFetchPost } from "@/hooks/useFetchPost";
import styles from "./Post.module.css";

const PostPage = () => {
	const { postId } = useParams();
	const { post, isLoading } = useFetchPost(String(postId));
	console.log("post (in component):", post);

	if (isLoading)
		return (
			<Container className={styles.wrapper} my="xl">
				<Container component="section" className={styles.section}></Container>
				<Container component="section" className={styles.section}></Container>
			</Container>
		);

	return (
		// <Container className={styles.wrapper} my="xl">
		// 	<Container component="section" className={styles.section}>
		// 		<PostHeader
		// 			postDetails={{
		// 				author,
		// 				lastModifiedAt,
		// 				publishedAt,
		// 				title,
		// 				timeToReadInMinutes,
		// 			}}
		// 		/>
		// 		<PostBody lede={lede} text={text} />
		// 	</Container>
		// 	<Container component="section" className={styles.section}>
		// 		<CommentsSection comments={comments} postId={String(postId)} />
		// 	</Container>
		// </Container>
		<></>
	);
};

export default PostPage;
