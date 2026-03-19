import { Group, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";
import UserAvatar from "@/components/UserAvatar";
import type { Comment as CommentType } from "@/types/comment";

interface Props {
	comment: CommentType;
}

const PLACEHOLDER_COMMENTER_USERNAME = "some-username";

const Comment = ({ comment }: Props) => {
	const { postedAt } = comment;
	const postedDateFormatted = dayjs(postedAt).format("DD MMM YYYY");

	return (
		<Stack component="article" gap="xs">
			<Group>
				<UserAvatar size="sm" username={PLACEHOLDER_COMMENTER_USERNAME} />
				<Stack gap={0}>
					<Text c="dark.6">{PLACEHOLDER_COMMENTER_USERNAME}</Text>
					<Text c="dimmed" fz="sm">
						{postedDateFormatted} {comment.isEdited && " · Edited"}
					</Text>
				</Stack>
			</Group>
			<Text>{comment.text}</Text>
		</Stack>
	);
};

export default Comment;
