var app = new Vue({
  el:'#app',
  data: {
    newItem:'',
    todos: []
  },
  methods: {
    addItem: function(event){
      //alert()
      if(this.newItem == '')return alert("入力してください")
      var todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    },
    deleteItem: function(index){
      this.todos.splice(index,1)
    }
  }
})