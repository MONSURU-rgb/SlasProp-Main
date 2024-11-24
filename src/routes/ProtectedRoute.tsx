import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

interface ProtectedRouteProps {}

export function ProtectedRoute({
  children,
}: PropsWithChildren<ProtectedRouteProps>) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}
