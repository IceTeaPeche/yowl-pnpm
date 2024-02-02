<template>
    <div class="flex mt-8 mb-24" @click="$router.push('/security')">
      <img class="ml-6" src="@/assets/Arrow_Left_MD.svg" alt="">
      <h1 class="text-white text-[25px] ml-[137px] font-bold">Bio</h1>
    </div>
  
    <div class="w-[390px] h-[60px] px-2.5 py-[5px] bg-custom-gray rounded-[20px] gap-[3px] inline-flex text-white ml-5 mb-3 justify-center items-center">
      <p class="text-white bg-transparent text-[20px]" v-text="bio"></p>
    </div>
  
    <div class="flex mb-3">
      <button @click="$router.push('/changebio')"
        class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-[240px] mx-auto font-bold mt-5 pt-2 pb-2 text-[18px]"
        type="button">Change your bio</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        bio: '',
      };
    },
  
    methods: {
      async saveBio() {
        try {
          const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
          const userId = apiResponse.user.id;
          console.log(userId, 'userId');
  
          const response = await axios.put(`http://localhost:1337/api/users/${userId}`, {
            bio: this.bio,
          });
  
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },
  
      async fetchData() {
        try {
          const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
          const userId = apiResponse.user.id;
  
          const response = await axios.get(`http://localhost:1337/api/users/${userId}`);
          this.bio = response.data.bio;
        } catch (error) {
          console.error(error);
        }
      },
    },
  
    async created() {
      await this.fetchData();
      this.saveBio();
    },
  };
  </script>
  
  <style scoped>
  /* Vos styles ici */
  </style>
  