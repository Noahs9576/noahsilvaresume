<template>
  <h1>{{ title }}</h1>
  <div class="prompt-section">
    <h2>Prompt</h2>
    <p class="prompt"> {{ randomPrompt }}  </p>
  </div>

  <div class="user-input">
    <h2>Type Here</h2>
    <input :disabled="disabled" type="text" v-model="userInput.text">
    <div class="example"> 
      <p style="color: green;">{{ displayInput.correctInput.text }} </p> 
      <p style="color: red;"> {{ displayInput.wrongInput.text }}</p>
    </div>
  </div>

  <div class="wpm">
    <h2>Words Per Minute</h2>
    <p> Not accurate yet </p>
    <p>{{ wordsPerMinute }}</p>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: 'Type Speed Test',
      disabled: false,
      activeColor: 'red',
      prompt: '',
      userInput: {text: '', correct: true},
      correctInput: {text: '', correct: true},
      wrongInput: {text: '', correct: false},
      prompts: {
        1: 'The quick brown fox jumps over the lazy dog.',
        2: 'The five boxing wizards jump quickly.',
        3: 'Yeat is the best rapper of all time.',
        4: 'Choosing to do nothing is still a choice, after all.',
        5: 'The best way to predict the future is to create it.',
        6: 'The secret code they created made no sense, even to them.',
        7: 'The shooter says goodbye to his love.',
        8: 'The lake is a long way from here.',
        9: 'The mysterious diary records the voice.',
        10: 'The sky is clear; the stars are twinkling.',
        11: 'The waves were crashing on the shore; it was a lovely sight.',
        12: 'The stranger officiates the meal.',
        13: 'The old apple revels in its authority.',
        14: 'The shooter says goodbye to his love.',
        15: 'The lake is a long way from here.',
      },
    }
  },
  methods: {
    checkInput(currChar){
      while (currChar < this.prompt.length){
        if (this.userInput.text === this.prompt.substring(0, currChar + 1)) {
          currChar++;
          this.wrongInput.text = '';
          this.correctInput.text = this.userInput.text;
        } else {
          console.log(this.correctInput.text.length)
          this.wrongInput.text = this.userInput.text.substring(this.correctInput.text.length, this.userInput.text.length);

        }
        return {correctInput: this.correctInput, wrongInput: this.wrongInput}
      }
    },
    wordsPerMinute(){
      var words = this.userInput.text.split(' ').length;
      var minutes = 1;
      var wpm = words / minutes;
      return wpm;
    }


  },
  computed: {
    randomPrompt() {
      let keys = Object.keys(this.prompts)
      let index = keys[Math.floor(Math.random() * keys.length)]
      this.prompt = this.prompts[index]
      return this.prompt
    },
    displayInput() {
      var currChar = this.userInput.text.length -1;
      var checked = this.checkInput(currChar)
      console.log('cor: ' + checked.correctInput.text)
      console.log('wrong: ' + checked.wrongInput.text)
      console.log('all: ' + this.userInput.text)
      return checked
    },
    showWPM() {
      return this.wordsPerMinute()
    }
  },
  created(){

  }
}

</script>


<style scoped>
  .example{
    display: flex;
    flex-direction: row;
  }

</style>
