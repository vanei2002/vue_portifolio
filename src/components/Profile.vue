<script setup lang="ts">
    const data = () =>{
        let text = "olá, meu nome é Samuel Jorge Matheus e eu sou Desenvolvedor Front-end,Tecnologias que tenho experiência:"

        let pt = "Olá, meu nome é Samuel Jorge Matheus e eu sou Desenvolvedor Front-end,Tecnologias que tenho experiência:"
        let ingl = "Hello, my name is Samuel Jorge Matheus and I am a Front-end Developer, Technologies I have experience with:"
        let spa = "Hola, mi nombre es Samuel Jorge Matheus y soy Desarrollador Front-end, Tecnologías con las que tengo experiencia:"

        return{
            text,
            skills:[
                {text:"TypeScript"},
                {text:"StyledComponents"},
                {text: "Html"},
                {text:"Java"},
            ],
            linguagens:[
                {type:"button",image: "../assets/usa.svg",linguagens:"Inglês",myfunction:()=> text = ingl }, 
                {type:"button",image: "../assets/logo.png",linguagens:"Português",myfunction:()=> text = pt},
                {type:"button",image: "../spain.svg",linguagens:"Espanhol",myfunction:()=>  text = spa },
            ]
        }
    }
</script>

<template>
    <main >
        <div class="bg-black">
            <img src="../assets/logo.png" alt="">
        </div>
        <p >{{data().text}}</p>
        <div>
            <li v-for="item in data().skills" :key="item.text">
            {{item.text}}
            </li>
        </div>
        <div v-for="lig in data().linguagens" :key="lig.linguagens">
        <img src="lig.image" alt="lig.img">
    
        <button @click="lig.myfunction" >
            {{lig.linguagens}}
    
        </button>
        </div>
    </main>
  </template>