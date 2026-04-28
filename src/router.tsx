import { createBrowserRouter } from "react-router";
import ProtectedRoute from "@/components/ProtectedRoute";
import MyPostsPage from "@/pages/author/MyPosts";
import ErrorPage from "@/pages/Error";
import LoginPage from "@/pages/Login";
import PostPage from "@/pages/Post";
import Posts from "@/pages/Posts";
import SignUpPage from "@/pages/SignUp";
import App from "./App";
import PostsTable from "./components/PostsTable";

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
				path: ":type",
				element: <PostsTable />,
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
