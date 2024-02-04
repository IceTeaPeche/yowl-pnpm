


<template>
    <div class="flex flex-col justify-center items-center h-screen  relative">
        <img src="../assets/Logofinal.svg" alt="Logo"
            class="absolute top-14 left-1/2 transform -translate-x-1/2 w-[200px] z-0">


        <form class="flex flex-col w-full max-w-xs gap-7 mt-[281px]">

            <input type="text" id="username" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2 z-1"
                placeholder="Pseudo" required>

            <input type="text" id="birthday" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2"
                placeholder="Birthdate YYYY-MM-DD">

            <input type="text" id="email" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2"
                placeholder="Mail" v-model="email" @input="validateEmail" required>

             <input type="text" id="number" class="px-2.5 border border-gray-300 rounded-2xl text-white pt-2 pb-2"
                    placeholder="your number phone">





            <div class="relative flex mb-[-22px] px-2.5 border border-gray-300 rounded-2xl">

                <input class=" text-white flex-grow pt-2 pb-2 " id="password" :type="showPassword ? 'password' : 'text'"
                    placeholder="Password" @input="validatePassword" v-model="password1" for required>


                <div class="w-6 h-6 bg-transparent relative mt-2 ml-1 " @click="showPassword = !showPassword">
                    <img v-if="showPassword" class="bg-transparent" src="../assets/mdi_eyeqsdsqd.svg" alt="">
                    <img v-else class="bg-transparent" src="../assets/mdi_eye.svg" alt="">
                </div>





            </div>

            <div class="relative flex mb-[-22px] px-2.5 border border-gray-300 rounded-2xl mt-5">

                <input class=" text-white flex-grow pt-2 pb-2 " id="confirmedpassword"
                    :type="showPassword1 ? 'password' : 'text'" placeholder="Confirmed password" for required>


                <div class="w-6 h-6 bg-transparent relative mt-2 ml-1 " @click="showPassword1 = !showPassword1">
                    <img v-if="showPassword1" class="bg-transparent" src="../assets/mdi_eyeqsdsqd.svg" alt="">
                    <img v-else class="bg-transparent" src="../assets/mdi_eye.svg" alt="">
                </div>





            </div>


            <div class="flex transform translate-y-2.5">
                <h2 class="px-2.5 text-white flex-grow pt-2 pb-2 text-[10px] pr-0 font-poppins">
                    do you accept cookies ?</h2>

                <div class="mr-[51px] mt-[2px] flex">
                    <button
                        class="border-none rounded-2xl bg-red-500 text-white cursor-pointer font-poppins pl-1.5 pr-1.5 text-[8px] mr-4 pt-1 pb-1"
                        type="button" @click="$router.push('/cookie')">Personalize</button>
                
                <div  class="flex">
                    <button 
                        :class="`rounded-2xl text-white cursor-pointer pl-2.5 pr-2.5 text-[8px] pt-1 pb-1 border border-red-500 ${isClicked ? 'bg-red-500' : 'bg-grey-500'}`"
                        @click="buttonaccept()" type="button">
                        {{ isClicked ? 'Accepted' : 'Accept' }}
                    </button>




                </div>
                </div>
            </div>

            <p class="text-white absolute bg-transparent mt-[186px] text-[10px] ml-3" v-if="emailError">{{ emailError }}</p>
            <p class="text-white absolute bg-transparent mt-[325px] text-[10px] ml-3" v-if="passwordError">{{
                passwordError }}</p>
            <div class="text-red-500 absolute bg-transparent mt-[365px] text-[16px] ml-1">{{ errorMessage }}</div>





            <button
                class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-3/5 mx-auto transform transition-transform duration-300 ease-in-out font-bold mt-10 pt-2 pb-2 font-poppins"
                type="button" v-on:click="registerUser">Register</button>
        </form>




        <div class="mt-14 ">
            <a href="/login" class="text-sm text-white no-underline hover:underline whitespace-nowrap  font-poppins">You have account ?
                please click here</a>
        </div>

    </div>
</template>

<script>
import axios from 'axios';



export default {
    data() {
        return {
            isClicked: false,
            password1: '',
            passwordError: '',
            email: '',
            emailError: '',
            errorMessage: '',
            showPassword: true,
            showPassword1: true,
            confirmedmpasword: '',
             cookiePreferences: {
                Statistic: 1,
                Advertissement: 1,
            },
        };
    },
    methods: {



        async buttonaccept() {
           
            this.isClicked = !this.isClicked;

           
            const nvaleur = this.isClicked ? 1 : 0;

            try {
               
                const data = {
                    "data": {
                        "Statistic": nvaleur,
                        "Advertissement": nvaleur,
                    }
                };

                await fetch(`http://localhost:1337/api/cookies/19`, {
                    method: 'PUT', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                console.log("Cookies preferences updated:", data);
            } catch (error) {
                console.error('Erreur lors de la mise à jour des préférences de cookies:', error);
            }
        },





   

        calculateAge(birthday) {
            const birthDate = new Date(birthday);
            const differenceInMs = Date.now() - birthDate.getTime();
            const ageDt = new Date(differenceInMs);
            return Math.abs(ageDt.getUTCFullYear() - 1970);
        },

        validatePassword() {
            this.passwordError = '';
            if (this.password1.length < 8) {
                this.passwordError = 'The password must contain at least 6 characters.';
            } else if (!/\d/.test(this.password1)) {
                this.passwordError = 'The password must contain at least one digit.';
            } else if (!/[a-z]/.test(this.password1)) {
                this.passwordError = 'The password must contain at least one lowercase letter."';
            } else if (!/[A-Z]/.test(this.password1)) {
                this.passwordError = 'The password must contain at least one uppercase letter.';
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.password1)) {
                this.passwordError = 'The password must contain at least one special character.';
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
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const username = document.getElementById('username').value;
            const birthday = document.getElementById('birthday').value;
            const number = document.getElementById('number').value;
            const confirmedpassword = document.getElementById('confirmedpassword').value;

            const age = this.calculateAge(birthday);
            if (age < 15) {
                this.errorMessage = 'You must be at least 15 years old to register.';
                return;
            }

            if (password !== confirmedpassword) {
                this.errorMessage = 'Les 2 mot de passe ne sont pas identiques';
                return;
            }

            fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                    birthday: birthday,
                    number: number,
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    
                    return response.json();
                     
                })
                .then(data => {
                    console.log(data);
                    this.$router.push('/login');
                   
                     
                    
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        },
    },
        
   


    }





</script>

<style scoped>
.barre {
    height: 1.5px;
}
</style>