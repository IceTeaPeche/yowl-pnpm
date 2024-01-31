<template>
    <div class="flex mt-8">

        <img class="ml-6 " src="../assets/Arrow_Left_MD.svg" alt="" @click="$router.push('/home')">
        <h1 class="text-white text-[25px] ml-[114px] font-bold ">New Post</h1>

    </div>


    <form @submit.prevent="onSubmit" class="flex float-right mb-3  mr-4">
        <button
            class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-[100px] mx-auto font-bold mt-5 pt-2 pb-2 text-[15px]"
            type="submit">Post</button>
    </form>

    <div class="mt-[100px] ml-12">
        <textarea id="description" v-model="values.description" class=" bg-custom-gray h-[100px] text-m text-white rounded-2xl 
        w-4/5 ml-4  pl-4 pr-4 mr-4 pb-4 resize-none pt-2" placeholder="Add text ..."></textarea>
    </div>

    <div v-if="imageSrc" class="ml-[69px] mt-1 ">
        <img :src="imageSrc" alt="Uploaded Image" width="297">


        <button @click="removeImage">
            <img class="absolute top-0 right-0 mr-[68px] mt-[280px] w-8 h-8 bg-transparent " src="../assets/Group 37.svg"
                alt="">
        </button>
    </div>


    <div class="ml-[75px] mt-6 transform -translate-y-5 bg-transparent">
        <label for="fileUpload">
            <img height="" width="33" src="../assets/ajoutimage.svg" alt="">
        </label>
        <input type="file" id="fileUpload" @change="onFileChange" style="display: none;">
    </div>


    <div class="flex items-center justify-center ml-[70px]">

        <div class="mr-[65px] mt-[15px] flex">


            <button
                :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[16px] pt-1 pb-1 border border-red-500 mr-3 ${buttonState === 'Public' ? 'bg-red-500' : 'bg-grey-500'}`"
                @click="buttonState = 'Public'" type="button">
                Public
            </button>

            <button
                :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[16px] pt-1 pb-1 border border-red-500 ml-3 ${buttonState === 'Private' ? 'bg-red-500' : 'bg-grey-500'}`"
                @click="buttonState = 'Private'" type="button">
                Private
            </button>
        </div>

    </div>
</template>


<script>


import axios from 'axios';

export default {

    data() {
        return {
            imageSrc: null,
            currentPage: 1,
            values: {

                description: '',
                singleFile: null
            }

        };
    },


    methods: {


        onFileChange(e) {

            const file = e.target.files[0];
            this.imageSrc = URL.createObjectURL(file);
            this.values.singleFile = file;
        },
        removeImage() {
            this.imageSrc = null;
        },


        onSubmit: async function () {
            const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
            const username = apiResponse.user.username;
            const id_user = apiResponse.user.id;
            console.log("Username:", username);
            console.log("id_user:", id_user);


            console.log("values", this.values)

            const formData = new FormData()

            const data = {

                description: this.values.description,
                pseudo: username,
                id_user: id_user,

            }

            console.log("data", data)

            formData.append("data", JSON.stringify(data))
            formData.append("files.image", this.values.singleFile)

            try {
                const response = await axios.post('http://localhost:1337/api/posts', formData);
                console.log('Form send to strapi:', response.data);
                setTimeout(() => {
                    this.$router.push({ path: `/home` });
                }, 500);

            } catch (error) {
                console.error('error the form:', error);
            }


        },


    },


    mounted() {
        const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
        console.log("localstorage", apiResponse);


    },
};







</script>


<style scoped></style>