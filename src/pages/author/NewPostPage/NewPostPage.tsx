import {
	Button,
	Container,
	Group,
	Input,
	Stack,
	Textarea,
	Title,
} from "@mantine/core";
import BodyTextEditor from "./BodyTextEditor";

const NewPostPage = () => (
	<>
		<title>Create new post | Top Pressure Blog</title>

		<Container px={{ base: "lg", sm: "xl" }} py="xl">
			<Stack gap="md">
				<Title order={2} size="h1">
					Create post
				</Title>
				<Stack gap="md">
					<Input
						placeholder="Title*"
						required
						aria-label="Title of blog post"
						size="md"
					/>
					<Textarea
						size="md"
						aria-label="Lede (optional)"
						placeholder="Lede (optional)"
						autosize
						minRows={2}
						maxRows={3}
					/>
					<BodyTextEditor placeholder="Body text*" />
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

export default NewPostPage;
