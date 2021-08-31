<template>
  <div class="container">
    <div class="titleText">
      MACHINE LEARNING
      <div class="subtitleText">ON THE EDGE</div>
      <div class="eceText">
        <div>CSU ECE SENIOR DESIGN</div>
        <div>FALL 2021 - SPRING 2022</div>
      </div>
    </div>
    <div class="mainContainer">
      The Team
      <img src="@/assets/IMG_3051.png" class="imageCrop" />
    </div>
    <div class="row">
      <div class="noteDark">
        Summary
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="noteLight">
        Background
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="noteLight">
        Constraints
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="noteDark">
        Goals
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="end">
      <div class="team">TEAM MEMBERS</div>
      <div class="names">
        <div>ANDREW HELMREICH</div>
        <div>FLETCHER OUREN</div>
        <div>AHMED MUHAMMAD</div>
        <div>ISAAC JACOBSON</div>
      </div>
      <div class="team">ADVISOR</div>
      <div class="names">SUDEEP PASRICHA</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Home'
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
  background-color: white;
  padding-top: 3rem;
  font-family: Titillium;
  font-size: 2rem;
  padding-bottom: 3rem;
}
.imageCrop {
  width: 50rem; /* width of container */
  height: 30rem; /* height of container */
  object-fit: cover;
  object-position: 0% 40%;
}
.row {
  width: inherit;
  display: flex;
  flex-direction: row;
}
.noteDark {
  width: 50%;
  font-family: Titillium;
  font-size: 2rem;
  padding: 3rem 8rem 3rem 8rem;
  background-color: #555555;
  color: white;
}
.noteLight {
  width: 50%;
  font-family: Titillium;
  font-size: 2rem;
  padding: 3rem 8rem 3rem 8rem;
  background-color: #888888;
  color: white;
}
.paragraph {
  padding-top: 0.5rem;
  font-size: 1rem;
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
