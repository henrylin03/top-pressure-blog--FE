import UserAvatar from "@components/UserAvatar";
import { Avatar, Group, Stack, Text, TextInput, Title } from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/contexts/auth";
import type { Comment } from "@/types/comment";
import type { User } from "@/types/user";

const UnauthenticatedCommentInput = () => {
	const navigate = useNavigate();

	return (
		<Stack component="article">
			<Group gap="xs">
				<Avatar size="md" />
				<Text c="dark.3">Join the discussion</Text>
			</Group>
			<TextInput
				placeholder="Share your thoughts"
				aria-label="Sign into your account to leave a comment"
				onFocus={() => navigate({ to: "/login" })}
			/>
		</Stack>
	);
};

interface AuthenticatedCommentInputProps {
	username: User["username"];
}

const AuthenticatedCommentInput = ({
	username,
}: AuthenticatedCommentInputProps) => (
	<Stack component="article">
		<Group gap="xs">
			<UserAvatar username={username} size="sm" />
			<Text c="dark.9">{username}</Text>
		</Group>
		<TextInput placeholder="Share your thoughts" />
	</Stack>
);

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
