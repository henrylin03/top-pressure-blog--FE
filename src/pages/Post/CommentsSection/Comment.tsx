import { Group, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";
import UserAvatar from "@/components/UserAvatar";
import type { Comment as CommentType } from "@/types/comment";

interface Props {
	comment: CommentType;
}

const Comment = ({ comment }: Props) => {
	const { postedAt, author } = comment;
	const postedDateFormatted = dayjs(postedAt).format("DD MMM YYYY");

	return (
		<Stack component="article" gap="xs">
			<Group>
				<UserAvatar size="sm" username={author.username} />
				<Stack gap={0}>
					<Text c="dark.6">{author.username}</Text>
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
