import { Group, Table } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";
import dayjs from "dayjs";
import type { AuthoredPostPreview } from "@/types/post";
import Menu from "./Menu";
import styles from "./tables.module.css";

interface Props {
	posts: AuthoredPostPreview[];
	fetchData: () => Promise<void>;
}

const DraftPostsTable = ({ posts, fetchData }: Props) => {
	const rows = posts.map((p) => {
		const DATE_FORMAT = "D MMM YYYY";
		const lastModifiedDate = dayjs(p.lastModifiedAt).format(DATE_FORMAT);

		return (
			<Table.Tr key={p.id} fz="md">
				{p.title ? (
					<Table.Td>{p.title}</Table.Td>
				) : (
					<Table.Td c="dimmed">Untitled</Table.Td>
				)}
				<Table.Td visibleFrom="xs">{lastModifiedDate}</Table.Td>
				<Table.Td visibleFrom="sm" className={styles.commentsCell}>
					<Group gap="xs" align="center">
						<IconMessage size={18} opacity={0.6} />
						<span>{p.comments.length}</span>
					</Group>
				</Table.Td>
				<Table.Td align="right">
					<Menu post={p} fetchData={fetchData} />
				</Table.Td>
			</Table.Tr>
		);
	});

	return (
		<Table withRowBorders={false}>
			<Table.Thead>
				<Table.Tr c="gray.6">
					<Table.Th fw="normal" className={styles.titleCell}>
						Title
					</Table.Th>
					<Table.Th fw="normal" visibleFrom="xs">
						Last modified
					</Table.Th>
					<Table.Th fw="normal" visibleFrom="sm">
						Comments
					</Table.Th>
				</Table.Tr>
			</Table.Thead>

			<Table.Tbody>{rows}</Table.Tbody>
		</Table>
	);
};

export default DraftPostsTable;
