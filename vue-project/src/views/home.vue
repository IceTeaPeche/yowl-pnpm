<template>

    <header class="fixed top-0 w-full">

            <nav class="flex items-center justify-between mt-8 ">

                <div class="ml-7">
                    <div>
                        <img height="50px" width="50px" src="../assets/Ellipse 4.svg" alt="" @click="$router.push('/profilsperso')">
                    </div>
                </div>

                <div class=" ml-5">
                    <div>
                        <img height="80" width="80" src="../assets/Logofinal.svg" alt="">
                    </div>
                </div>

                <div class="flex mr-7">
                    <div class="mr-4 move-up">
                        <img src="../assets/cloche.svg" alt="" @click="$router.push('/notif')">
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
        
        <section>

            <div class="barre bg-gray-500 "></div>

            <div class="ml-4 flex "  @click="$router.push('/profilspublic')"> 
                
                <img width="42" height="35" class="mt-1.5" src="../assets/Ellipse 5.svg" alt="">

                <h1 class="text-white mt-3.5 ml-1 font-bold text-xl">Oursaveugle</h1>
            
            </div>

            <div class="box-width ml-10 mt-0" > 

                <h2 class="text-white box-width break-words ml-3.5 mt-0  ">sq,dklqjskldjqksndkonzojanfjoeznfjodnsfklsdfkjsiofsndfklsdnfsidofnsoklndfklsndkflsndfoinsdkflnsdlfkqpqqp</h2>

                <img class="ml-2" src="../assets/shrek.png" alt="">

            </div>

            <div class="flex mt-2 ">

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

        </section>


        


        


     </body>



     <footer class="fixed bottom-0 w-full">

         <div class="barre bg-gray-500 "></div>
         

        <nav class="mt-4 ">

            <section class="flex justify-between mb-4 ">

                <div class=" margin-left mt-1.5">
                    <img src="../assets/maison.svg" alt="" @click="$router.push('/home')">
                </div>

                <div>
                    <img src="../assets/gridicons_create.svg" alt="" @click="$router.push('/creation')">
                </div>

                <div class=" margin-right mt-1.5">
                    <img src="../assets/recherche.svg" alt="" @click="$router.push('/research')">
                </div>

            </section>


        </nav>

     </footer>



</template>


<script>
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

.box-width {
    width: 350px;
    
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