<template>
    <div class="flex flex-col justify-center items-center h-screen  relative">
        <img src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/Logofinal.svg" alt="Logo"
            class="absolute top-24 left-1/2 transform -translate-x-1/2 w-[200px] z-0">


        <form class="flex flex-col w-full max-w-xs gap-7 mt-[275px]">

            <input type="text" id="username" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2 z-1" placeholder="Username" 
                required>

            <input type="text" id="birthday" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2" placeholder="Birthdate MM/DD/YYYY">

            <input type="text" id="email" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2" placeholder="Mail" v-model="email" @input="validateEmail"
                    required>
           



            <div class="relative flex mb-[-22px]">

                <input class="px-2.5 border border-gray-300 rounded-2xl text-white flex-grow pt-2 pb-2" id="password" v-model="password" @input="validatePassword"
                    type="password" placeholder="Password" for required>
                

            


            </div>


         <div class="flex transform translate-y-2.5">
        <input class="px-2.5 text-white flex-grow pt-2 pb-2 text-[10px] pr-0 "
            placeholder="do you accept cookies ?" >

        <div class="mr-[51px] mt-[2px]">
            <button class="border-none rounded-2xl bg-red-500 text-white cursor-pointer pl-1.5 pr-1.5 text-[8px] mr-4 pt-1 pb-1"
                type="button"  @click="$router.push('/cookie')">Personalize</button>

                <button
            :class="` rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[8px] pt-1 pb-1 border border-red-500  ${isClicked ? 'bg-red-500' : 'bg-grey-500'}`"
            @click="isClicked = !isClicked"
            type="submit"
        >
            Accept
        </button>
        </div>
    </div>

         <p class="text-white absolute bg-transparent mt-[185px] text-[10px] ml-3" v-if="emailError">{{ emailError }}</p>
         <p class="text-white absolute bg-transparent mt-[255px] text-[10px] ml-3" v-if="passwordError">{{ passwordError }}</p>





            <button
                class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-3/5 mx-auto transform transition-transform duration-300 ease-in-out font-bold mt-10 pt-2 pb-2"
                type="submit" v-on:click="registerUser" >Register</button>
        </form>


        <div class="flex items-center justify-between mt-6 mb-6">

            <div class="barre bg-gray-100 w-20 mr-2 rounded"></div>

            <span class="text-white">or</span>

            <div class="barre bg-gray-100 w-20 ml-2 rounded"></div>

        </div>


        <button
            class="w-[210px] h-8 px-5 py-1 rounded-[10px] border border-zinc-300 flex-col justify-start items-start gap-2.5 inline-flex">
            <div class="justify-start items-center gap-2.5 inline-flex">


                <img class="ml-3.5" src="/Users/ethanledouble/github/yowl-pnpm/vue-project/src/assets/icons8-google 1.svg"
                    alt="">

                <div class="text-white text-xs font-medium font-['Poppins']">Register with Google</div>
            </div>
        </button>

        <div class="mt-14 ">
            <a href="/login" class="text-sm text-white no-underline hover:underline whitespace-nowrap  ">You have account ? please click here</a>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isClicked: false,
            password: '',
            passwordError: '',
            email: '',
            emailError: '',
        };
    },
    methods: {

        validatePassword() {
            this.passwordError = '';
            if (this.password.length < 6) {
                this.passwordError = 'Le mot de passe doit contenir au moins 6 caractères.';
            } else if (!/\d/.test(this.password)) {
                this.passwordError = 'Le mot de passe doit contenir au moins un chiffre.';
            } else if (!/[a-z]/.test(this.password)) {
                this.passwordError = 'Le mot de passe doit contenir au moins une lettre minuscule.';
            } else if (!/[A-Z]/.test(this.password)) {
                this.passwordError = 'Le mot de passe doit contenir au moins une lettre majuscule.';
            }
        },

        validateEmail() {
            this.emailError = '';
            const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!check.test(this.email.toLowerCase())) {
                this.emailError = 'Veuillez entrer une adresse email valide.';
            }
        },


         async registerUser() {
            console.log('tes dans la fonction registerUser batard');
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const username = document.getElementById('username').value;

         try {
                const response = await axios.post('http://localhost:1337/api/auth/local/register', {
                    username: username,
                    email: email,
                    password: password,
                }, {
                    timeout: 5000, // Augmente le délai d'attente à 5 secondes
                    headers: {
                        'Access-Control-Allow-Origin': '*', // Autorise les requêtes CORS de tous les domaines
                    },
                });

                console.log(response.data);
                this.$router.push('/login');
            } catch (error) {
                console.error(error);
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            }
        },
    }
}

</script>

<style scoped>
.barre {
    height: 1.5px;
}
</style>