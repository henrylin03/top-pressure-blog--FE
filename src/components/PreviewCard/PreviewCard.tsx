import { Anchor, Card } from "@mantine/core";
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
		<h3 className={styles.heading}>{post.title}</h3>
		<p>{post.lede}</p>
		<Anchor href={post.linkToFullText} underline="hover">
			Read more
		</Anchor>
	</Card>
);

export default PreviewCard;
