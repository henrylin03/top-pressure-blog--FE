import { Title } from "@mantine/core";
import { useAuth } from "@/contexts/auth";
import type { Comment } from "@/types/comment";
import type { PublishedPost } from "@/types/post";
import AuthenticatedCommentInput from "./AuthenticatedCommentInput";
import UnauthenticatedCommentInput from "./UnauthenticatedCommentInput";

interface CommentsSectionProps {
	comments: Comment[];
	postId: PublishedPost["id"];
}

const CommentsSection = ({ comments, postId }: CommentsSectionProps) => {
	const { isAuthenticated, user } = useAuth();

	return (
		<>
			<Title order={3} fw={400} mb="lg">
				Latest comments ({comments.length})
			</Title>

			{isAuthenticated && user ? (
				<AuthenticatedCommentInput username={user.username} postId={postId} />
			) : (
				<UnauthenticatedCommentInput />
			)}
		</>
	);
};

export default CommentsSection;
