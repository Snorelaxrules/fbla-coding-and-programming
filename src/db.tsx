import { initializeApp } from "firebase/app";
import {
    addDoc,
    collection,
    getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-v-uOf04-To60EGhs1cqSW4pzLuuGCFY",
    authDomain: "fbla-63a95.firebaseapp.com",
    projectId: "fbla-63a95",
    storageBucket: "fbla-63a95.appspot.com",
    messagingSenderId: "600082805719",
    appId: "1:600082805719:web:672b09b180e42e80fa5192",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db };
export { storage };
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Creates a user and stores user data into Firestore.
// Params: email, password, accountType
// Return: boolean (state of authentication)
export async function createUserAndStoreAccountType(
    email: string,
    pass: string,
    accountType: string
): Promise<boolean> {
    try {
        // Creating a new user via Firebase.
        const newUser = await createUserWithEmailAndPassword(auth, email, pass);
        const userRef = collection(db, "users");
        // Adding a document to NoSQL database to keep track of account type (administrator / student).
        await addDoc(userRef, {
            uid: newUser.user.uid,
            accountType: accountType,
        });
        return true;
    //Error Handling
    } catch (e) {
        alert(
            "Error creating user and storing account type" + JSON.stringify(e)
        );
        return false;
    }
}

export async function createUser(
    email: string,
    pass: string
): Promise<boolean> {
    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, pass);
        return true;
    } catch (e) {
        console.error("Error creating user", e);
        return false;
    }
}