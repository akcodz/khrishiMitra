import { auth, db } from "../config.js"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { doc, serverTimestamp, setDoc ,getDoc} from "firebase/firestore";


const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Login Error:", error);
    return { success: false, error: error.message };
  }
};


const registerUser = async (email, password, fullname) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
 
    await updateProfile(user, { displayName: fullname });

    await setDoc(doc(db, "users", user.uid), {
      fullname,
      email,
      isAdmin:false,
      createdAt: serverTimestamp(),
    });
 console.log(user)
    return { success: true, user };
  } catch (error) {
    console.error("Registration Error:", error);
    return { success: false, error: error.message };
  }
};


const adminLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;


    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return { success: false, error: "invalid credentials." };
    }

    const userData = userSnap.data();
    if (!userData.isAdmin) {
      return { success: false, error: "You are not authorized as admin." };
    }

    return { success: true, user };

  } catch (error) {
    return { success: false, error: error.message };
  }
};

export { loginUser, registerUser, adminLogin };
