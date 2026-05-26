import { Anchor, Text } from "@mantine/core";
import type { User } from "@/types/user";

const PostAuthor = ({ postAuthor }: { postAuthor: User }) => {
	let author = "";
	if (!postAuthor.firstName && !postAuthor.lastName)
		author = postAuthor.username;
	else {
		if (postAuthor.firstName) author += postAuthor.firstName;
		if (postAuthor.lastName) author += ` ${postAuthor.lastName}`;
	}
	author = author.trim();

	return postAuthor.website ? (
		<Anchor
			href={postAuthor.website}
			underline="not-hover"
			fw="600"
			target="_blank"
			rel="noreferrer"
			aria-label="author"
		>
			{author}
		</Anchor>
	) : (
		<Text fw="600" c="black" aria-label="author">
			{author}
		</Text>
	);
};

export default PostAuthor;
