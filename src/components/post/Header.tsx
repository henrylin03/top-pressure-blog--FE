import { Anchor, Group, Text, Title } from "@mantine/core";
import { IconHourglassHigh } from "@tabler/icons-react";
import type { PublishedPost } from "@/types/post";

interface Props {
	post: PublishedPost;
}

const PostHeader = ({ post }: Props) => (
	<>
		<Group component={Text} fz="sm" c="dimmed" gap={8}>
			<IconHourglassHigh size={16} />
			<span>{Math.ceil(post.timeToReadInMinutes)} min read</span>
		</Group>
		<Title order={2} size="h1" fw={400}>
			{post.title}
		</Title>
		<Text>
			{String(post.publishedAt)} by{" "}
			<Anchor href="https://henrylin.io" target="_blank">
				Henry Lin
			</Anchor>
		</Text>
	</>
);

export default PostHeader;
