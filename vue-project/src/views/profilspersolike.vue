<template>
    <div class="mt-8 ml-6">
        <img src="../assets/Arrow_Left_MD.svg" alt="" @click="$router.push('/home')">
    </div>

    <div class="relative flex items-center z-10 justify-center border w-40 h-40 rounded-full overflow-hidden ml-[133px]"
        v-for="item in datapps" :key="item.id">

        <img class="ml-2 z-10" :src="`http://localhost:1337${item.attributes.imagepp.data.attributes.url}`" alt="">


    </div>
    <div class="border-2 border-white z-30 rounded-full bg-white w-7 h-7 flex items-center justify-center absolute  left-1/2 
                    mt-[-32px] ml-[37px] mb-2">
        <label for="fileUpload" class="bg-transparent">
            <img class="bg-transparent z-50" src="../assets/Vector.svg" alt="">
        </label>
        <input type="file" id="fileUpload" @change="onFileChange" style="display: none;">
    </div>




    <div class="text-center items-center justify-center flex">

        <h1 class="text-white text-2xl mt-1.5 font-bold font-poppins">{{ dataprofils.username }}</h1>


        <img class="mt-2 bg-transparent" v-if="this.dataprofils && this.dataprofils.cert"
            :src="`http://localhost:1337${this.dataprofils.cert.url}`" alt="">
    </div>


    <div class="border border-custom-gray-2 rounded-lg mt-1 ml-2 mr-2 pl-2 pr-2 pt-1 pb-1">
        <h2 class="text-white text-sm bg-transparent text-left font-poppins">{{ dataprofils.bio }} </h2>
    </div>

    <div class="flex justify-center items-center text-white mr-2 mt-2 mb-2">
        <div class="mr-1 flex flex-col items-center">
            <h1 class=" font-bold font-poppins">{{ nbabonnement }}</h1>
            <h1 class="font-bold font-poppins">Subscription</h1>
        </div>
        <div class="ml-36 flex flex-col items-center">
            <h1 class="font-bold font-poppins">{{ nbabonne }}</h1>
            <h1 class="font-bold font-poppins">Followers</h1>
        </div>
    </div>

    <div class="flex justify-center items-center gap-12 mb-1 mt-4">

        <img class="h-7 w-7" src="../assets/grille2.svg" alt="" @click="$router.push('/profilsperso')">
        <img class="h-7 w-7" src="../assets/coeur.svg" alt="">
        <img class="h-6 w-6" src="../assets/favoris.svg" alt="" @click="$router.push('/profilspersofav')">

    </div>

    <div class="barre bg-white mb-2 w-11 ml-[195px]"></div>



    <article v-for="data in datas" :key="data.id">

        <div class="barre bg-gray-500 "></div>

        <div class="ml-4 flex ">



            <div class="mt-2 flex items-center justify-center relative border w-10 h-10 rounded-full overflow-hidden "
                v-for="item in datapps" :key="item.id">
                <img class="ml-2" :src="`http://localhost:1337${item.attributes.imagepp.data.attributes.url}`" alt="">
            </div>



            <div class="flex">
                <h1 class="text-white mt-3.5 ml-1 font-bold text-xl font-poppins">{{ data.attributes.pseudo }}</h1>
                <img class="mt-2 bg-transparent h-6 w-6 transform translate-y-2" v-if="data.certifurl"
                    :src="`http://localhost:1337${data.certifurl}`" alt="">
            </div>
        </div>





        <div class="box-width ml-10 mt-0">

            <h2 class="text-white box-width break-words ml-3.5 mt-0  font-poppins">{{ data.attributes.description }}</h2>
            <a class="text-blue-500 break-words ml-3.5 font-poppins" :href="data.attributes.link" target="_blank">{{
                data.attributes.link }}</a>
            <img class="ml-2"
                v-if="data.attributes.image && data.attributes.image.data && data.attributes.image.data.attributes"
                :src="`http://localhost:1337${data.attributes.image.data.attributes.url}`" alt="">

        </div>



        <div class="flex mt-2 mb-3">
            <div class="w-10 h-7 border border-white rounded-3xl ml-14 flex" @click="addLike(data)">
                <img v-if="data.isLikedByCurrentUser" src="../assets/coeurouge.svg" alt="Cœur rouge"
                    class="rounded-9xl ml-2 h-5 w-5 transform translate-y-1">
                <img v-else src="../assets/coeur.svg" alt="Cœur blanc"
                    class="rounded-9xl ml-2 h-5 w-5 transform translate-y-1">
            </div>

            <div class="w-20 h-7 border border-white rounded-3xl ml-7 flex">
                <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-0.5" src="../assets/comment.svg" alt="">
                <h2 class="text-white rounded-3xl margin-top ml-3 mr-2 text-sm">19k</h2>
            </div>

            <div class="w-10 h-7 border border-white rounded-3xl ml-10 flex" @click="addFav(data)">

                <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-1 pl-[2px]" v-if="data.isfavByCurrentUser"
                    src="../assets/favrouge.svg" alt="Favori">
                <img class="rounded-9xl mb-1.5 ml-2 h-5 w-5 transform translate-y-1" v-else src="../assets/favoris.svg"
                    alt="Pas en favori">
            </div>


        </div>

    </article>
