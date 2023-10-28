import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  loggedIn: boolean;
  authPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  loggedIn,
  authPath,
  outlet,
}: ProtectedRouteProps) {
  if (loggedIn) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authPath }} />;
  }
}
