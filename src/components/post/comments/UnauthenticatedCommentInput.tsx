import { Avatar, Group, Stack, Text, TextInput } from "@mantine/core";
import LoginLink from "@/components/LoginLink";

const UnauthenticatedCommentInput = () => (
	<Stack component="article">
		<Group gap="xs">
			<Avatar size="md" />
			<Text c="dark.3">Join the discussion</Text>
		</Group>
		<LoginLink>
			<TextInput placeholder="Share your thoughts" />
		</LoginLink>
	</Stack>
);

export default UnauthenticatedCommentInput;
