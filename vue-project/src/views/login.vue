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
                        <div class="text-white text-[8px] mt-[-25px] ml-10 mr-10 text-center font-poppins">If you have forgot your password, please send a mail to Evann7455@gmail.com with your pseudo, mail, date of birth and your phone numbers</div>


                         <div id="erreur"><p id="erreurlogin" class="erreurlogin text-white absolute ml-8 mt-[-23px]"> </p></div>

                        <button class="px-2.5 border-none rounded-full font-poppins bg-red-500 text-white cursor-pointer w-3/5 mx-auto font-bold mt-10 pt-2 pb-2"
                                type="button" v-on:click="login">Login</button>
                </form>


                 
        <div class="mt-14 ">
                                <a href="/register" class="text-sm text-white no-underline hover:underline whitespace-nowrap font-poppins ">Not Registered ? Create an account!</a>
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

                  async hashPassword(password) {
                        const encoder = new TextEncoder();
                        const data = encoder.encode(password);
                        const hash = await crypto.subtle.digest('SHA-256', data);
                        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
                },
                        
                        async login() {
                                
                                        const identifier = document.getElementById('identifier').value;
                                        const password = document.getElementById('password').value;

                                        const HachedPassword = await this.hashPassword(password);
                                     
                                        axios.post('http://localhost:1337/api/auth/local', {
                                                identifier: identifier,
                                                password:  HachedPassword,
                                        })


                                        
                                                .then(response => {
                                                       
                                                        const status = response.status;
                                                       
                                                        if (status == 200) {
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