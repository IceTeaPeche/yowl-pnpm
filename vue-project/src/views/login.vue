<template>
        <div class="flex flex-col justify-center items-center h-screen  relative">
                <img src="../assets/Logofinal.svg" alt="Logo"
                       class="absolute top-24 left-1/2 transform -translate-x-1/2 w-[200px] z-2">


                <form class="flex flex-col w-full max-w-xs gap-7 mt-[160px]">

                        <input type="text" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2" placeholder="Pseudo" id="identifier" 
                                required>

                        <div class="relative flex px-2.5 border border-gray-300 rounded-2xl">

                                <input class=" text-white flex-grow pt-2 pb-2"
                                       id="password" :type="showPassword ? 'password' : 'text'"  placeholder="Password" for required>
                                      

                                 <div class="w-6 h-6 bg-transparent relative mt-2 ml-1 " @click="showPassword = !showPassword">
                                                <img v-if="showPassword" class="bg-transparent" src="../assets/mdi_eyeqsdsqd.svg" alt="">
                                                <img v-else class="bg-transparent" src="../assets/mdi_eye.svg" alt="">
                                        </div>

                               

                        
                        </div>
                         <div id="erreur"><p id="erreurlogin" class="erreurlogin text-white absolute ml-8 mt-[-23px]"> </p></div>

                        <button class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-3/5 mx-auto font-bold mt-10 pt-2 pb-2"
                                type="button" v-on:click="login">Login</button>
                </form>


                  <div class="flex items-center justify-between mt-6 mb-6">
                
                        <div class="barre bg-gray-100 w-20 mr-2 rounded"></div>

                <span class="text-white">or</span>
                
                        <div class="barre bg-gray-100 w-20 ml-2 rounded"></div>

                 </div>


        <button>
                <div class="w-[210px] h-8 px-5 py-1 rounded-[10px] border border-zinc-300 flex-col justify-start items-start gap-2.5 inline-flex">
        <div class="justify-start items-center gap-2.5 inline-flex">
        

        <img class="ml-3.5"  src="../assets/icons8-google 1.svg" alt="">

        <div class="text-white text-xs font-medium font-['Poppins']">Login with Google</div>
        </div>
        </div>
        </button>

        <div class="mt-14 ">
                                <a href="/register" class="text-sm text-white no-underline hover:underline whitespace-nowrap  ">Not Registered ? Create an account!</a>
                        </div>

        </div>

        

        
</template>

<script>


import axios from 'axios';

export default {
        data() {
                return {
                        identifier: '',
                        password: '',
                        errorMessage: '',
                        showPassword: true,
                }
        },
                methods: {
                        login() {
                                
                                        const identifier = document.getElementById('identifier').value;
                                        const password = document.getElementById('password').value;
                                        axios.post('http://localhost:1337/api/auth/local', {
                                                identifier: identifier,
                                                password: password,
                                        })


                                        
                                                .then(response => {
                                                        console.log(response);
                                                        const status = response.status;
                                                        console.log(status)
                                                        if (status == 200) {
                                                                // Store the response data in local storage
                                                                localStorage.setItem('apiResponse', JSON.stringify(response.data));
                                                
                                                                 this.$router.push({ path: `/home`
                                                });
                                                        }
                                                })
                                                .catch(error => {
                                                        if (error.response) {
                                                                if (error.response.status === 400) {
                                                                        document.querySelector("#erreurlogin").innerHTML = "the password or the email is invalid";
                                                                }
                                                                if (error.response.status === 429) {
                                                                        document.querySelector("#erreurlogin").innerHTML = "an error occurred, please try later";
                                                                }
                                                        } else {
                                                                console.error('Error:', error);
                                                        }
                                                });
                                }
                }
}

        
                                                
                                


</script>

<style scoped>

.barre{
        height: 1.5px;
}

</style>