import { Group, Stack, Text, TextInput } from "@mantine/core";
import UserAvatar from "@/components/UserAvatar";
import type { User } from "@/types/user";

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

export default AuthenticatedCommentInput;
