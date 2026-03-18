import { Anchor, Group, Text, Title } from "@mantine/core";
import { IconHourglassHigh } from "@tabler/icons-react";
import type { PublishedPost } from "@/types/post";

type PostHeaderDetails = Pick<
	PublishedPost,
	"author" | "lastModifiedAt" | "publishedAt" | "title" | "timeToReadInMinutes"
>;

interface Props {
	postDetails: PostHeaderDetails;
}

const PostHeader = ({ postDetails }: Props) => (
	<>
		<Group component={Text} fz="sm" c="dimmed" gap={8}>
			<IconHourglassHigh size={16} />
			<span>{Math.ceil(postDetails.timeToReadInMinutes)} min read</span>
		</Group>
		<Title order={2} size="h1" fw={400}>
			{postDetails.title}
		</Title>
		<Text>
			{String(postDetails.publishedAt)} by{" "}
			<Anchor href="https://henrylin.io" target="_blank">
				Henry Lin
			</Anchor>
		</Text>
	</>
);

export default PostHeader;
