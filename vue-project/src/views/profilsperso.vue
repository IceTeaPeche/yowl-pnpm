<template>
    <div class="mt-8 ml-6">
        <img src="../assets/Arrow_Left_MD.svg" alt="" @click="$router.push('/home')">
    </div>

    <div class="relative flex items-center z-10 justify-center border w-40 h-40 rounded-full overflow-hidden ml-[133px]"  v-for="item in datapps" :key="item.id">
        
         <img class="ml-2 z-10" :src="`http://localhost:1337${item.attributes.imagepp.data.attributes.url}`" alt="">

        
    </div>
     <div
                    class="border-2 border-white z-30 rounded-full bg-white w-7 h-7 flex items-center justify-center absolute  left-1/2 
                    mt-[-32px] ml-[37px] mb-2">
                     <label for="fileUpload" class="bg-transparent">
                    <img class="bg-transparent z-50" src="../assets/Vector.svg" alt="">
                    </label>
                    <input type="file" id="fileUpload" @change="onFileChange" style="display: none;">
                </div>




    <div class="text-center">

        <H1 class="text-white text-2xl mt-1.5 font-bold ">{{ dataprofils.username }}</H1>

    </div>

    <div class="border border-custom-gray-2 rounded-lg mt-1 ml-2 mr-2 pl-2 pr-2 pt-1 pb-1">
        <h2 class="text-white text-sm bg-transparent text-left">{{ dataprofils.bio }} </h2>
    </div>

    <div class="flex justify-center items-center text-white mr-2 mt-2 mb-2">

        <div class="mr-1">
            <h1 class="ml-9 font-bold">39k</h1>
            <h1 class="font-bold">Subscription</h1>
        </div>

        <div class="ml-36">
            <h1 class="ml-6 font-bold">15k</h1>
            <h1 class="font-bold">Followers</h1>
        </div>

    </div>

    <div class="flex justify-center mb-3">
        <button
            class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-28 mx-auto font-bold mt-2 pt-2 pb-2 text-xl  "
            type="submit">Follow</button>
    </div>


    <article v-for="data in datas" :key="data.id">

        <div class="barre bg-gray-500 "></div>

        <div class="ml-4 flex ">

            <div class="mt-2 flex items-center justify-center relative border w-10 h-10 rounded-full overflow-hidden "  v-for="item in datapps" :key="item.id">
                <img class="ml-2" :src="`http://localhost:1337${item.attributes.imagepp.data.attributes.url}`" alt="">
            </div>

            <h1 class="text-white mt-3.5 ml-1 font-bold text-xl">{{ dataprofils.username }}</h1>

        </div>

        <div class="box-width ml-10 mt-0">

            <h2 class="text-white box-width break-words ml-3.5 mt-0  ">{{ data.attributes.description }}</h2>

            <img class="ml-2"
                v-if="data.attributes.image && data.attributes.image.data && data.attributes.image.data.attributes"
                :src="`http://localhost:1337${data.attributes.image.data.attributes.url}`" alt="">

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
</template>

<script>


import axios from 'axios';

export default {

    data() {
        return {
            datas: [],
            dataprofils: [],
            datapps: [],
            data: null,
             values: {
                singleFile: null
            }
        };
    },


    methods: {


        onFileChange(e) {

            const file = e.target.files[0];
            this.imageSrc = URL.createObjectURL(file);
            this.values.singleFile = file;
             this.onSubmit();
        },


        async onSubmit() {
            const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
            const id_user = apiResponse.user.id;

            console.log("id_user de pp:", id_user);

            try {
                console.log("coucou nathan")
                const response = await fetch(`http://localhost:1337/api/pps?populate=imagepp`);

                const datapp = await response.json();

                this.datapps = datapp.data.filter(item => item.attributes.idpp == id_user);
                console.log("datappssssssss", this.datapps);

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
                        console.log('Form send to strapi:', response.data);

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
                    // Faire une requête POST
                    try {
                        const response = await axios.post('http://localhost:1337/api/pps', formData);
                        console.log('Form send to strapi:', response.data);

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
           
            console.log("id_user de pp:", id_user);

            try {
                console.log("coucou nathan")
                const response = await fetch(`http://localhost:1337/api/pps?populate=imagepp`);

                const datapp = await response.json();
             

                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                

                this.datapps = datapp.data.filter(item => item.attributes.idpp == id_user);
                console.log("datappsfinal",this.datapps);

            } catch (error) {
                console.error('error for take a data :', error);
            }
        },







        async fetchData() {

            try {
              
                const response = await fetch(`http://localhost:1337/api/posts?populate=image&sort=createdAt:DESC`);

                const data = await response.json();

                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_of_account = apiResponse.user.id;

                this.datas = data.data.filter(item => item.attributes && item.attributes.id_user == id_of_account);

              

            } catch (error) {
                console.error('error for take a data :', error);
            }
        },


        async fetchDataprofil() {

            try {
                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;
                console.log('id_user:', id_user); // Check if id_user is correct
                const response = await fetch(`http://localhost:1337/api/users/${id_user}`);
                const dataprofil = await response.json();
                this.dataprofils = dataprofil;
            } catch (error) {
                console.error('error for take a data :', error);
            }
        },





    },


    mounted() {
        const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
        console.log(apiResponse);
        this.fetchDataprofil();
        this.fetchData();
        this.ppprofilsperso();
    

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
}
</style>