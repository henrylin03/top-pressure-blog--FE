import { Navigate } from "react-router";
import { useAuth } from "@/contexts/auth";

type Props = {
	children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
	const { user, isLoading } = useAuth();

	if (isLoading) return <>Loading...</>;
	if (!user) return <Navigate to="/" replace />;
	return children;
};

export default ProtectedRoute;
