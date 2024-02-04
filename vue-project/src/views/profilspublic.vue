
     
     <template>
    <div class="mt-8 ml-6">
        <img src="../assets/Arrow_Left_MD.svg" alt="" @click="$router.push('/home')">
    </div>

    

   <div class="flex items-center justify-center relative border w-40 h-40 rounded-full overflow-hidden ml-[133px]"   v-for="item in datapps" :key="item.id" >
        <img class="ml-2" :src="`http://localhost:1337${item.attributes.imagepp.data.attributes.url}`"  alt="">
    </div>
    
    <div class="text-center items-center justify-center flex">

  <h1 class="text-white text-2xl mt-1.5 font-bold font-poppins">{{ dataprofils.username }}</h1>
   <img class="mt-2 bg-transparent" v-if="this.dataprofils && this.dataprofils.cert" :src="`http://localhost:1337${this.dataprofils.cert.url}`" alt="">
    </div>
    <div class="border border-custom-gray-2 rounded-lg mt-1 ml-2 mr-2 pl-2 pr-2 pt-1 pb-1">
    
 <h2 class="text-white text-sm bg-transparent text-left font-poppins">{{dataprofils.bio}} </h2>
    </div>
    <div class="flex justify-center items-center text-white mr-2 mt-2 mb-2">
        <div class="mr-1 flex flex-col items-center">
            <h1 class=" font-bold font-poppins">{{nbabonnement}}</h1>
            <h1 class="font-bold font-poppins">Subscription</h1>
        </div>
       <div class="ml-36 flex flex-col items-center">
             <h1 class="font-bold font-poppins">{{ nbabonne }}</h1>
             <h1 class="font-bold font-poppins">Followers</h1>
         </div>
    </div>

<div>
 


      <div class="flex justify-center mb-3" v-if="isUserInResponseData">
                  <button  @click="abonne()" class="px-2.5 font-poppins border-none rounded-full bg-gray-500 text-white cursor-pointer w-28 mx-auto font-bold mt-2 pt-2 pb-2 text-xl  " type="submit">Followers</button>
             </div>

    <div class="flex justify-center mb-3"  v-else >
            <button  @click="abonne()" class="px-2.5 font-poppins border-none rounded-full bg-red-500 text-white cursor-pointer w-28 mx-auto font-bold mt-2 pt-2 pb-2 text-xl  " type="submit">Follow</button>
        </div>
</div>

 <article   v-for="data in datas" :key="data.id">

          <div class="barre bg-gray-500 "></div>


  <div class="ml-4 flex "> 
                
                    <div class="mt-2 flex items-center justify-center relative border w-10 h-10 rounded-full overflow-hidden "  v-for="item in datapps" :key="item.id">
        <img class="ml-2" :src="`http://localhost:1337${item.attributes.imagepp.data.attributes.url}`"  alt="">
    </div>


    <div class="flex">
        <h1 class="text-white mt-3.5 ml-1 font-bold text-xl font-poppins">{{ dataprofils.username }}</h1>
         <img class="mt-2 bg-transparent h-6 w-6 transform translate-y-2" v-if="data.certifurl"  :src="`http://localhost:1337${data.certifurl}`" alt="">
            </div>
                </div>


               <div class="box-width ml-10 mt-0" > 


                              <h2 class="text-white box-width break-words ml-3.5 mt-0  font-poppins">{{ data.attributes.description }}</h2>

                  <a class="text-blue-500 break-words ml-3.5 font-poppins" :href="data.attributes.link" target="_blank">{{ data.attributes.link }}</a>
           <img class="ml-2" v-if="data.attributes.image && data.attributes.image.data && data.attributes.image.data.attributes" :src="`http://localhost:1337${data.attributes.image.data.attributes.url}`"  alt="">
                </div>
    <div class="flex mt-2 mb-3">
                  <div class="w-10 h-7 border border-white rounded-3xl ml-14 flex" @click="addLike(data)">
                 <img v-if="data.isLikedByCurrentUser" src="../assets/coeurouge.svg" alt="Cœur rouge" class="rounded-9xl ml-2 h-5 w-5 transform translate-y-1">
                 <img v-else src="../assets/coeur.svg" alt="Cœur blanc" class="rounded-9xl ml-2 h-5 w-5 transform translate-y-1">
             </div>


 

  <div class="w-10 h-7 border border-white rounded-3xl ml-10 flex" @click="addFav(data)">
        
                      <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-1 pl-[2px]" v-if="data.isfavByCurrentUser" src="../assets/favrouge.svg" alt="Favori" >
                      <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-1" v-else src="../assets/favoris.svg" alt="Pas en favori" >
                 </div>
             
                </div>
 </article>








  </template>




    

