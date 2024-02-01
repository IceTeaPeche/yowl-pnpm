<template>
  <div>
      <div class="flex mt-8 mb-24" @click="$router.push('/mail')">
          <img class="ml-6 " src="../assets/Arrow_Left_MD.svg" alt="">
          <h1 class="text-white text-[25px] ml-[137px] font-bold ">Email</h1>
      </div>

      <div class="w-[390px] h-[40px] px-2.5 py-[5px] bg-custom-gray rounded-[20px] gap-[3px] inline-flex text-white ml-5 mb-3">
          <input v-model="email" type="text" id="newemail" class="float-left text-white bg-transparent w-full mt-0.5 ml-2" placeholder="Enter your new email">
          <div class="w-6 h-6 bg-transparent relative mt-1 "></div>
      </div>

      <div class="text-white text-[10px] ml-10 mr-10 text-center">Never disclose the password of this email address to a third
          party, this could risk hacking your INDE account!</div>

      <div class="flex  mb-3  ">
          <button @click="saveEmail"
              class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-[120px] mx-auto font-bold mt-5 pt-2 pb-2 text-[18px]  "
              type="submit">Save</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
return {
  email: '',
};
},
methods: {
async saveEmail() {
  const apiResponse = JSON.parse(localStorage.getItem('apiResponse')); // Corrected here
console.log(apiResponse);

// Get user ID from apiResponse or local storage
const userId = apiResponse.user.id 
console.log(userId, 'userId');
  try {
    const response = await axios.put(`http://localhost:1337/api/users/${userId}`, {
      email: this.email,
    });
    console.log(response.data);
    this.$router.push({ path: `/mail` });
  } catch (error) {
    console.error(error);
  }
},
},
};
</script>

<style scoped>

</style>