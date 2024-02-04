<template>
    <header class="z-20 fixed top-0 w-full">


        <div
            class='flex items-center justify-center mt-10 rounded-3xl h-12 overflow-hidden w-full bg-custom-gray ml-0.5 mr-0.5 mb-0'>
            <div class="relative flex items-center bg-custom-gray h-12 mr-32">
                <div class="grid bg-custom-gray place-items-center h-full w-12 h-12 text-gray-300 ml-2 ">
                    <img src="../assets/material-symbols_searchgrey.svg" alt="">
                </div>

                <input class="peer bg-custom-gray h-full w-full outline-none text-sm text-white pr-2 ml-4" type="text"
                    v-model="search" v-on:change="fetchData()" id="search" placeholder="Search something ..." />
            </div>
        </div>

    </header>


    <body>

        <div class="h-28"></div>

      <article   v-for="data in datas" :key="data.id">

                <div class="barre bg-gray-500 "></div>

              <div class="ml-4 flex" @click="profilspublic(data)"> 
       <div class="mt-2 flex items-center justify-center relative border w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <div class="flex items-center justify-center relative border w-full h-full rounded-full overflow-hidden bg-gray-200">
                      <img v-if="data.avatarUrl" :src="`http://localhost:1337${data.avatarUrl}`" alt="" @click="$router.push('/profilspublic')" style="width: 100%; height: 100%;">
        </div>
        </div>

            

                    <h1 class="text-white mt-3.5 ml-1 font-bold text-xl font-poppins">{{ data.attributes.users_permissions_user.data.attributes.username }}</h1>
                      <img class="mt-2 bg-transparent h-6 w-6 transform translate-y-2" v-if="data.certifurl"  :src="`http://localhost:1337${data.certifurl}`" alt="">
                </div>
            
    

                <div class="box-width ml-10 mt-0" > 

                    <h2 class="text-white box-width break-words ml-3.5 mt-0 font-poppins ">{{ data.attributes.description }}</h2>
                     <a class="text-blue-500 break-words ml-3.5 font-poppins" :href="data.attributes.link" target="_blank">{{ data.attributes.link }}</a>
                    <img class="ml-2" v-if="data.attributes.image && data.attributes.image.data && data.attributes.image.data.attributes" :src="`http://localhost:1337${data.attributes.image.data.attributes.url}`"  alt="">

                </div>

            

               <div class="flex mt-2 mb-3">
             <div class="w-10 h-7 border border-white rounded-3xl ml-14 flex" @click="addLike(data)">
            <img v-if="data.isLikedByCurrentUser" src="../assets/coeurouge.svg" alt="Cœur rouge" class="rounded-9xl ml-2 h-5 w-5 transform translate-y-1">
            <img v-else src="../assets/coeur.svg" alt="Cœur blanc" class="rounded-9xl ml-2 h-5 w-5 transform translate-y-1">
        </div>
    
            <div class="w-20 h-7 border border-white rounded-3xl ml-7 flex" >
                <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-0.5" src="../assets/comment.svg" alt="">
                <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm">19k</h2>
            </div>
  
            <div class="w-10 h-7 border border-white rounded-3xl ml-10 flex" @click="addFav(data)">
        
                 <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-1 pl-[2px]" v-if="data.isfavByCurrentUser" src="../assets/favrouge.svg" alt="Favori" >
                 <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-1" v-else src="../assets/favoris.svg" alt="Pas en favori" >
            </div>
            
            </div>
             

             


            </article>




        <div class="h-20"></div>


    </body>





   
         <footer class="fixed bottom-0 w-full">

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
            datapps: [],
            posts: [],
            search: '',


        };
    },


    methods: {




        async addLike(data) {
            try {

                const userTokens = JSON.parse(localStorage.getItem('apiResponse')).jwt;
                const userId = JSON.parse(localStorage.getItem('apiResponse')).user.id;
               


                const responseGet = await fetch(`http://localhost:1337/api/posts/${data.id}?populate=like`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokens}`
                    }
                });

                let existingLikes = [];
                if (responseGet.ok) {
                    const responseData = await responseGet.json();
                   
                    existingLikes = responseData.data.attributes.like.data || [];
                }
              
                const Idexisting = existingLikes.map(user => user.id);
               
                const idUserNumber = Number(userId);
                if (Idexisting.includes(idUserNumber)) {

                    const index = Idexisting.indexOf(idUserNumber);
                    if (index > -1) {
                        Idexisting.splice(index, 1);


                    }
                } else {
                    Idexisting.push(idUserNumber);
                }
               
                data.isLikedByCurrentUser = !data.isLikedByCurrentUser;





                const requestBody = {
                    data: {
                        like: Idexisting
                    }
                }
                const response = await fetch(`http://localhost:1337/api/posts/${data.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokens}`
                    },
                    body: JSON.stringify(requestBody)
                });

                if (response.ok) {
                   
                    this.isLiked = true;


                } else {
                    console.error('Failed to add product to collection');
                }
            } catch (error) {
                console.error('An error occurred while adding product to collection:', error);
            }
            this.fetchData();
        },










        async addFav(data) {
            try {

                const userTokens = JSON.parse(localStorage.getItem('apiResponse')).jwt;
                const userId = JSON.parse(localStorage.getItem('apiResponse')).user.id;
               


                const responseGet = await fetch(`http://localhost:1337/api/posts/${data.id}?populate=fav`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokens}`
                    }
                });

                let existingFav = [];
                if (responseGet.ok) {
                    const responseData = await responseGet.json();
                   
                    existingFav = responseData.data.attributes.fav.data || [];
                }
              
                const Idexisting = existingFav.map(user => user.id);
               
                const idUserNumber = Number(userId);
                if (Idexisting.includes(idUserNumber)) {

                    const index = Idexisting.indexOf(idUserNumber);
                    if (index > -1) {
                        Idexisting.splice(index, 1);


                    }
                } else {
                    Idexisting.push(idUserNumber);
                }
               
                data.isFavByCurrentUser = !data.isFavByCurrentUser;





                const requestBody = {
                    data: {
                        fav: Idexisting
                    }
                }
                const response = await fetch(`http://localhost:1337/api/posts/${data.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokens}`
                    },
                    body: JSON.stringify(requestBody)
                });

                if (response.ok) {
                 


                } else {
                    console.error('Failed to add product to collection');
                }
            } catch (error) {
                console.error('An error occurred while adding product to collection:', error);
            }
            this.fetchData();
        },






        profilspublic(data) {
            this.$router.push(`/profilspublic/${data.attributes.id_user}`);
        },






        async fetchData() {
    try {
        const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
        const id_user = apiResponse.user.id;
        const response = await fetch(`http://localhost:1337/api/posts?populate=*&sort=createdAt:DESC&_q=${this.search}
`);
        const data = await response.json();

        const posts = data.data.map(post => {

            let localCertifUrl = '';
            let localavatarUrl = '';

                    if (post.attributes.users_permissions_user.data.attributes.certifurl) {
                        localCertifUrl = post.attributes.users_permissions_user.data.attributes.certifurl;

                    }

                     if (post.attributes.users_permissions_user.data.attributes.ppurlimage) {
                        localavatarUrl = post.attributes.users_permissions_user.data.attributes.ppurlimage;
                    }

            const isLikedByCurrentUser = post.attributes.like.data.some(like => like.id === id_user);

            const isfavByCurrentUser = post.attributes.fav.data.some(fav => fav.id === id_user);
            return {
                ...post,
                isLikedByCurrentUser,
                isfavByCurrentUser,
                certifurl: localCertifUrl,
                avatarUrl: localavatarUrl,
            };
        });

        this.datas = posts;
    } catch (error) {
        console.error('Erreur lors de la récupération des posts :', error);
    }
},







        async fetchDataprofil() {

            try {
                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
                
                const response = await fetch(`http://localhost:1337/api/users/${id_user}`);
                const dataprofil = await response.json();
                this.dataprofils = dataprofil;
            } catch (error) {
                console.error('error for take a data :', error);
            }
        },

        async ppprofilsperso() {
            const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
            const id_user = apiResponse.user.id;

        

            try {
               
                const response = await fetch(`http://localhost:1337/api/pps?populate=imagepp&_q=${this.search}`);

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
        

        this.fetchData();
        this.fetchDataprofil();
        this.ppprofilsperso();

    },
}






</script>

<style scoped>
.barre {
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

.haut {
    height: 120px;
}</style>