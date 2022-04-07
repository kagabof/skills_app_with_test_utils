<template>
  <div class="hello">

    <form @submit.prevent="addSkill">
    <input id="skill_input" v-model="skill" placeholder="Add a skill">
    </form> 
    <ul>
      <li v-for="(data, index) in skills" :key='index' class="skill">
        {{ index + 1 }}. {{ data.skill }}
        <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SkillsComp',
  data() {
    return {
      name: "English",
      btnState: true,
      skill: '',
      skills: [
        { "skill": "Vue.js" },
        { "skill": "ReactJS" }
      ],
      showAlert: true,
      message: '......'
    }
  },
  methods: {
    addSkill() {
      this.skill && this.skills.push({skill: this.skill})
      this.skill = '';
    },
    remove(id) {
      this.skills.splice(id,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

</style>
