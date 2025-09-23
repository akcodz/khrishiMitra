import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "lucide-react";

export default function AdminProtectedRoute({ children, redirectPath = "/auth" }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists() && userSnap.data().isAdmin) {
            setIsAdmin(true);
          } else {
            // Logout if not admin
            await signOut(auth);
            setIsAdmin(false);
            
          }
        } catch (err) {
          console.error("Error checking admin status:", err);
          await signOut(auth);
          setIsAdmin(false);
        }
      } else {
        setCurrentUser(null);
      }
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

  if (!currentUser || !isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}
