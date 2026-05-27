import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import type { AuthoredPostPreview } from "@/types/post";

type Props = {
	jwt: string;
	postId: AuthoredPostPreview["id"];
	fetchData: () => Promise<void>;
};

export const openDeleteModal = ({ postId, fetchData, jwt }: Props) => {
	const deletePost = async () => {
		const res = await fetch(
			`${import.meta.env.VITE_API_URL}/api/v1/posts/${postId}`,
			{
				method: "DELETE",
				headers: { Authorization: `Bearer ${jwt}` },
			},
		);
		if (res.ok) return fetchData();
		const json = await res.json();
		alert(`Error when trying to delete post: ${json.error}`);
	};

	modals.openConfirmModal({
		title: "Delete post",
		children: (
			<Text size="sm">
				Are you sure you want to delete this post? This action cannot be undone.
			</Text>
		),
		labels: { confirm: "Yes, delete", cancel: "Cancel" },
		confirmProps: { color: "pink" },
		onConfirm: deletePost,
	});
};
