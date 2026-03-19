import { Anchor, Group, Stack, Text, Title } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";
import dayjs from "dayjs";
import type { Post } from "@/types/post";

interface Props {
	postDetails: Pick<
		Post,
		| "author"
		| "lastModifiedAt"
		| "publishedAt"
		| "title"
		| "timeToReadInMinutes"
	>;
}

const PostHeader = ({ postDetails }: Props) => {
	const DATE_FORMAT = "D MMMM YYYY";
	const { lastModifiedAt, publishedAt } = postDetails;

	const isUpdatedPost = dayjs(lastModifiedAt).isAfter(dayjs(publishedAt));
	const dates = {
		published: dayjs(postDetails.publishedAt).format(DATE_FORMAT),
		lastModified: dayjs(postDetails.lastModifiedAt).format(DATE_FORMAT),
	};

	const timeToReadRounded = Math.ceil(postDetails.timeToReadInMinutes);

	return (
		<>
			<Group component={Text} fz="sm" c="dark.3" gap={8}>
				<IconBook size={16} strokeWidth={1} />
				<span>{timeToReadRounded} min read</span>
			</Group>
			<Title order={2} size="h1" fw={500}>
				{postDetails.title}
			</Title>

			<Stack mt="md" gap="xs">
				<Text c="dark.4">
					{dates.published} by{" "}
					<Anchor
						href="https://henrylin.io"
						target="_blank"
						underline="not-hover"
						fw="bold"
					>
						Henry Lin
					</Anchor>
				</Text>
				<Group>
					{isUpdatedPost && (
						<Text fs="italic" c="dark.4">
							Updated {dates.lastModified}
						</Text>
					)}
				</Group>
			</Stack>
		</>
	);
};

export default PostHeader;
