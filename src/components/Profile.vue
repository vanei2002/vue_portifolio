<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { ref } from 'vue';

    const text = ref("Olá, meu nome é Samuel Jorge Matheus e eu sou Desenvolvedor Front-end, Tecnologias que tenho experiência:");
    const pt = ref("Olá, meu nome é Samuel Jorge Matheus e eu sou Desenvolvedor Front-end, Tecnologias que tenho experiência:");
    const ingl = ref("Hello, my name is Samuel Jorge Matheus and I am a Front-end Developer, Technologies I have experience with:");
    const spa = ref("Hola, mi nombre es Samuel Jorge Matheus y soy Desarrollador Front-end, Tecnologías con las que tengo experiencia:");

    const skills = ref([
        { text: "TypeScript" },
        { text: "StyledComponents" },
        { text: "Html" },
        { text: "Java" },
    ]);

    const linguagens = ref([
    {
        type: "button",
        image: "../assets/usa.svg",
        linguagens: "Inglês",
        myfunction: () => (text.value = ingl.value),
    },
    {
        type: "button",
        image: "../assets/logo.png",
        linguagens: "Português",
        myfunction: () => (text.value = pt.value),
    },
    {
        type: "button",
        image: "../spain.svg",
        linguagens: "Espanhol",
        myfunction: () => (text.value = spa.value),
    },
    ]);
</script>


<template>
  <main >
    <div class="bg-navBar flex justify-center ">
      <div class="bg-bgImg p-2 m-3 rounded-lg	">
        <img src="../assets/logo.png" alt="">
      </div>
    </div>

    <div class="w-2/5 items-center  mx-auto mt-24">
      
      <p class="text-xl">{{ text }}</p>

      <div class="mt-20 rounded-lg p-6 bg-bgImg border-2 border-borderPg">
        <li v-for="item in skills" :key="item.text">
          {{ item.text }}
        </li>
      </div>
  
      <div class="flex justify-center mt-96">
  
        <div class="flex items-center mx-7 bg-bgImg  p-2 rounded-lg mt-16" v-for="lig in linguagens" :key="lig.linguagens">
          <img class="mr-2" src="../assets/usa.svg" >
          <button @click="lig.myfunction">{{ lig.linguagens }}</button>
        </div>
  
      </div>

    </div>



  </main>
</template>