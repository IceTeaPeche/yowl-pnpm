<template>
    <div class="flex mt-8">

        <img class="ml-6 " src="../assets/Arrow_Left_MD.svg" alt="" @click="$router.push('/parameters')">
        <h1 class="text-white text-[25px] ml-32 font-bold font-poppins">Cookies</h1>

    </div>

    <div
        class="w-[360px] text-white text-[11px] border-none font-poppins rounded-full bg-custom-gray rounded-2xl  ml-9 mt-9 px-6 p-2 text-center ">
        By authorizing these third-party services, you accept the deposit and reading of cookies and the use of tracking
        technologies necessary for their proper functioning.</div>

    <div class=" text-center text-white text-[18px] mt-7 font-poppins">Functionality must be activated</div>



    <div class=" text-white text-[10px] border-none font-poppins rounded-full mt-2 px-6 p-2 text-center "> These cookies only concern the
        operation of our social network. They are essential and necessary to ensure the optimal operation of our social
        network and to enable you to use its services and functionalities. Without these cookies, which are absolutely
        necessary, our social network will not function as well as we would like.</div>


    <div class=" text-center text-white text-[18px] font-poppins mt-6">Statistic</div>

    <div class=" text-white text-[10px] border-none font-poppins rounded-full mt-2 px-6 p-2 text-center ">
        These cookies enable us to monitor site activity, draw up statistics on visitor numbers and the use of the various
        elements that make up our site (sections and content visited, path taken, etc.),
        in order to improve the attractiveness, ergonomics and performance of the site according to actual use. This data is
        collected anonymously.
    </div>


    <div class="flex items-center justify-center ml-[70px]">
        <div class="mr-[65px] mt-[15px] flex">
            <button
                :class="`rounded-2xl text-white cursor-pointer font-poppins pl-2.5 pr-2.5 text-[12px] pt-1 pb-1 border border-red-500 mr-3 ${buttonState2 === 1 ? 'bg-red-500' : 'bg-grey-500'}`"
                @click="setCookieConsent1('buttonState2', 1)">
                Accept
            </button>
            <button
                :class="`rounded-2xl text-white cursor-pointer font-poppins pl-2.5 pr-2.5 text-[12px] pt-1 pb-1 border border-red-500 ml-3 ${buttonState2 === 0 ? 'bg-red-500' : 'bg-grey-500'}`"
                @click="setCookieConsent2('buttonState2', 0)">
                Refuse
            </button>
        </div>
    </div>

    <div class="text-center text-white text-[18px] mt-7 font-poppins">Advertissement</div>




    <div class=" text-white text-[10px] border-none rounded-full mt-2 px-6 p-2 text-center font-poppins">
        These cookies, including third-party cookies, are used for marketing and advertising purposes. They enable us to
        display advertising content on the websites you visit that matches your interests.
    </div>


    <div class="flex items-center justify-center ml-[70px]">
        <div class="mr-[65px] mt-[15px] flex">
            <button
                :class="`rounded-2xl text-white cursor-pointer font-poppins pl-2.5 pr-2.5 text-[12px] pt-1 pb-1 border border-red-500 mr-3 ${buttonState3 === 1 ? 'bg-red-500' : 'bg-grey-500'}`"
                @click="setCookieConsent3('buttonState3', 1)">
                Accept
            </button>
            <button
                :class="`rounded-2xl text-white cursor-pointer font-poppins pl-2.5 pr-2.5 text-[12px] pt-1 pb-1 border border-red-500 ml-3 ${buttonState3 === 0 ? 'bg-red-500' : 'bg-grey-500'}`"
                @click="setCookieConsent4('buttonState3', 0)">
                Refuse
            </button>
        </div>
    </div>




    <div class="flex items-center justify-center mt-5">
        <button class="rounded-2xl cursor-pointer pl-2.5 pr-2.5 font-poppins text-[20px] pt-1 pb-1 bg-red-500 ml-1 text-align mt-10"
            type="button" @click="$router.push('/privacyparameters')">
            Privacy policity
        </button>
    </div>


    <div class="flex items-center justify-center mt-7">
        <button class="rounded-2xl cursor-pointer pl-2.5 pr-2.5 font-poppins text-[20px] pt-1 pb-1 bg-red-500 ml-1 text-align mt-10"
            type="button" @click="$router.push('/parameters')">
            Validate
        </button>
    </div>
</template>



<script>

export default {
    data() {
        return {
            // Initialiser buttonState2 et buttonState3 avec les valeurs stockées ou null si non définies
            buttonState2: localStorage.getItem('buttonState2') ? parseInt(localStorage.getItem('buttonState2')) : null,
            buttonState3: localStorage.getItem('buttonState3') ? parseInt(localStorage.getItem('buttonState3')) : null,
        };
    },

    methods: {
        setCookieConsent1(stateName, value) {
            this.updateStateAndLocalStorage(stateName, value);
            this.updateBackend('Statistic', value); // Mettez à jour selon votre clé
        },

        setCookieConsent2(stateName, value) {
            this.updateStateAndLocalStorage(stateName, value);
            this.updateBackend('Statistic', value); // Mettez à jour selon votre clé
        },

        setCookieConsent3(stateName, value) {
            this.updateStateAndLocalStorage(stateName, value);
            this.updateBackend('Advertissement', value); // Mettez à jour selon votre clé
        },

        setCookieConsent4(stateName, value) {
            this.updateStateAndLocalStorage(stateName, value);
            this.updateBackend('Advertissement', value); // Mettez à jour selon votre clé
        },

        updateStateAndLocalStorage(stateName, value) {
            this[stateName] = value;
            localStorage.setItem(stateName, value);
        },

        updateBackend(key, value) {
            // Utilisez key et value pour construire votre payload correctement
            fetch(`http://localhost:1337/api/cookies/19`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "data": {
                        [key]: value,
                    }
                })
            }).catch(error => console.error('Erreur lors de la mise à jour backend:', error));
        },
    },
};

</script>




<style scoped></style>

