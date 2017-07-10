<template>
  <div id="app">
   <ul>
     <li class="item" v-for="item in items" :key="item">
       <h3>id:{{item.id}}</h3>
       <p>age:{{item.age}}</p>
     </li>
   </ul>
  </div>
</template>

<script>
import Hello from './components/Hello'
import {LinkedList} from './lib/linkedList.js'
export default {
  name: 'app',
  data(){
    return {
      items:[],
      id: 0,
      length: 0
    }
  },
  created(){
    var itemList = new LinkedList()
    for(var i=0;i<50;i++){
        itemList.append(this.id);
        this.id++;
        this.length++;
    }
    var itemsList = itemList.getAllItem()
    this.items = itemsList;

    setInterval(function(){
      var position = Math.floor(Math.random()*(this.length+1))
      itemsList.forEach((item)=>{
        item.age++
      })
      console.log(position)
      itemList.insert(position,this.id)  
      itemList.removeFirstAgeTen() 
      itemsList = itemList.getAllItem()
      this.items = itemsList;
      this.id++;
      this.length = itemsList.length;
    }.bind(this),1000)
  },

  components: {
  }
}
</script>

<style>

.item{
  list-style:none;
  display:inline-block;
  border:1px solid #ccc;
  height:80;
  width:100px;
  text-align:center;
}
</style>
