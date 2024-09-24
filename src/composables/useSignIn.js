import { ref } from "vue";
import { auth, signInWithEmailAndPassword } from "@/configs/firebase";
const error = ref(null);
const isPending = ref(false);

// Sign in function
const signin = async (email, password) => {
    isPending.value = true;
    error.value = null;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (err) {
        console.error("Error during signup:", err.message);
        error.value = err.message;
    } finally { //affter try or catch handle done
        isPending.value = false;
    }
};

export function useSignIn() {
    return { error, isPending, signin }
}