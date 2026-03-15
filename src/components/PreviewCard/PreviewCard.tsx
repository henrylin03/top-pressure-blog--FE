import { Anchor, Card, Stack } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/fakePosts";
import styles from "./PreviewCard.module.css";

interface Props {
	post: Post;
}

const PreviewCard = ({ post }: Props) => (
	<Card
		shadow="xs"
		withBorder
		component={Link}
		to={post.linkToFullText}
		className={styles.card}
	>
		<Stack component="header" gap="xs">
			<h3 className={styles.heading}>{post.title}</h3>
			<p>{String(post.postedDate)}</p>
		</Stack>
		<p>{post.lede}</p>
		<Anchor href={post.linkToFullText} underline="hover">
			Read more
		</Anchor>
	</Card>
);

export default PreviewCard;
