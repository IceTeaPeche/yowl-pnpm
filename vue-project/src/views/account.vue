<template>
    <div class="flex mt-8 mb-4" @click="$router.push('/security')">

        <img class="ml-6 " src="../assets/Arrow_Left_MD.svg" alt="">
        <h1 class="text-white text-[25px] ml-[123px] font-bold font-poppins">Account</h1>

    </div>

     <section>

                            <div class="barre bg-gray-500 "></div>

                            <div class="ml-4 flex"> 
                
                                <img width="42" height="35" class="mt-1.5" src="../assets/Ellipse 3.png" alt="">

                                <h1 class="text-white mt-2 ml-1 font-bold text-xl font-poppins">Noha</h1>
            
                            </div>

                            <div class="box-width ml-12 mt-[-17px]"> 
                    <h2 class="text-white box-width break-words ml-3.5 mt-0 pr-4 text-[10px] font-poppins">c'est bio q,s;d,qsld,lqs,d;qls,d,lqsndjklenfkjds fkjdnf</h2>
                   
                </div>

                <div class="barre bg-gray-500 mt-2 "></div>

     </section>

         <div class="flex  mb-3  ">
            <button
                class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-[180px] mx-auto font-bold mt-8 pt-2 pb-2 text-[18px] font-poppins"
                type="submit"
                @click="showPopup = true">Delete account</button>
        </div>

        <div v-if="showPopup" class="popup  text-white ml-[30px] mt-[-60px]">
            <div class="w-[370px] h-[380px] py-[4px] bg-custom-gray rounded-[20px] flex-col justify-center items-center gap-[20px] inline-flex font-poppins">
        <div class="text-center text-red-500 text-3xl font-bold bg-transparent font-poppins">Warning</div>
        <div class="w-[340px] text-center text-white text-[16px] font-bold bg-transparent ml-4 mr-4 font-poppins">Once the button is pressed, you will only have one week left to cancel this decision.</div>
       
   <div class="w-[370px] p-2.5 bg-custom-gray justify-center items-center  inline-flex flex-col">
        <div class="flex  mb-3 bg-transparent font-poppins ">
            <button
                class="px-2.5 border-none rounded-full bg-red-500 text-white cursor-pointer w-[220px] font-poppins mx-auto font-bold mt-8 pt-2 pb-2 text-[18px]"
                type="button" v-on:click="Deleteaccount">Delete account</button>
        </div>
        <div class="flex  mb-3 bg-transparent  ">
            <button
                class="px-2.5 border-none rounded-full font-poppins text-white cursor-pointer w-[100px] mx-auto font-bold mt-1 pt-2 pb-2 text-[14px]"
                type="button"
                @click="showPopup = false">Cancel</button>
        </div>
    </div>
    </div>
        </div>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            showPopup: false,
        };
    },


        methods: {


            Deleteaccount() {
                const apiResponse = JSON.parse(localStorage.getItem('apiResponse'));
                const id_user = apiResponse.user.id;

                axios.delete(`http://localhost:1337/api/users/${id_user}`, {
                })



                    .then(response => {
                        console.log(response);
                        const status = response.status;
                        console.log(status)
                        if (status == 200) {


                            this.$router.push({
                                path: `/register`
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);

                    });
            }

        },



    };



</script>


<style scoped>

.move-upe {
    transform: translateY(-10px);
}

.barre{
    height: 1px;
}

</style>