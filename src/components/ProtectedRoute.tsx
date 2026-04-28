import { Navigate, useLocation } from "react-router";
import { useAuth } from "@/contexts/auth";

type Props = {
	isAuthorOnly: boolean;
	children: React.ReactNode;
};

const ProtectedRoute = ({ isAuthorOnly, children }: Props) => {
	const { user, isLoading } = useAuth();
	const location = useLocation();

	if (isLoading) return <>Loading...</>;

	if (!user) return <Navigate to="/login" replace state={{ from: location }} />;
	if (isAuthorOnly && !user.isAuthor)
		return <Navigate to="/" replace state={{ from: location }} />;
	return children;
};

export default ProtectedRoute;
