import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { Loader } from "lucide-react"; // Import Loader

export default function ProtectedRoute({ children, redirectPath = "/auth" }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin text-green-700 w-12 h-12" />
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}
