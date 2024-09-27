import { ref } from "vue";
import { store } from "@/configs/firebase";

const error = ref(null);

const useCollection = () => {
    const addNewRecord = async (name, record) => {
        error.value = null;

        try {
            const response = await store.collection(name).add(record);
            return response; // Return the response if needed
        } catch (err) {
            console.error("Error:", err.message);
            error.value = err.message; // Set error message
            return null; // Return null or handle as needed
        }
    };

    return { addNewRecord, error }; // Return both function and error state
};

export default useCollection;