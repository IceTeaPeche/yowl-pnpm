<template>
    <div>
        <div class="flex mt-8 mb-24" @click="$router.push('/bio')">
            <img class="ml-6 " src="../assets/Arrow_Left_MD.svg" alt="">
            <h1 class="text-white text-[25px] ml-[137px] font-bold font-poppins">Bio</h1>
        </div>
  
        <div class="w-[390px] h-[40px] px-2.5 py-[5px] bg-custom-gray rounded-[20px] gap-[3px] inline-flex text-white ml-5 mb-3">
            <input v-model="bio" type="text" id="newbio" class="text-white bg-transparent text-[20px]" placeholder="Enter your new bio">
            <div class="text-white bg-transparent text-[20px]"></div>
        </div>
  
        <div class="text-white text-[10px] ml-10 mr-10 text-center font-poppins">Your bio must not offend, insult or incite hatred. Add your favorite games, or describe yourself!</div>
  
        <div class="flex  mb-3  ">
            <button @click="saveBio"
                class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-[120px] mx-auto font-bold mt-5 pt-2 pb-2 text-[18px] font-poppins "
                type="submit">Save</button>
        </div>
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
    const apiResponse = JSON.parse(localStorage.getItem('apiResponse')); // Corrected here
  console.log(apiResponse);
  
  // Get user ID from apiResponse or local storage
  const userId = apiResponse.user.id 
  console.log(userId, 'userId');
    try {
      const response = await axios.put(`http://localhost:1337/api/users/${userId}`, {
        bio: this.bio,
      });
      console.log(response.data);
      this.$router.push({ path: `/bio` });
    } catch (error) {
      console.error(error);
    }
  },
  },
  };
  </script>
  
  <style scoped>
  
  </style>