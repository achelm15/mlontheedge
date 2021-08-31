<template>
  <v-app>
    <v-app-bar
      app
      color="#303030"
      dark
    >
      <div class="titleText">Machine Learning on the Edge</div>
      <v-spacer></v-spacer>
      <div class="tabContainer">
        <div class="tab" @click="changeRoute('/')">Home</div>
        <div class="tab" @click="changeRoute('/Team')">Team</div>
        <div class="tab" @click="changeRoute('/Timeline')">Timeline</div>
         <div class="tab" @click="changeRoute('/Documents')">Documents</div>
        <div class="tab" @click="changeRoute('/Pictures')">Pictures</div>
      </div>
      

    </v-app-bar>

    <v-main class="main">
      <v-container class="container">
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="footer"
    
    >
      

      <v-card-text class="white--text pt-0">
        <div class="footerText">
          <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
          About the Project
          <p>
            This project aims to improve the performance of Machine Learning
            algorithms on edge computing platforms
          </p>
          <v-card-text class="white--text">
            
          <v-divider></v-divider>
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </div>
      </v-card-text>


      
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
import router from './router'
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
  methods:{
    changeRoute(route){
        router.push(route)
    }
  }
};
</script>

<style scoped>
.titleText{
  padding-left: 2rem;
}
.tab{
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 6rem;
  color: white;
}
.tab:hover{
  cursor: pointer;
  color: #C8C372;
}
.tabContainer{
  display:flex;
  flex-direction: row;
  padding-right: 2rem;
}
.main{
  border: 1px solid red;
  background-color: #DDDDDD;
}
.container{
  background-color: white;
  height: inherit;
}
.footer{
  border: 1px solid indigo;
  width: 100%;
}
.footerText{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
</style>
