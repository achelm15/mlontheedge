<template>
  <div class="container">
    <div class="titleText">THE TEAM</div>
    <div class="mainContainer">
      <div>STUDENTS</div>
      <div class="row">
        <div class="column">
          <img src="@/assets/andrew.png" class="imageCrop" />
          <div class="nameHeader">
            ANDREW HELMREICH
            <v-btn icon @click="open('andrew')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Andrew is a senior at Colorado State studying Computer Engineering
            while minoring in Computer Science. He is interested in computer
            vision through Machine Learning due to his desire to work with
            autonomous vehicles in the future. Outside of the classroom, Andrew
            is a member of the CSU baseball team, and involved with Student
            Mobilization at CSU.
          </p>
        </div>
        <div class="column">
          <img src="@/assets/isaac.png" class="imageCrop" />
          <div class="nameHeader">
            ISAAC JACOBSON
            <v-btn icon @click="open('isaac')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Isaac is a third year student at CSU majoring in Computer
            Engineering. His major interests are machine/deep learning and
            computer architecture so the Machine Learning on the Edge project
            had natural appeal to him. Outside of school Isaac loves to swim,
            travel, and play chess. Isaac is joining this project as a first
            semester VIP student eager to help and learn.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="column2">
          <img src="@/assets/ahmed.png" class="imageCrop" />
          <div class="nameHeader">
            AHMED MOHAMMAD
            <v-btn icon @click="open('ahmed')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Ahmed is a senior studying Computer Engineering while minoring in
            Computer Science at CSU. Due to an interest in both computers and
            cars, the combination of the two within self driving vehicles such
            as those developed by Tesla led Ahmed to become interested in
            Maching Learning. Outside of the classroom, Ahmed enjoys watching
            and playing soccer but more importantly, caring for his family.
          </p>
        </div>
        <div class="column2">
          <img src="@/assets/fletcher.png" class="imageCrop" />
          <div class="nameHeader">
            FLETCHER OUREN
            <v-btn icon @click="open('fletcher')">
              <v-icon size="24px"> mdi-linkedin </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Fletcher is a senior earning a second degree in Computer engineering
            after earning an international business degree in 2015. He decided
            that he needed a more technical background to accomplish his goals.
            Feltcher hopes to employ cutting edge technology to help solve
            society’s most pressing issues such as climate change and renewable
            energy management. Apart from computer related studies, you can find
            Fletcher riding bikes, hiking, or writing short stories.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="column2">
          <div class="spacing">ADVISING PROFESSOR</div>
          <img src="@/assets/sudeep.jpg" class="imageCrop" />
          <div class="nameHeader">
            DR. SUDEEP PASRICHA
            <v-btn icon @click="open('sudeep')">
              <v-icon size="24px"> mdi-web-box </v-icon>
            </v-btn>
          </div>
          <p class="paragraph">
            Sudeep Pasricha is a Walter Scott Jr. College of Engineering
            Professor in the Department of Electrical and Computer Engineering,
            the Department of Computer Science, and the Department of Systems
            Engineering at Colorado State University. He is Director of the
            Embedded, High Performance, and Intelligent Computing (EPIC)
            Laboratory and the Chair of Computer Engineering. Prof. Pasricha’s
            research broadly focuses on software algorithms, hardware
            architectures, and hardware-software co-design for energy-efficient,
            fault-tolerant, real-time, and secure computing.
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
        window.open('https://www.linkedin.com/in/fouren/', '_blank')
      }
      if (name == 'ahmed') {
        window.open('https://www.linkedin.com/in/ahmedmohammad89', '_blank')
      }
      if (name == 'isaac') {
        window.open('https://www.linkedin.com/in/isaac-jacobson/', '_blank')
      }
      if (name == 'sudeep') {
        window.open('https://www.engr.colostate.edu/~sudeep/', '_blank')
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
.mainContainer {
  padding: 2rem 0.75rem 10rem 0.75rem;
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
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45rem;
}
.column2 {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 47rem;
}
.imageCrop {
  width: inherit; /* width of container */
  height: 30rem; /* height of container */
  width: 20rem;
  object-fit: cover;
  object-position: 50% 10%;
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
  width: 25rem;
  padding-top: 0.5rem;
  font-size: 1rem;
  text-align: left;
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
.spacing {
  margin-bottom: 2rem;
}
</style>