</template>

<script>


import axios from 'axios';

export default {

    data() {
        return {
            datas: [],
            dataprofils: [],
            datapps: [],
            posts: [],
            nbabonne: 0,
            nbabonnement: 0,
            data: null,
            values: {
                singleFile: null
            }
        };
    },


    methods: {

        async deletetweet(data) {
            const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
            const id_user = apiResponse.user.id;
           
            axios.delete(`http://localhost:1337/api/posts/${data.id}`, {
            })



                .then(response => {
                    
                    const status = response.status;
                   
                    if (status == 200) {
                        location.reload();

                        ({

                        });
                    }
                })
                .catch(error => {
                  

                });
        },


        onFileChange(e) {

            const file = e.target.files[0]
            this.imageSrc = URL.createObjectURL(file);
            this.values.singleFile = file;
            this.onSubmit();
        },


        async onSubmit() {
            const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
            const id_user = apiResponse.user.id;

         

            try {
            
                const response = await fetch(`http://localhost:1337/api/pps?populate=imagepp`);

                const datapp = await response.json();

                this.datapps = datapp.data.filter(item => item.attributes.idpp == id_user);
               

                if (this.datapps.length === 0 || this.datapps[0].attributes.imagepp.data === null) {

                    const formData = new FormData()

                    const data = {
                        idpp: id_user,
                        users_permissions_user: id_user,
                    }

                    formData.append("data", JSON.stringify(data))
                    formData.append("files.imagepp", this.values.singleFile)
                    // Faire une requête POST
                    try {
                        const response = await axios.post('http://localhost:1337/api/pps', formData);
                       

                    } catch (error) {
                        console.error('error the form:', error);
                    }
                }

                else {
                    // Faire une requête DELETE
                    const deletepp = await axios.delete(`http://localhost:1337/api/pps/${this.datapps[0].id}`, {
                        headers: {
                            Authorization: `Bearer ${apiResponse.jwt}`,
                        },
                    });
                    const formData = new FormData()

                    const data = {
                        idpp: id_user,
                        users_permissions_user: id_user,
                    }

                    formData.append("data", JSON.stringify(data))
                    formData.append("files.imagepp", this.values.singleFile)
                    try {
                        const response = await axios.post('http://localhost:1337/api/pps', formData);
                      

                    } catch (error) {
                        console.error('error the form:', error);
                    }
                }
                location.reload();
            } catch (error) {
                console.error('error for take a data :', error);
            }

        },





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



        async fetchData() {
            try {

                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;

                const response = await fetch(`http://localhost:1337/api/posts?populate=*&filters[$and][0][like][id][$eq]=${id_user}`);
                const data = await response.json();
              

                const posts = data.data
                    
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





        async fetchDataprofil() {

            try {
                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
              
                const response = await fetch(`http://localhost:1337/api/users/${id_user}?populate=*`);
                const dataprofil = await response.json();
                this.dataprofils = dataprofil;
               
                if (this.dataprofils && this.dataprofils.cert) {
                   
                }

            } catch (error) {
                console.error('error for take a data :', error);
            }
        },



        async cptabonne() {
            try {
              

                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
               



                const response = await fetch(`http://localhost:1337/api/users/${id_user}?populate=*`, {
                    method: 'GET',

                });

                const responseData = await response.json();
               
                this.nbabonne = responseData.abonne.length;



            }
            catch (error) {
                console.error('error for take a data :', error);
            }

            try {
              

                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
              



                const response = await fetch(`http://localhost:1337/api/users/${id_user}?populate=*`, {
                    method: 'GET',

                });

                const responseData = await response.json(); 
                this.nbabonnement = responseData.abonnement.length;



            }
            catch (error) {
                console.error('error for take a data :', error);
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
                        Idexisting.splice(index, 1)


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





    },


    mounted() {
        const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
       
        this.fetchDataprofil();
        this.fetchData();
        this.ppprofilsperso();
        this.cptabonne();

    },
};







</script>


<style scoped>
.barre {
    height: 2px;
}

.box-width {
    width: 350px;

}


.move-right {
    transform: translateX(-44px);
}</style>