<style scoped>

.box-width {
    width: 350px;
    
}
.move-right {
    transform: translateX(-44px);
}

.barre {
    height: 2px;
}

</style>



<script>

import axios from 'axios';

export default {
    data() {
        return {
            datas: [],
            dataprofils: [],
            data: null,
            datapps: [],
            nbabonne: 0,
            nbabonnement: 0,
            isUserInResponseData: false,
            posts: [],
        };
    },





    methods: {

        async followoupas() {

             try {
                

                const path = window.location.pathname;
                const match = path.match(/\/profilspublic\/([^\/]+)/);
                if (!match || match.length < 1) {
                    console.error('Unable to extract id_of_account from the URL');
                    return;
                }
                const id_of_account = match[1];

                
                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
             


                const response = await fetch(`http://localhost:1337/api/users/${id_of_account}?populate=*`, {
                    method: 'GET',

                });

                let idfollow = [];
                if (response.ok) {
                    const responseData = await response.json();
                 
                    idfollow = responseData.abonne || [];
                }
                
                const Idexisting = idfollow.map(user => user.id);
                

                if (Idexisting.includes(id_user))  {
                   
                    this.isUserInResponseData = true;

                } else {
                  
                      this.isUserInResponseData = false;

                }





            }
            catch (error) {
                console.error('error for take a data :', error);
            }

            
        },




        async cptabonne() {

             try {
               

                const path = window.location.pathname;
                const match = path.match(/\/profilspublic\/([^\/]+)/);
                if (!match || match.length < 1) {
                    console.error('Unable to extract id_of_account from the URL');
                    return;
                }
                const id_of_account = match[1];

             
                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
             
    
              
                const response = await fetch(`http://localhost:1337/api/users/${id_of_account}?populate=*`, {
                    method: 'GET',

                });

                const responseData = await response.json();
                
                 this.nbabonne = responseData.abonne.length;
                
                

            }
            catch (error) {
                console.error('error for take a data :', error);
            }

             try {
                

                const path = window.location.pathname;
                const match = path.match(/\/profilspublic\/([^\/]+)/);
                if (!match || match.length < 1) {
                    console.error('Unable to extract id_of_account from the URL');
                    return;
                }
                const id_of_account = match[1];

               
                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
               



                const response = await fetch(`http://localhost:1337/api/users/${id_of_account}?populate=*`, {
                    method: 'GET',

                });

                const responseData = await response.json();
               
                this.nbabonnement = responseData.abonnement.length;



            }
            catch (error) {
                console.error('error for take a data :', error);
            }

            
        },


        


        
        async abonne() {

            try {
              
               
                const path = window.location.pathname;
                const match = path.match(/\/profilspublic\/([^\/]+)/);
                if (!match || match.length < 1) {
                    console.error('Unable to extract id_of_account from the URL');
                    return;
                }
                const id_of_account = match[1];

                
                 const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
                const userTokens = apiResponse.jwt;
              

                
                const responseGet = await fetch(`http://localhost:1337/api/users/${id_of_account}?populate=*`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokens}`
                    }
                });

                let existingabonne = [];
                if (responseGet.ok) {
                    const responseData = await responseGet.json(); 
                   
                    existingabonne = responseData.abonne || [];
                }
             
                const Idexisting = existingabonne.map(user => user.id);
              

               
                const idUserNumber = Number(id_user);

                if (Idexisting.includes(idUserNumber)) {
                 
                    const index = Idexisting.indexOf(idUserNumber);
                    if (index > -1) {
                        Idexisting.splice(index, 1);
                    }
                } else {
                    Idexisting.push(idUserNumber);
                }

               


              const data = {
                  "abonne": Idexisting
              }
                  
                    

                const response = await fetch(`http://localhost:1337/api/users/${id_of_account}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                 const response2 = await fetch(`http://localhost:1337/api/users/${id_of_account}?populate=*`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                     },
                });
                    

                const responseData = await response.json();
             
                 const responseData2222 = await response2.json();
                

            } catch (error) {
                console.error('error for take a data :', error);
            }
            window.location.reload();
           
            },

        


        async fetchData() {
            try {
                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
                 const path = window.location.pathname;
                const match = path.match(/\/profilspublic\/([^\/]+)/);
                if (!match || match.length < 1) {
                    console.error('Unable to extract id_of_account from the URL');
                    return;
                }
                const id_of_account = match[1];
              

                
                const response = await fetch(`http://localhost:1337/api/posts?populate=*&sort=createdAt:DESC`);
                const data = await response.json();

                const posts = data.data
                    .filter(post => post.attributes.id_user.toString() === id_of_account) 
                    .map(post => {

                        let localCertifUrl = '';
                        if (post.attributes.users_permissions_user.data.attributes.certifurl) {
                            localCertifUrl = post.attributes.users_permissions_user.data.attributes.certifurl;

                        }
                    
                        const isLikedByCurrentUser = post.attributes.like && post.attributes.like.data
                            ? post.attributes.like.data.some(like => like.id === id_user)
                            : false;

                        const isfavByCurrentUser = post.attributes.fav && post.attributes.fav.data
                            ? post.attributes.fav.data.some(fav => fav.id === id_user)
                            : false;

                        return {
                            ...post,
                            isLikedByCurrentUser,
                            isfavByCurrentUser,
                            certifurl: localCertifUrl,
                        };
                    });
                    

                this.datas = posts;
            } catch (error) {
                console.error('Erreur lors de la récupération des posts :', error);
            }
        },



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




        async fetchDataprofil() {
            const path = window.location.pathname;
            const match = path.match(/\/profilspublic\/([^\/]+)/);
            if (!match || match.length < 1) {
                console.error('Unable to extract id_user from the URL');
                return;
            }
            const id_user = match[1];
           
            try {
                
                const response = await fetch(`http://localhost:1337/api/users/${id_user}?populate=*`);
                const dataprofil = await response.json();
              
                 this.dataprofils = dataprofil;
                 if (this.dataprofils && this.dataprofils.cert) {
               
                }else {
                   
                }
            } catch (error) {
                console.error('error for take a data :', error);
            }
        },


         async ppprofilsperso() {
             const path = window.location.pathname;
            const match = path.match(/\/profilspublic\/([^\/]+)/);
            if (!match || match.length < 1) {
                console.error('Unable to extract id_user from the URL');
                return;
            }
            const id_user = match[1];

            try {
               
                const response = await fetch(`http://localhost:1337/api/pps?populate=imagepp`);

                const datapp = await response.json();


                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));


                this.datapps = datapp.data.filter(item => item.attributes.idpp == id_user);
               


            } catch (error) {
                console.error('error for take a data :', error);
            }
            }
        },

        mounted() {
            const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
            this.fetchDataprofil();
            this.fetchData();
            this.ppprofilsperso();
            this.cptabonne();
             this.followoupas();
            

    }
};





</script>