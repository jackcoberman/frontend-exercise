<template>
  <div class="quiz-container" align="center">
    <div v-if="hasRemainingQuestion" class="quiz-component">
      <h1 class="question">{{question.text}}</h1>
      <v-row class="answer-row">
        <v-col v-for="option in currentOptions" :key="option">
          <v-btn class="optn-btn" @click="setResponse(option)">{{option}}</v-btn>
        </v-col>
      </v-row>
      <v-row class="next-row">
        <v-btn class="next-btn" @click="next">Next</v-btn>
      </v-row>
    </div>
    <div v-else>
      <h1 @click="displayStuff">Results</h1>
      <v-row class="results-row" v-for="(response,index) in responses" :key="response">
        <div>{{index+1}}) {{questions[index].text}}</div>
        <br>
        <div>{{response}}</div>
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
      if (Boolean(this.responses[this.currentIndex] == null)) {
        this.responses.push(option);
        console.log(this.responses);
      } else {
        console.log(option);
        console.log(this.currentIndex);
        this.responses[this.currentIndex] = option;
        console.log(this.responses[this.currentIndex]);
      }
    },
    next () {
      if (Boolean(this.responses[this.currentIndex] == null)) return;
      this.currentIndex++;
    },
    displayStuff () {
      console.log(this.responses.length);
      console.log(this.responses[0]);
      console.log(this.responses[1]);
      console.log(this.responses[2]);
      console.log(this.responses.length); 
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
      console.log(Boolean(this.responses[this.currentIndex]));
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
  color: rgb(145, 145, 138);
}
.answer-row {
  padding-top: 3em;
}
.next-row {
}
.results-row {
  margin-top: 2em;
}
.optn-btn {
  text-transform: none;
}
.next-btn {
  text-transform: none;
}
</style>