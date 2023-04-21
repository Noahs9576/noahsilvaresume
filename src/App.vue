<template>
  <h1>{{ title }}</h1>

  <h2>Add a new task</h2>

  <span>You have {{ allTasks }} {{ allTasks = 1 ? 'tasks' : 'task'}} </span>
  
  <div>
    <input 
    type="text" 
    v-model="newTask" 
    placeholder="Add a new task"
    >
    <button @click="addTask" :disabled="newTask.length < 1">Add Task</button>
  </div>

  <div v-if="newTask.length > 0">
    <h3>New task preview</h3>
    <p>{{ newTask }}</p>
  </div>

  <ul>
    <li v-for="(task, index) in latest" :key="task.id">
      {{ index + 1 }}.  {{ task.name }}

      <div v-if="task.finished">
        <button>Delete task</button>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  data() {
    return {
      count: 1,
      title: 'My To Do App',
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      if (this.newTask.length < 1) return
      fetch('/addTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        id: this.tasks.length + 1,
        name: this.newTask,
        finished: false,
        })
      })
      .then(res => res.json())
      .then(data => {
        this.tasks.push(data)
      })
      
      this.newTask = ''
    },
    removeTask(taskID) {
      this.tasks = this.tasks.filter(task => {
          return task.id !== taskID
      });
    },
    finishTask(task) {
      task.finished = !task.finished
    }
  },
  computed: {
    allTasks() {
        return this.tasks.length
    },
    latest() {
        return [...this.tasks].reverse()
    }
  },
  created(){
    fetch('/getTasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.tasks = data
    })
  }
}

</script>


<style scoped>

</style>
