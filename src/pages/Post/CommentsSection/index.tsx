import { Divider, Stack, Title } from "@mantine/core";
import { useAuth } from "@/contexts/auth";
import type { Comment as CommentType } from "@/types/comment";
import type { Post } from "@/types/post";
import styles from "../Post.module.css";
import AuthenticatedCommentInput from "./AuthenticatedCommentInput";
import Comment from "./Comment";
import UnauthenticatedCommentInput from "./UnauthenticatedCommentInput";

interface Props {
	comments: CommentType[];
	postId: Post["id"];
}

const CommentsSection = ({ comments, postId }: Props) => {
	const { user } = useAuth();

	return (
		<>
			<Title order={3} fw={400} mb="lg" className={styles.heading}>
				Latest comments ({comments.length})
			</Title>

			{user ? (
				<AuthenticatedCommentInput username={user.username} postId={postId} />
			) : (
				<UnauthenticatedCommentInput />
			)}

			<Stack component="ul" gap="md" mt="xl">
				{comments.map((comment, idx) => {
					return (
						<li key={comment.id}>
							<Comment comment={comment} />
							{idx !== comments.length - 1 && <Divider mt="lg" />}
						</li>
					);
				})}
			</Stack>
		</>
	);
};

export default CommentsSection;
