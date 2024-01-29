<template>
    

          <div class="flex mt-8 mb-10" @click="$router.push('/parameters')" >

                    <img class="ml-6 " src="../assets/Arrow_Left_MD.svg" alt="" >
                    <h1 class="text-white text-[25px] ml-[114px] font-bold ">Security</h1>

                </div>


           <button class="mb-6" @click="$router.push('/password')" > <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
            <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">Change password</div>
                <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                        <div class="bg-transparent">
                        <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                    </div>
                </div>
            </div>
        </button>

         <button class="mb-6" @click="$router.push('/mail')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
                <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">Email</div>
                    <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                            <div class="bg-transparent">
                            <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                        </div>
                    </div>
                </div>
            </button>
            
         <button class="mb-6" @click="$router.push('/account')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
                    <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">Account</div>
                        <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                                <div class="bg-transparent">
                                <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                            </div>
                        </div>
                    </div>
                </button>
    
                 <button class="mb-6" @click="$router.push('/pseudo')"> <div class="w-[374px] h-[84px] pl-[118px] py-2.5 bg-custom-gray rounded-[20px] justify-between items-center inline-flex ml-7 ">
                    <div class="w-[108px] text-center text-white text-xl font-bold bg-transparent">pseudo</div>
                        <div class="w-[53px] h-[83px] p-2.5 bg-red-500 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-[23.18px] flex">
            
                                <div class="bg-transparent">
                                <img class="bg-transparent" src="../assets/Arrow_Left_MDright.svg" alt="">
                            </div>
                        </div>
                    </div>
                </button>

</template>

<script>

</script>

<style scoped> 

</style>