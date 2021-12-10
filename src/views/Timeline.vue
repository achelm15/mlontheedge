<template>
  <div class="container">
    <div class="titleText">TIMELINE</div>
    <div class="mainContainer">
      <div class="row">
        <div class="headerDate">Date</div>
        <div class="headerItem">Item</div>
        <div class="headerStatus">Status</div>
      </div>
      <div class="row" v-for="item in list" :key="item">
        <div class="headerDate">{{ item.date }}</div>
        <div class="headerItem">{{ item.item }}</div>
        <div
          :class="
            item.status === 'Completed'
              ? 'headerStatusCompleted'
              : item.status === 'In Progress'
              ? 'headerStatusInProgress'
              : 'headerStatusIncomplete'
          "
        >
          {{ item.status }}
        </div>
      </div>
    </div>
    <div class="end">
      <p class="paragraph">Last Updated 10/29/2021</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      headers: ['Date', 'Item', 'Status'],
      list: [
        {
          date: '9/07/2021',
          item: 'Research and Test Image Classification Models',
          status: 'Completed'
        },
        {
          date: '9/15/2021',
          item: 'Publish Initial Website',
          status: 'Completed'
        },
        {
          date: '9/17/2021',
          item: 'Outline Initial Project Plan',
          status: 'Completed'
        },
        {
          date: '10/15/2021',
          item: 'Research and Test Object Detection Models on Video',
          status: 'Completed'
        },
        {
          date: '11/15/2021',
          item: 'Begin LPCV Challenge with Multiple Models',
          status: 'Completed'
        },
        {
          date: '12/15/2021',
          item: 'Evaluate and Acquire Edge Devices for Deployment',
          status: 'Completed'
        },
        {
          date: '2/15/2021',
          item: 'Research Edge Model Deployment Methods',
          status: 'In Progress'
        },
        {
          date: '2/15/2021',
          item: 'Optimize Model for Edge Devices',
          status: 'In Progress'
        },
        {
          date: '3/15/2021',
          item: 'Attempt Controlled On-Vehicle Video Processing',
          status: 'Incomplete'
        },
        {
          date: '4/15/2021',
          item: 'Attempt Uncontroled On-Vehicle Video Processing',
          status: 'Incomplete'
        },
        {
          date: '5/05/2021',
          item: 'Finish Final Report',
          status: 'Incomplete'
        }
      ]
    }
  },
  methods: {}
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
  text-align: center;
  align-content: center;
  justify-content: center;
  width: inherit;
  background-color: white;
  padding-top: 3rem;
  font-family: Titillium;
  font-size: 2rem;
  padding-bottom: 6rem;
}
.row {
  width: 90%;
  display: flex;
  flex-direction: row;
  border-bottom: 0.1rem solid #1e4d2b;
  padding: 1rem 0rem 1rem 0rem;
}
.headerDate {
  font-size: 1rem;
  width: 20%;
}
.headerItem {
  font-size: 1rem;
  width: 60%;
  border-right: 0.1rem solid #1e4d2b;
  border-left: 0.1rem solid #1e4d2b;
}
.headerStatus {
  font-size: 1rem;
  width: 20%;
}
.headerStatusCompleted {
  color: #1e4d2b;
  font-size: 1rem;
  width: 20%;
}
.headerStatusInProgress {
  color: #999558;
  font-size: 1rem;
  width: 20%;
}
.headerStatusIncomplete {
  color: #cc5430;
  font-size: 1rem;
  width: 20%;
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
