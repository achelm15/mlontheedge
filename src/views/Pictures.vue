<template>
  <div class="container">
    <div class="titleText">PICTURES</div>
    <div class="mainContainer">Check back later for more</div>
    <div class="end">
      <p class="paragraph">
        This page will be updated with pictures relevant to the project when
        they become available
      </p>
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
  padding-bottom: 2rem;
  font-family: Titillium;
  font-size: 4rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
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
  min-height: 50rem;
}
.row {
  width: inherit;
  display: flex;
  flex-direction: row;
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
</style>
