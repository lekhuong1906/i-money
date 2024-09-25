import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { onAuthStateChanged } from 'firebase/auth';
const user = ref(null);



onAuthStateChanged(auth, (_user) => {
    if (_user) {
        user.value = _user; // User is signed in
    } else {
        user.value = null; // No user signed in
    }
});


const getUser = () => {
    return user.value;
};

export function useUser() {
    return { getUser }
}