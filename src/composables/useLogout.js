import { ref } from "vue";
import { auth, signOut } from "@/configs/firebase";

const error = ref(null);

// Sign in function
const logout = async () => {
    error.value = null;
    try {
        const response = await signOut(auth);
        return response;
    } catch (err) {
        console.error("Error during signup:", err.message);
        error.value = err.message;
    }
};

export function useLogout() {
    return { error, logout }
}