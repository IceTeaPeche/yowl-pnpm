<template>

       <div class="flex mt-8 mb-24" >

                        <img class="ml-6 " src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/Arrow_Left_MD.svg" alt="" >
                        <h1 class="text-white text-[25px] ml-[114px] font-bold ">Password</h1>

                    </div>

  
        <div class="w-[390px] h-[40px] px-2.5 py-[5px] bg-custom-gray rounded-[20px] gap-[3px] inline-flex text-white ml-5 mb-8">
            <input :type="showPassword ? 'password' : 'text'" class="float-left text-white bg-transparent w-full" placeholder="Current password">
            <div class="w-6 h-6 bg-transparent relative mt-1 " @click="showPassword = !showPassword">
                <img v-if="showPassword" class="bg-transparent" src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/mdi_eyeqsdsqd.svg" alt="">
                <img v-else class="bg-transparent" src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/mdi_eye.svg" alt="">
            </div>
        </div>


         <div class="w-[390px] h-[40px] px-2.5 py-[5px] bg-custom-gray rounded-[20px] gap-[3px] inline-flex text-white ml-5 mb-8">
                <input :type="showPassword2 ? 'password' : 'text'" class="float-left text-white bg-transparent w-full" placeholder="New password">
                <div class="w-6 h-6 bg-transparent relative mt-1 " @click="showPassword2 = !showPassword2">
                    <img v-if="showPassword2" class="bg-transparent" src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/mdi_eyeqsdsqd.svg" alt="">
                    <img v-else class="bg-transparent" src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/mdi_eye.svg" alt="">
                </div>
            </div>


             <div class="w-[390px] h-[40px] px-2.5 py-[5px] bg-custom-gray rounded-[20px] gap-[3px] inline-flex text-white ml-5 mb-8">
                <input :type="showPassword3 ? 'password' : 'text'" class="float-left text-white bg-transparent w-full" placeholder="Confirm password">
                <div class="w-6 h-6 bg-transparent relative mt-1 " @click="showPassword3 = !showPassword3">
                    <img v-if="showPassword3" class="bg-transparent" src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/mdi_eyeqsdsqd.svg" alt="">
                    <img v-else class="bg-transparent" src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/mdi_eye.svg" alt="">
                </div>
            </div>

               <div class="text-white text-[10px] ml-10 mr-10 text-center">Never disclose the password of this email address to a third party, this could risk hacking your INDE account!</div>

               <div class="flex  mb-3  ">
                 <button class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-[120px] mx-auto font-bold mt-5 pt-2 pb-2 text-[18px]  "
                                            type="submit">Save</button>
            </div>

</template>

<script>

    export default {
        data() {
            return {
                showPassword: true,
                showPassword2: true,
                showPassword3: true,
              
            };
        },
    };

</script>


<style scoped>



</style>