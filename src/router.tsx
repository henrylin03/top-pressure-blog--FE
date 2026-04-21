import { createBrowserRouter } from "react-router";
import Posts from "@/pages/Posts";
import App from "./App";

const routes = [
	{ path: "/", element: <Posts /> },
	{ path: "/posts", element: <Posts /> },
];

const router = createBrowserRouter([
	{ path: "/", element: <App />, children: routes },
]);

export { router };
