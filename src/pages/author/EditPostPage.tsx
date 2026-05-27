import {
	Button,
	Container,
	Group,
	Input,
	Stack,
	Text,
	Textarea,
	Title,
} from "@mantine/core";
import { useParams } from "react-router";
import { useFetchPost } from "@/hooks/useFetchPost";

const EditPostPage = () => {
	const { postId } = useParams();
	const { post, isLoading } = useFetchPost(String(postId));

	return (
		<>
			<title>Edit post | Top Pressure Blog</title>
			{isLoading && <p>Fetching your post...</p>}
			<Container px={{ base: "lg", sm: "xl" }} py="xl">
				<Stack gap="md">
					<Stack gap={0}>
						<Text fz="xs" c="dimmed" mb={-4}>
							{post?.isPublished ? "Published" : "Draft"}
						</Text>
						<Title order={2} size="h1">
							Edit post
						</Title>
					</Stack>
					<Stack gap="md">
						<Input
							placeholder="Title*"
							required
							aria-label="Title of blog post"
							size="md"
							value={post?.title}
						/>
						<Textarea
							size="md"
							aria-label="Lede (optional)"
							placeholder="Lede (optional)"
							autosize
							minRows={2}
							maxRows={3}
							value={post?.lede}
						/>
						<Textarea
							size="md"
							aria-label="Body text*"
							placeholder="Body text*"
							autosize
							minRows={4}
							maxRows={6}
							required
							value={post?.text}
						/>
					</Stack>
					<Group justify="end" gap="xs" mt="lg">
						<Button variant="outline" color="gray">
							Cancel
						</Button>
						<Button>Publish</Button>
					</Group>
				</Stack>
			</Container>
		</>
	);
};

export default EditPostPage;
