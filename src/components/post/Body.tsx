import { Divider, Text } from "@mantine/core";
import styles from "@/styles/Post.module.css";
import type { PublishedPost } from "@/types/post";

interface Props {
	lede: PublishedPost["lede"];
	text: PublishedPost["text"];
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
