import { Button, Group, Stack, Text, Textarea } from "@mantine/core";
import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import UserAvatar from "@/components/UserAvatar";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import type { ServerSideError } from "@/types/error";
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
	const [errors, setErrors] = useState<ServerSideError[] | null>(null);
	const router = useRouter();

	const postComment = async (commentText: string): Promise<boolean> => {
		setIsSubmitting(true);
		setErrors(null);

		try {
			const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
			if (!jwt)
				throw new Error("User cannot post comment if not authenticated.");

			const res = await fetch(
				`${import.meta.env.VITE_API_URL}/api/v1/posts/${postId}/comments`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${jwt}`,
					},
					body: JSON.stringify({ text: commentText }),
				},
			);

			if (res.ok) return true;

			const { errors } = await res.json();
			setErrors(errors.map((err: ServerSideError) => err.msg));
			return false;
		} catch (error) {
			console.error("Error when adding comment:", error);
			return false;
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		const commentText = formData.get("text");
		if (!commentText || !commentText.toString().trim()) return;

		const isSuccessfulPost = await postComment(String(commentText));
		if (isSuccessfulPost) {
			router.invalidate();
			form.reset();
		}
	};

	const hasErrors = Array.isArray(errors) && errors.length > 0;

	return (
		<Stack component="article">
			<Group gap="xs">
				<UserAvatar username={username} size="sm" />
				<Text c="dark.9">{username}</Text>
			</Group>
			<form onSubmit={handleSubmit}>
				<Stack gap={0}>
					<Textarea
						placeholder="Share your thoughts"
						autosize
						minRows={2}
						aria-required={true}
						name="text"
						disabled={isSubmitting}
						required
						error={hasErrors}
						onChange={() => setErrors(null)}
					/>

					{hasErrors && (
						<Text
							fz={{ base: "xs", xs: "sm" }}
							style={{ color: "var(--mantine-color-error)" }}
							component="ul"
							mt="4"
						>
							{errors.map((err, idx) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <no unique identifier for error>
								<li key={idx}>{String(err)}</li>
							))}
						</Text>
					)}

					<Button
						type="submit"
						style={{ placeSelf: "end" }}
						loading={isSubmitting}
						mt={hasErrors ? 0 : "xs"}
					>
						Add comment
					</Button>
				</Stack>
			</form>
		</Stack>
	);
};
export default AuthenticatedCommentInput;
