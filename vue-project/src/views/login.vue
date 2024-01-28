<template>
        <div class="flex flex-col justify-center items-center h-screen  relative">
                <img src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/Logofinal.svg" alt="Logo"
                       class="absolute top-24 left-1/2 transform -translate-x-1/2 w-[200px] z-2">


                <form class="flex flex-col w-full max-w-xs gap-7 mt-[160px]">

                        <input type="text" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2" placeholder="Pseudo"
                                required>

                        <div class="relative flex">

                                <input class="px-2.5 border border-gray-300 rounded-2xl text-white flex-grow pt-2 pb-2"
                                       id="password" type="password" placeholder="Password" for required>

                        
                        </div>
                        <button class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-3/5 mx-auto transform transition-transform duration-300 ease-in-out font-bold mt-10 pt-2 pb-2"
                                type="submit" @click="$router.push('/home')">Login</button>
                </form>


                  <div class="flex items-center justify-between mt-6 mb-6">
                
                        <div class="barre bg-gray-100 w-20 mr-2 rounded"></div>

                <span class="text-white">or</span>
                
                        <div class="barre bg-gray-100 w-20 ml-2 rounded"></div>

                 </div>


        <button>
                <div class="w-[210px] h-8 px-5 py-1 rounded-[10px] border border-zinc-300 flex-col justify-start items-start gap-2.5 inline-flex">
        <div class="justify-start items-center gap-2.5 inline-flex">
        

        <img class="ml-3.5"  src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/icons8-google 1.svg" alt="">

        <div class="text-white text-xs font-medium font-['Poppins']">Sign in with Google</div>
        </div>
        </div>
        </button>

        <div class="mt-14 ">
                                <a href="/register" class="text-sm text-white no-underline hover:underline whitespace-nowrap  ">Not Registered ? Create an account!</a>
                        </div>

        </div>

        

        
</template>

<script>

</script>

<style scoped>

.barre{
        height: 1.5px;
}

</style>