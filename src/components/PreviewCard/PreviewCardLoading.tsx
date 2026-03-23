import { Card, Skeleton, Stack } from "@mantine/core";
import styles from "./PreviewCard.module.css";

const PreviewCardLoading = () => (
	<Card shadow="xs" withBorder className={styles.card}>
		<Stack component="header" gap="lg">
			<Skeleton height={40} width="100%" radius="xl" />
			<Skeleton height={40} width="70%" radius="xl" />
			<Skeleton height={16} radius="xl" width="25%" />
			<Skeleton height={16} radius="xl" />
			<Skeleton height={16} radius="xl" width="70%" />
		</Stack>
	</Card>
);

export default PreviewCardLoading;
