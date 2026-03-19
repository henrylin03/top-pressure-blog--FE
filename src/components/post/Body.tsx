import { Divider, Text } from "@mantine/core";
import styles from "@/styles/Post.module.css";
import type { Post } from "@/types/post";

interface Props {
	lede: Post["lede"];
	text: Post["text"];
}

const PostBody = ({ lede, text }: Props) => (
	<>
		<Divider my="xl" />
		<Text size="lg" c="dark.8">
			{lede}
		</Text>
		<Divider mt="xl" />
		<Text size="md" c="dark.8" className={styles.bodyText}>
			{text}
		</Text>
	</>
);

export default PostBody;
