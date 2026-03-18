import { Title } from "@mantine/core";
import type { Comment } from "@/types/comment";

interface Props {
	comments: Comment[];
}

const CommentsSection = ({ comments }: Props) => (
	<>
		<Title order={3} fw={400}>
			Latest comments ({comments.length})
		</Title>
	</>
);

export default CommentsSection;
