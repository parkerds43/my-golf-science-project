import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: require('./dogs.html'),

  props: {
    breed: String,
    age: String,
    owner: String
  }
})
export default class DogsComponent extends Vue {
  // constructor() {
  //   super();
  // }

  // replace below lines in dogs.vue when this works
  //<template src="./dogs.html"></template>
  //<script lang="ts" src="./dogs.ts"></script>
  // <style src="./dogs.scss"></style>
  //name = 'DogsComponent';
  breed!: string;
  age!: string;
  owner!: string;

  description: string = '';

  mounted() {
    this.description = 'I have a ' + this.breed + '. It is ' + this.age + ' years old.';
  }
}
