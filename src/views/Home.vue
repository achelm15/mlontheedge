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
      <img src="@/assets/team.jpg" class="imageCrop" />
    </div>
    <div class="spacers">
      <div class="row">
        <div class="noteBlue">
          Background
          <p class="paragraph">
            Machine learning has become increasingly relevant in recent years
            across all computing devices. Machine Learning models have a variety
            of uses, such as image detection, speech recognition, and behavior
            recognition. Unfortunately, Machine Learning models are generally
            large and complex, leading to poor performance on embedded, IoT, and
            edge devices. Such devices included smart appliances, autonomous
            vehicles, smartphones and smartwatches, Raspberry Pi, and Arduino
            devices. As a result, it is necessary for these models to be
            optimized and design specifically with these devices in mind.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="noteYellow">
          Constraints
          <p class="paragraph">
            As this project aims to optimize machine learning models,
            specifically Convolutional Nueral Networks, on resource constrained
            devices, the constraints for this project are many. These devices
            generally operate on low power with a smaller amount of memory than
            seen on other computing platforms. Additionally, these devices
            generally lack processing power of their larger counterparts. As
            such, the models developed within this project must be able to
            operate on a small amout of power, memory, and processing power.
          </p>
        </div>
        <div class="noteOrange">
          Goals
          <p class="paragraph">
            The goal of this project is to design and optimize machine learning
            algorithms for deployment on IoT, embedded and edge computing
            devices. Specifically, the project will result in machine learning
            models for object detection. These models will be optimized through
            techniques such as pruning, quantization, and clustering. The
            resulting models should be able to produce accurate results much
            more quickly than current, un-optimized models. These models will be
            deployed on a variety of devices including Raspberry Pi and smart
            devices.
          </p>
        </div>
      </div>

      <div class="end">
        <div class="team">TEAM MEMBERS</div>
        <div class="names">
          <div>ANDREW HELMREICH</div>
          <div>FLETCHER OUREN</div>
          <div>AHMED MOHAMMAD</div>
          <div>ISAAC JACOBSON (VIP)</div>
        </div>
        <div class="team">ADVISOR</div>
        <div class="names">DR. SUDEEP PASRICHA</div>
      </div>
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
.spacers {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
}
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
  object-position: 0% 30%;
}
.row {
  width: inherit;
  display: flex;
  flex-direction: row;
}
.noteBlue {
  width: 100%;
  font-family: Titillium;
  font-size: 2rem;
  padding: 3rem 8rem 3rem 8rem;
  background-color: #105456;
  color: white;
}
.noteYellow {
  width: 50%;
  font-family: Titillium;
  font-size: 2rem;
  padding: 3rem 8rem 3rem 8rem;
  background-color: #ecc530;
  color: white;
}
.noteOrange {
  width: 50%;
  font-family: Titillium;
  font-size: 2rem;
  padding: 3rem 8rem 3rem 8rem;
  background-color: #cc5430;
  color: white;
}
.noteLightBlue {
  width: 50%;
  font-family: Titillium;
  font-size: 2rem;
  padding: 3rem 8rem 3rem 8rem;
  background-color: #12a4b6;
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
