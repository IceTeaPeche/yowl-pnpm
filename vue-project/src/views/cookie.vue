<template>

    <div class="flex mt-8" >

        <img class="ml-6 " src="../assets/Arrow_Left_MD.svg" alt="" @click="$router.push('/register')">
        <h1 class="text-white text-[25px] ml-32 font-bold ">Cookies</h1>

    </div>

    <div class="w-[360px] text-white text-[13px] border-none rounded-full bg-custom-gray rounded-2xl  ml-9 mt-10 px-6 p-2 text-center ">By authorizing these third-party services, you accept the deposit and reading of cookies and the use of tracking technologies necessary for their proper functioning.</div>

    <div class="w-[360px] text-center text-white text-[13px] border-none rounded-full bg-custom-gray rounded-2xl  ml-9 mt-10 px-6 p-2  ">Audience measurement : Clarity</div>

    <div class="flex items-center justify-center ml-[70px]">

        <div class="mr-[65px] mt-[15px] flex">
            
            
              <button
                :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[8px] pt-1 pb-1 border border-red-500 mr-3 ${buttonState === 'accept' ? 'bg-red-500' : 'bg-grey-500'}`"
                @click="buttonState = 'accept'"
                type="button"
            >
                Accept
            </button>

            <button
                :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[8px] pt-1 pb-1 border border-red-500 ml-3 ${buttonState === 'refuse' ? 'bg-red-500' : 'bg-grey-500'}`"
                @click="buttonState = 'refuse'"
                type="button"
            >
                Refuse
            </button>
        </div>

    </div>


    <div class="w-[360px] text-center text-white text-[13px] border-none rounded-full bg-custom-gray rounded-2xl  ml-9 mt-10 px-6 p-2  ">Audience measurement : Google Analytics (GA4)</div>

        <div class="flex items-center justify-center ml-[70px]">

            <div class="mr-[65px] mt-[15px] flex">
            
            
                  <button
                    :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[8px] pt-1 pb-1 border border-red-500 mr-3 ${buttonState2 === 'accept' ? 'bg-red-500' : 'bg-grey-500'}`"
                    @click="buttonState2 = 'accept'"
                    type="button"
                >
                    Accept
                </button>

                <button
                    :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[8px] pt-1 pb-1 border border-red-500 ml-3 ${buttonState2 === 'refuse' ? 'bg-red-500' : 'bg-grey-500'}`"
                    @click="buttonState2 = 'refuse'"
                    type="button"
                >
                    Refuse
                </button>
            </div>

        </div>


        <div class="w-[360px] text-center text-white text-[13px] border-none rounded-full bg-custom-gray rounded-2xl  ml-9 mt-10 px-6 p-2  ">Advertising agencies : Facebook Pixel</div>

        <div class="flex items-center justify-center ml-[70px]">

            <div class="mr-[65px] mt-[15px] flex">
            
            
                  <button
                    :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[8px] pt-1 pb-1 border border-red-500 mr-3 ${buttonState3 === 'accept' ? 'bg-red-500' : 'bg-grey-500'}`"
                    @click="buttonState3 = 'accept'"
                    type="button"
                >
                    Accept
                </button>

                <button
                    :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[8px] pt-1 pb-1 border border-red-500 ml-3 ${buttonState3 === 'refuse' ? 'bg-red-500' : 'bg-grey-500'}`"
                    @click="buttonState3 = 'refuse'"
                    type="button"
                >
                    Refuse
                </button>
            </div>

        </div>





        <div class="flex items-center justify-center">
        <button
            class="rounded-2xl cursor-pointer pl-2.5 pr-2.5 text-[20px] pt-1 pb-1 bg-red-500 ml-1 text-align mt-10"
            type="button" @click="$router.push('/privacy')"
        >
            Privacy policity
        </button>
    </div>













    
    
    


</template>



<script>

export default {
    data() {
        return {
            buttonState: null,
            buttonState2: null,
            buttonState3: null,
        };
    },
};

</script>



<style scoped>


</style>

