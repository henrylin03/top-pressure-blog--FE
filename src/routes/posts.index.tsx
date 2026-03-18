import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
	loader: () => redirect({ to: "/", throw: true }),
});
