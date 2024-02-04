<template>

       <header class="fixed top-0 w-full">

                <nav class="flex items-center justify-between mt-8 ">

                       <div class="ml-7 mb-4 w-12 h-12 bg-gray-200 rounded-full" @click="$router.push('/profilsperso')">
            <div class="flex items-center justify-center relative border w-full h-full rounded-full overflow-hidden bg-gray-200" v-for="item in datapps" :key="item.id">
                <img :src="`http://localhost:1337${item.attributes.imagepp.data.attributes.url}`" alt="" @click="$router.push('/profilsperso')" style="width: 100%; height: 100%;">
            </div>
        </div>

                    <div class=" ml-5">
                        <div>
                            <img height="80" width="80" src="../assets/Logofinal.svg" alt="">
                        </div>
                    </div>

                    <div class="flex mr-7">
                        <div class="mr-4 move-up">
                            <img src="../assets/cloche.svg" alt="">
                        </div>

                        <div>
                            <img src="../assets/parametre.svg" alt="" @click="$router.push('/parameters')">
                        </div>
                    </div>

                </nav>
         <div class="barre bg-gray-500 mr-3 ml-3 mt-0 move-upe"></div>
         </header>


         <body>
            
             <div class="haut"> </div>
             <div class="ml-2"><p class="text-white text-xl font-bold mb-2 font-poppins">Notifications : </p></div>
        
            <section>

                

                <div class="ml-5 flex"> 
                
                    <img width="30" height="32" class="mt-1.5" src="../assets/Ellipse 3.png" alt="">

                    <h1 class="text-white mt-2.5 ml-1 font-bold text-m font-poppins">Squeezie</h1>


                    <p class="text-gray-400 mt-2.5 ml-1 font-poppins">has started to follow you</p>
            
                </div>

                <div class="barre bg-gray-500 ml-5 mr-5 mt-3 mb-2 "></div>


            </section>


            <section>

                

                    <div class="ml-5 flex"> 
                
                        <img width="30" height="32" class="mt-1.5" src="../assets/Ellipse 3.png" alt="">

                        <h1 class="text-white mt-2.5 ml-1 font-bold text-m font-poppins">Squeezie</h1>


                        <p class="text-gray-400 mt-2.5 ml-1 font-poppins">like yout post</p>
            
                    </div>

                    <div class="barre bg-gray-500 ml-5 mr-5 mt-3 mb-2 "></div>


                </section>

                     <section>

                

                        <div class="ml-5 flex"> 
                
                            <img width="30" height="32" class="mt-1.5" src="../assets/Ellipse 3.png" alt="">

                            <h1 class="text-white mt-2.5 ml-1 font-bold text-m font-poppins">Squeezie</h1>


                            <p class="text-gray-400 mt-2.5 ml-1 font-poppins">commented " I like your post "</p>
            
                        </div>

                        <div class="barre bg-gray-500 ml-5 mr-5 mt-3 mb-2"></div>


                    </section>



         </body>




         <footer class="fixed bottom-0 w-full">

             <div class="barre bg-gray-500 "></div>
         

            <nav class="mt-4 ">

                <section class="flex justify-between mb-4 ">

                    <div class=" margin-left mt-1.5">
                        <img src="../assets/maisonblanche.svg" alt="" @click="$router.push('home')">
                    </div>

                    <div>
                        <img src="../assets/gridicons_create.svg" alt=""
                        @click="$router.push('/creation')">
                    </div>

                    <div class=" margin-right mt-1.5">
                        <img src="../assets/recherche.svg" alt=""
                        @click="$router.push('/research')">
                    </div>

                </section>


            </nav>

         </footer>
    
</template>



<script>



import axios from 'axios';

export default {

    data() {
        return {
            datapps: [],

        };
    },


    methods: {



        async ppprofilsperso() {
            const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
            const id_user = apiResponse.user.id;

          

            try {
               
                const response = await fetch(`http://localhost:1337/api/pps?populate=imagepp`);

                const datapp = await response.json();


                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));


                this.datapps = datapp.data.filter(item => item.attributes.idpp == id_user);
              

            } catch (error) {
                console.error('error for take a data :', error);
            }
        },





    },


    mounted() {
        const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
    
        this.ppprofilsperso();
    },
};












</script>


<style scoped> 




.move-up {
    transform: translateY(-3px);
}

.move-upe {
    transform: translateY(-10px);
}

.barre{
    height: 1px;
}


.margin-top {
    margin-top: 2px;
}

.margin-left {
    margin-left: 75px;

}

.margin-right {
    margin-right: 75px;

}

.haut {
    height: 120px;
}

</style>