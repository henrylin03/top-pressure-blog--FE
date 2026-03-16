import { Anchor, Card, Stack } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import dayjs from "dayjs";
import type { PublishedPostPreview } from "@/types/post";
import styles from "./PreviewCard.module.css";

interface Props {
	post: PublishedPostPreview;
}

const PreviewCard = ({ post }: Props) => {
	const postedDateFormatted: string = dayjs(post.publishedAt).format(
		"D MMMM YYYY",
	);

	return (
		<Card shadow="xs" withBorder className={styles.card}>
			<Stack component="header" gap="xs">
				<h3 className={styles.heading}>{post.title}</h3>
				<p className={styles.postedDate}>{postedDateFormatted}</p>
			</Stack>
			<p className={styles.lede}>{post.lede}</p>
			<Anchor
				component={Link}
				to={`/posts/${post.id}`}
				underline="hover"
				className={styles.cardLink}
			>
				Read more
			</Anchor>
		</Card>
	);
};

export default PreviewCard;
