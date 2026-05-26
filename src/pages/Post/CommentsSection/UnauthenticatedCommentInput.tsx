import { Avatar, Group, Stack, Text, TextInput } from "@mantine/core";
import { Link } from "react-router";

const UnauthenticatedCommentInput = () => (
	<Stack component="article">
		<Group gap="xs">
			<Avatar size="md" />
			<Text c="dark.3">Join the discussion</Text>
		</Group>
		<Link to="/login" aria-label="Log in to comment on this post">
			<TextInput placeholder="Share your thoughts" />
		</Link>
	</Stack>
);

export default UnauthenticatedCommentInput;
