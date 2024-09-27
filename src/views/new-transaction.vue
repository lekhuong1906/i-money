<template>
    <form @submit.prevent="onSubmit">
        <!-- Main form -->
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label for="total" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span class="inline-block px-1 border border-gray-400 rounded-lg text-sm">USD</span>
                            </div>
                            <div class="flex flex-col border-b border-gray-100 pb-1">
                                <span class="font-semibold text-xs">Total</span>
                                <input class="text-4xl w-full outline-none mt-1" type="text" id="total" placeholder="0"
                                    v-model="total">
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="category" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input class="text-4xl w-full outline-none mt-1" id="category" type="text"
                                    placeholder="0" v-model="category">
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="note" class="flex items-end">
                            <div class="w-10 text-right leading-8 mr-4 pb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6 inline-block">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input class="w-full outline-none mt-1" id="note" type="text" placeholder="Note"
                                    v-model="note">
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="time" class="flex items-end">
                            <div class="w-10 text-right leading-8 mr-4 pb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6 inline-block">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>

                            </div>
                            <div class="flex-1 py-3">
                                <div class="w-full ">{{ time }}</div>
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="wallet" class="flex items-end">
                            <div class="w-10 text-right leading-8 mr-4 pb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6 inline-block">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                </svg>
                            </div>
                            <div class="flex-1 py-3">
                                <div class="w-full ">My Wallet</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of Main form -->

        <div class="row mt-8" v-if="!isMoreDetail">
            <button @click="isMoreDetail = true"
                class="bg-white rounded-lg py-3 w-full text-blue-600 font-semibold cursor-pointer">More
                Detail</button>
        </div>


        <template v-if="isMoreDetail">
            <!-- Advanced form-->
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="location" class="flex items-end">
                                <div class="w-10 text-right leading-10 mr-4 pb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div class="flex-1 border-b border-gray-100 py-3">
                                    <input class="text-xl w-full outline-none mt-1" id="location" type="text"
                                        placeholder="Ho Chi Minh">
                                </div>
                            </label>
                        </div>
                        <div class="row">
                            <label for="person" class="flex items-end">
                                <div class="w-10 text-right leading-10 mr-4 pb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                </div>
                                <div class="flex-1 border-b border-gray-100 py-3">
                                    <input class="text-xl w-full outline-none mt-1" id="person" type="text"
                                        placeholder="Person Name">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of Advanced form-->

            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="upload" class="flex items-end">
                                <div class="w-10 text-right leading-10 mr-4 pb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                    </svg>

                                </div>
                                <div class="flex-1 py-3">
                                    Upload Photo
                                    <input hidden class="text-xl w-full outline-none mt-1" id="upload" type="text"
                                        placeholder="Upload Media">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <button class="bg-blue-400" type="submit">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useUser } from '@/composables/useUser';
import  useCollection  from '@/composables/useCollection';

const { getUser } = useUser();
const { addNewRecord, error } = useCollection();

const isMoreDetail = ref(false);
const total = ref(0);
const category = ref("");
const note = ref("");
const time = ref(new Date());


const onSubmit = async () => {
    const user = getUser();
    const transaction = {
        total: total.value,
        category: category.value,
        note: note.value,
        time: time.value,
        userID: user.uid,
    };

    await addNewRecord('transaction',transaction);

    console.log(error);
    console.log('Add Success');

}
</script>