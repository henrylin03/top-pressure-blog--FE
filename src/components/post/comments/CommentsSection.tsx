import { Divider, Stack, Title } from "@mantine/core";
import { useAuth } from "@/contexts/auth";
import type { Comment as CommentType } from "@/types/comment";
import type { Post } from "@/types/post";
import AuthenticatedCommentInput from "./AuthenticatedCommentInput";
import Comment from "./Comment";
import UnauthenticatedCommentInput from "./UnauthenticatedCommentInput";

interface CommentsSectionProps {
	comments: CommentType[];
	postId: Post["id"];
	fetchPost: (postId: string, jwt: string) => Promise<void>;
}

const CommentsSection = ({
	comments,
	postId,
	fetchPost,
}: CommentsSectionProps) => {
	const { isAuthenticated, user } = useAuth();

	return (
		<>
			<Title order={3} fw={400} mb="lg">
				Latest comments ({comments.length})
			</Title>

			{isAuthenticated && user ? (
				<AuthenticatedCommentInput
					username={user.username}
					postId={postId}
					fetchPost={fetchPost}
				/>
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
