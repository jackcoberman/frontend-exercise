<template>
  <div class="quiz-component">
    <h1>{{questions[currentQuestion].text}}</h1>
    <v-row>
    <v-col v-for="option in currentOptions" :key="option">
      <v-btn class="optn-btn">{{option}}</v-btn>
    </v-col>
    </v-row>
    <pre>{{ JSON.stringify(questions, null, 2) }}</pre>
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
      currentQuestion: 0,
      currentOptions: Array,
      responses: Array
    };
  },
  created () {
    this.currentOptions = this.questions[this.currentQuestion].answers;
  }
};
</script>
