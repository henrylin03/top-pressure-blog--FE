import { Button, Group, Stack, Text, Textarea } from "@mantine/core";
import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import UserAvatar from "@/components/UserAvatar";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import type { Post } from "@/types/post";
import type { User } from "@/types/user";

interface AuthenticatedCommentInputProps {
	username: User["username"];
	postId: Post["id"];
}

const AuthenticatedCommentInput = ({
	username,
	postId,
}: AuthenticatedCommentInputProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();

	const sendComment = async (commentText: string) => {
		const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

		try {
			await fetch(`/api/posts/${postId}/comments`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwt}`,
				},
				body: JSON.stringify({ text: commentText }),
			});
		} catch (error) {
			console.error("Error when adding comment:", error);
		}
	};

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formElement = e.currentTarget;
		const formDataObject = new FormData(formElement);
		const commentText = formDataObject.get("text");
		if (!commentText || !commentText.toString().trim()) return;

		setIsSubmitting(true);
		try {
			const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
			if (!jwt)
				throw new Error("User cannot post comment if not authenticated.");

			await sendComment(commentText.toString());
			formElement.reset();
			await router.invalidate();
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Stack component="article">
			<Group gap="xs">
				<UserAvatar username={username} size="sm" />
				<Text c="dark.9">{username}</Text>
			</Group>
			<form onSubmit={handleSubmit}>
				<Stack>
					<Textarea
						placeholder="Share your thoughts"
						autosize
						minRows={2}
						aria-required={true}
						name="text"
						disabled={isSubmitting}
						required
					/>
					<Button
						type="submit"
						style={{ placeSelf: "end" }}
						loading={isSubmitting}
					>
						Add comment
					</Button>
				</Stack>
			</form>
		</Stack>
	);
};
export default AuthenticatedCommentInput;
