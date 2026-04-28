import { Navigate } from "react-router";
import { useAuth } from "@/contexts/auth";

type Props = {
	isAuthorOnly: boolean;
	children: React.ReactNode;
};

const ProtectedRoute = ({ isAuthorOnly, children }: Props) => {
	const { user, isLoading } = useAuth();

	if (isLoading) return <>Loading...</>;

	if (!user) return <Navigate to="/" replace />;
	if (isAuthorOnly && !user.isAuthor) return <Navigate to="/" replace />;
	return children;
};

export default ProtectedRoute;
