import { createBrowserRouter } from "react-router";
import ProtectedRoute from "@/components/ProtectedRoute";
import MyDraftPosts from "@/pages/author/MyDraftPosts";
import MyPostsPage from "@/pages/author/MyPosts";
import MyPublishedPosts from "@/pages/author/MyPublishedPosts";
import ErrorPage from "@/pages/Error";
import LoginPage from "@/pages/Login";
import PostPage from "@/pages/Post";
import Posts from "@/pages/Posts";
import SignUpPage from "@/pages/SignUp";
import App from "./App";

const routes = [
	{ path: "/", element: <Posts /> },
	{ path: "/posts", element: <Posts /> },
	{ path: "/posts/:postId", element: <PostPage /> },

	{ path: "/login", element: <LoginPage /> },
	{ path: "/signup", element: <SignUpPage /> },

	{
		path: "/my-posts",
		element: (
			<ProtectedRoute isAuthorOnly>
				<MyPostsPage />
			</ProtectedRoute>
		),
		children: [
			{
				path: "drafts",
				element: <MyDraftPosts />,
			},
			{
				path: "published",
				element: <MyPublishedPosts />,
			},
		],
	},
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes,
		errorElement: <ErrorPage />,
	},
]);

export { router };
