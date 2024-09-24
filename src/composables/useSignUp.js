import { ref } from "vue";
import { auth, createUserWithEmailAndPassword, updateProfile } from "@/configs/firebase";
const error = ref(null);
const isPending = ref(false);

export const signup = async (email, password, fullName) => {
    isPending.value = true;
    error.value = null;
    try {
        //Create new account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        if (!userCredential) throw new Error("Could not create a new user");

        // Update displayName
        await updateProfile(userCredential.user, {
            displayName: fullName
        });

        return userCredential.user;
    } catch (err) {
        console.error("Error during signup:", err.message);
        error.value = err.message;
    } finally { //affter try or catch handle done
        isPending.value = false;
    }
};

export function useSignUp() {
    return {
        error, isPending, signup
    }
}