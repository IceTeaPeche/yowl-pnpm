<template>

      <div class="flex mt-8 mb-10"  @click="$router.push('/home')" >

                <img class="ml-6 " src="../assets/Arrow_Left_MD.svg" alt="" >
                <h1 class="text-white text-[25px] ml-[114px] font-bold ">Settings</h1>

            </div>


       <button class="mb-6" @click="$router.push('/security')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
        <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">Security</div>
            <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                    <div class="bg-transparent">
                    <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                </div>
            </div>
        </div>
    </button>
        

      <button class="mb-6"  @click="$router.push('/CGU')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
            <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">CGU</div>
                <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                        <div class="bg-transparent">
                        <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                    </div>
                </div>
            </div>
        </button>

          

          <button class="mb-6" @click="$router.push('/privacyparameters')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
            <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent whitespace-nowrap">Privacy Policy</div>
                <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                        <div class="bg-transparent">
                        <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                    </div>
                </div>
            </div>
        </button>

          <button class="mb-6" @click="$router.push('/cookieparameters')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
            <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">Cookies</div>
                <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                        <div class="bg-transparent">
                        <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                    </div>
                </div>
            </div>
        </button>

            
    

            <button class="mb-6" @click="$router.push('/aboutus')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
                    <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">About us</div>
                        <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                                <div class="bg-transparent">
                                <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                            </div>
                        </div>
                    </div>
                </button>
                <button class="mb-6" @click="$router.push('/certification')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
                    <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">Certification</div>
                        <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                                <div class="bg-transparent">
                                <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                            </div>
                        </div>
                    </div>
                </button>

            
           
        <div class="flex  mb-5  ">
            <button
                class="px-2.5 border-none rounded-full bg-custom-gray text-white cursor-pointer w-[160px] mx-auto font-bold pt-2 pb-2 text-[24px]  "
                type="submit"  @click="$router.push('/login')" >Log out</button>
        </div>

</template>


<script>

</script>


<style scoped>

</style>