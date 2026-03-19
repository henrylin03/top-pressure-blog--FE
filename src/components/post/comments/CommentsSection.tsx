import { Title } from "@mantine/core";
import { useAuth } from "@/contexts/auth";
import type { Comment } from "@/types/comment";
import AuthenticatedCommentInput from "./AuthenticatedCommentInput";
import UnauthenticatedCommentInput from "./UnauthenticatedCommentInput";

interface CommentsSectionProps {
	comments: Comment[];
}

const CommentsSection = ({ comments }: CommentsSectionProps) => {
	const { isAuthenticated, user } = useAuth();

	return (
		<>
			<Title order={3} fw={400} mb="lg">
				Latest comments ({comments.length})
			</Title>

			{isAuthenticated && user ? (
				<AuthenticatedCommentInput username={user.username} />
			) : (
				<UnauthenticatedCommentInput />
			)}
		</>
	);
};

export default CommentsSection;
