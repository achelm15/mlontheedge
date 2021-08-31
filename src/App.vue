<template>
  <v-app>
    <v-app-bar app color="#303030" dark>
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
    <v-footer dark padless>
      <v-card flat tile class="footer">
        <v-card-text class="white--text pt-0">
          <div class="footerText">
            <v-card-text>
              <v-btn class="mx-4 white--text" icon @click="open('facebook')">
                <v-icon size="24px">
                  mdi-facebook
                </v-icon>
              </v-btn>
              <v-btn class="mx-4 white--text" icon @click="open('instagram')">
                <v-icon size="24px">
                  mdi-instagram
                </v-icon>
              </v-btn>
              <v-btn class="mx-4 white--text" icon @click="open('twitter')">
                <v-icon size="24px">
                  mdi-twitter
                </v-icon>
              </v-btn>
            </v-card-text>
            <div class="about">About the Project</div>
            <p>
              This project aims to improve the performance of Machine Learning
              algorithms on edge computing platforms
            </p>
            <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
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
    },
    open(name){
      if(name=="facebook"){
         window.open(
              "https://www.facebook.com/ece.department.csu/", "_blank");
      }
      if(name=="instagram"){
         window.open(
              "https://www.instagram.com/colostate_ece/?hl=en", "_blank");
      }
      if(name=="twitter"){
         window.open(
              "https://twitter.com/CSUEngineering", "_blank");
      }
    },
  }
};
</script>

<style scoped>
.titleText {
  padding-left: 2rem;
}
.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 6rem;
  color: white;
}
.tab:hover {
  cursor: pointer;
  color: #c8c372;
}
.tabContainer {
  display: flex;
  flex-direction: row;
  padding-right: 2rem;
}
.main {
  border: 1px solid red;
  background-color: #dddddd;
}
.container {
  background-color: white;
  height: inherit;
}
.footer {
  width: 100%;
  color: #303030;
}
.footerText {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  text-align: center;
}
.about {
  font-size: 1.1rem;
  padding-bottom: 0.2rem;
}
</style>
