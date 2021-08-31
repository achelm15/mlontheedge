<template>
  <div class="container">
    <div class="titleText">THE TEAM</div>
    <div class="mainContainer">
      <div class="row">
        <div class="column">
          <img src="@/assets/IMG_2823.png" class="imageCrop" />
          <div class="nameHeader">
            ANDREW HELMREICH
            <v-btn icon @click="open('andrew')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="column">
          <img src="@/assets/IMG_2823m.png" class="imageCrop" />
          <div class="nameHeader">
            FLETCHER OUREN
            <v-btn icon @click="open('fletcher')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="column">
          <img src="@/assets/IMG_2823a.png" class="imageCrop" />
          <div class="nameHeader">
            AHMED MUHAMMAD
            <v-btn icon @click="open('ahmed')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src="@/assets/IMG_2823a.png" class="imageCrop" />
          <div class="nameHeader">
            ISAAC JACOBSON
            <v-btn icon @click="open('isaac')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="column">
          <img src="@/assets/IMG_2823a.png" class="imageCrop" />
          <div class="nameHeader">
            SUDEEP PASRICHA
            <v-btn icon @click="open('sudeep')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  methods: {
    open(name) {
      if (name == 'andrew') {
        window.open('https://www.linkedin.com/in/andrewhelmreich/', '_blank')
      }
      if (name == 'fletcher') {
        window.open('https://www.linkedin.com/in/andrewhelmreich/', '_blank')
      }
      if (name == 'ahmed') {
        window.open('https://www.linkedin.com/in/andrewhelmreich/', '_blank')
      }
      if (name == 'isaac') {
        window.open('https://www.linkedin.com/in/andrewhelmreich/', '_blank')
      }
      if (name == 'sudeep') {
        window.open('https://www.linkedin.com/in/andrewhelmreich/', '_blank')
      }
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  background-color: #dddddd;
}
.titleText {
  background-color: #1e4d2b;
  width: inherit;
  color: white;
  padding-top: 5rem;
  padding-bottom: 2rem;
  font-family: Titillium;
  font-size: 4rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.subtitleText {
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: 4rem;
}
.eceText {
  font-weight: 200;
  font-size: 2rem;
  padding-bottom: 3rem;
}
.mainContainer {
  padding: 0rem 0.75rem 2rem 0.75rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
  background-color: white;
  font-family: Titillium;
  font-size: 2rem;
}
.column {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.imageCrop {
  width: inherit; /* width of container */
  height: 30rem; /* height of container */
  width: 20rem;
  object-fit: cover;
  object-position: 0% 10%;
}
.row {
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.nameHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  font-size: 1.4rem;
}
.paragraph {
  width: 20rem;
  padding-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
}
.end {
  font-family: Titillium;
  font-size: 2rem;
  padding: 3rem 8rem 3rem 8rem;
  width: inherit;
  background-color: #1e4d2b;
  color: white;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.team {
  font-size: 2rem;
  font-weight: 400;
}
.names {
  font-size: 1.2rem;
  font-weight: 100;
  margin: 0.5rem;
  text-align: center;
}
</style>
