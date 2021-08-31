<template>
  <div class="outContainer">
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
    <router-view class="router"></router-view>
    <div class="footer">
      <v-card flat dark color="#303030">
        <v-card-text class="white--text pt-0">
          <div class="footerText">
            <v-card-text>
              <v-btn icon @click="open('facebook')">
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
            <p class="description">
              This project aims to improve the performance of Machine Learning
              algorithms on edge computing platforms
            </p>
            <div>{{ new Date().getFullYear() }} — CSU ECE</div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
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
@font-face {
  font-family: 'Titillium';
  src: local('Titillium'),
    url('/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'Titillium';
  src: local('Titillium'),
    url('/fonts/TitilliumWeb-Bold.ttf') format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: 'Titillium';
  src: local('Titillium'),
    url('/fonts/TitilliumWeb-ExtraLight.ttf') format('truetype');
  font-weight: 200;
}
.outContainer {
  background-color: #dddddd;
  height: 100%;
}
.titleText {
  font-family: Titillium;
  padding-left: 2rem;
}
.tab {
  font-family: Titillium;
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
.footer {
  font-family: Titillium;
  color: white;
  width: 100%;
  background-color: #303030;
  bottom: 0;
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
}
.description {
  padding-bottom: 1rem;
  padding-top: 1rem;
}
</style>
