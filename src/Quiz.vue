<template>
  <div class="quiz-container" align="center">
    <div v-if="hasRemainingQuestion" class="quiz-component">
      <h1 class="question">{{question.text}}</h1>
      <v-row class="answer-row">
        <v-col v-for="option in currentOptions" :key="option">
          <v-btn v-if="isSelected(option)" class="optn-btn-selected" @click="setResponse(option)">
            <span class="optn-text">{{option}}</span>
          </v-btn>
          <v-btn v-else class="optn-btn" @click="setResponse(option)">
            <span class="optn-text">{{option}}</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="next-row">
        <v-col class="next-col" align="end">
          <v-btn class="next-btn" :class="{'next-btn-can-next': canNext}" @click="next">
            <span class="next-btn-text">Next</span>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <h1>Results</h1>
      <v-row class="results-row" v-for="(response,index) in responses" :key="response">
        <v-col>
            <div>{{index+1}}) {{questions[index].text}}</div>
        </v-col>
        <v-col>
          <div>{{response}}</div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      responses: [],
    };
  },
  methods: {
    setResponse (option) {
      if (this.responses[this.currentIndex] == undefined) {
        this.responses.push(option);
      } else if (this.responses[this.currentIndex] == option) {
        this.responses.pop();
      } else {
        this.responses.pop();
        this.responses.push(option);
      }
    },
    next () {
      if (this.responses[this.currentIndex] == undefined) return;
      this.currentIndex++;
    },
    isSelected (option) {
      return this.responses[this.currentIndex] == option;
    }
  },
  computed: {
    question () {
      return this.questions[this.currentIndex];
    },
    currentOptions () {
      return this.questions[this.currentIndex].answers;
    },
    canNext () {
      return Boolean(this.responses[this.currentIndex]);
    },
    hasRemainingQuestion () {
      return this.currentIndex < this.questions.length;
    }
  }
};
</script>

<style scoped>
.quiz-container {
  max-width: 50%;
  padding-left: 3em;
}
.quiz-component {
  padding-top: 10em;
}
.question {
  color: #48606E;
}
.answer-row {
  padding-top: 2em;
  width: 50%;
}
.results-row {
  margin-top: 2em;
}
.optn-btn {
  text-transform: none;
  background-color: #22282B !important;
}
.optn-btn-selected {
  text-transform: none;
  background-color: #4e5a61 !important;
}
.optn-text {
  font-size: 20px;
  color: white;
}
.next-col {
  padding-right: 10em;
  padding-top: 2em;
}
.next-btn {
  text-transform: none;
  background-color: #BFD0D8 !important;
}
.next-btn-can-next {
  text-transform: none;
  background-color: #84A5B7 !important;
}
.next-btn-text {
  color: white;
}
</style>