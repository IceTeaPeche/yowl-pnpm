<template>


    <header class="z-20 fixed top-0 w-full">  


  <div class='flex items-center justify-center mt-10 rounded-3xl h-12 overflow-hidden w-full bg-custom-gray ml-0.5 mr-0.5 mb-0'>
        <div class="relative flex items-center bg-custom-gray h-12 mr-32">
            <div class="grid bg-custom-gray place-items-center h-full w-12 h-12 text-gray-300 ml-2 ">
                <img src="../assets/material-symbols_searchgrey.svg" alt="">
            </div>

            <input
            class="peer bg-custom-gray h-full w-full outline-none text-sm text-white pr-2 ml-4"
            type="text" v-model="search" v-on:change="fetchData()"
            id="search"
            placeholder="Search something ..." /> 
        </div>
    </div>
      
    </header>

        
    <body>

        <div class="h-28"></div>
        
          <article   v-for="data in datas" :key="data.id">

                <div class="barre bg-gray-500 "></div>

                <div class="ml-4 flex "  @click="$router.push('/profilspublic')"> 
                
                    <img width="42" height="35" class="mt-1.5" src="../assets/Ellipse 5.svg" alt="">

                    <h1 class="text-white mt-3.5 ml-1 font-bold text-xl">Oursaveugle</h1>
            
                </div>

                <div class="box-width ml-10 mt-0" > 

                    <h2 class="text-white box-width break-words ml-3.5 mt-0  ">{{ data.attributes.description }}</h2>

                    <img class="ml-2" v-if="data.attributes.image && data.attributes.image.data && data.attributes.image.data.attributes" :src="`http://localhost:1337${data.attributes.image.data.attributes.url}`"  alt="">

                </div>

            

                <div class="flex mt-2 mb-3 ">

                   <div class="w-20 h-7 border border-white rounded-3xl ml-12 flex">
                <img class="rounded-9xl ml-2 h-5 w-5 transform translate-y-1" src="../assets/coeur.svg" alt="">
                <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm">19k</h2>
            </div>
            <div class="w-20 h-7 border border-white rounded-3xl ml-3 flex">
                <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-0.5" src="../assets/comment.svg" alt="">
                <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm">19k</h2>
            </div>
            <div class="w-20 h-7 border border-white rounded-3xl ml-3 flex">
                <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-0.5" src="../assets/partage.svg" alt="">
                <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm">19k</h2>
            </div>
            <div class="w-20 h-7 border border-white rounded-3xl ml-3 flex">
                <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-1" src="../assets/favoris.svg" alt="">
                <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm">19k</h2>
            </div>
             

                </div>

            </article>

            


             <section>

                    <div class="barre bg-gray-500 mt-3 "></div>

                    <div class="ml-4 flex"> 
                
                        <img width="42" height="35" class="mt-1.5" src="../assets/Ellipse 3.png" alt="">

                        <h1 class="text-white mt-3.5 ml-1 font-bold text-xl">Marioppp</h1>
            
                    </div>

                    <div class="box-width ml-10 mt-0" > 

                        <h2 class="text-white box-width break-words ml-3.5 mt-0 pr-4 ">sq,dklqjskldjqksndkonzojanfjoeznfjodnsfklsdfkjsiofsndfklsdnfsidofnsoklndfklsndkflsndfoinsdkflnsdlfkqpqqp</h2>

                    </div>

                    <div class="flex mt-2 ">

                    <div class="w-20 h-7 border border-white rounded-3xl ml-12 flex z-10">
        <img class="rounded-9xl ml-2 h-5 w-5 transform translate-y-1" src="../assets/coeur.svg" alt="">
        <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm transform translate-y-[1.5px] bg-transparent z-0">19k</h2>
    </div>
    <div class="w-20 h-7 border border-white rounded-3xl ml-3 flex z-10">
        <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-0.5" src="../assets/comment.svg" alt="">
        <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm bg-transparent transform translate-y-[1.5px] z-0">19k</h2>
    </div>
    <div class="w-20 h-7 border border-white rounded-3xl ml-3 flex z-10">
        <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-0.5" src="../assets/partage.svg" alt="">
        <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm bg-transparent transform translate-y-[1.5px] z-0">19k</h2>
    </div>
    <div class="w-20 h-7 border border-white rounded-3xl ml-3 flex z-10">
        <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-1" src="../assets/favoris.svg" alt="">
        <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm transform translate-y-[1.5px] bg-transparent z-0">19k</h2>
    </div>
             


                    </div>

                </section>

        
         <section>

                        <div class="barre bg-gray-500 mt-3 "></div>

                        <div class="ml-4 flex mt-1"> 
                
                            <img width="42" height="35" class="mt-1.5" src="../assets/Ellipse 3.png" alt="">

                            <h1 class="text-white mt-1 ml-2 font-bold text-lg">Marioppp</h1>
                            
            
                        </div>

                        <div class="mb-1">
        <h6 class="text-white mt-[-25px] ml-[70px] text-sm overflow-hidden whitespace-nowrap text-overflow-ellipsis">ceci est une bio donc voila la c'est pour voir bio qsdjlqsjdl</h6>
    </div>

                    </section>

                     <section>

                            <div class="barre bg-gray-500 mt-3 "></div>

                            <div class="ml-4 flex mt-1"> 
                
                                <img width="42" height="35" class="mt-1.5" src="../assets/Ellipse 3.png" alt="">

                                <h1 class="text-white mt-1 ml-2 font-bold text-lg">Marioppp</h1>
                            
            
                            </div>

                            <div class="mb-2">
            <h6 class="text-white mt-[-25px] ml-[70px] text-sm overflow-hidden whitespace-nowrap text-overflow-ellipsis">ceci est une bio donc voila la c'est pour voir bio qsdjlqsjdl</h6>
        </div>

                        </section>


        <div class="h-20"></div>


    </body>

    



     <footer class="fixed bottom-0 w-full z-20">

                 <div class="barre bg-gray-500 "></div>
         

                <nav class="mt-4 ">

                    <section class="flex justify-between mb-4 ">

                        <div class=" margin-left mt-1.5">
                            <img src="../assets/maisonblanche.svg" alt="" @click="$router.push('/home')">
                        </div>

                        <div>
                            <img src="../assets/gridicons_create.svg" alt="" @click="$router.push('/creation')">
                        </div>

                        <div class=" margin-right mt-1.5">
                            <img src="../assets/researchrouge.svg" alt="" @click="$router.push('/research')">
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
            datas: [],
            search: '',
        };
    },


    methods: {
        async fetchData() {
            try {
                console.log("coucou nathan")
                const response = await fetch(`http://localhost:1337/api/posts?populate=image&_q=${this.search}`);

                const data = await response.json();

                this.datas = data.data.filter(item => item.attributes);

                console.log(data, "data take ");
            } catch (error) {
                console.error('error for take a data :', error);
            }
        },



    },


    mounted() {
        const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
        console.log(apiResponse);

        this.fetchData();
    },
};






</script>

<style scoped>



.barre{
    height: 1px;
}

.margin-left {
    margin-left: 75px;

}

.margin-right {
    margin-right: 75px;

}

.box-width {
    width: 350px;
    
}

</style>