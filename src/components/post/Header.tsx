import { Anchor, Group, Text, Title } from "@mantine/core";
import { IconHourglassHigh } from "@tabler/icons-react";
import dayjs from "dayjs";
import type { PublishedPost } from "@/types/post";

type PostHeaderDetails = Pick<
	PublishedPost,
	"author" | "lastModifiedAt" | "publishedAt" | "title" | "timeToReadInMinutes"
>;

interface Props {
	postDetails: PostHeaderDetails;
}

const PostHeader = ({ postDetails }: Props) => {
	const timeToReadRounded = Math.ceil(postDetails.timeToReadInMinutes);
	const publishedDateFormatted = dayjs(String(postDetails.publishedAt)).format(
		"d MMMM YYYY",
	);

	return (
		<>
			<Group component={Text} fz="sm" c="dark.3" gap={8}>
				<IconHourglassHigh size={16} />
				<span>{timeToReadRounded} min read</span>
			</Group>
			<Title order={2} size="h1" fw={400}>
				{postDetails.title}
			</Title>
			<Text mt="md" c="dark.4">
				{publishedDateFormatted} by{" "}
				<Anchor
					href="https://henrylin.io"
					target="_blank"
					underline="not-hover"
					fw="bold"
				>
					Henry Lin
				</Anchor>
			</Text>
		</>
	);
};

export default PostHeader;
