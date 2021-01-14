<template>
<div class="app">
    <div class="box">
        <a-input v-model:value="text" @keyup.enter="addItem" style="width:400px;margin-right:4px"></a-input>
        <a-button @click="addItem">Add Item</a-button>
        <div>{{computedText}}</div>
    </div>
    <div class="list">
        <ul>
            <li v-for="item in list" :key="item.id" >
                <span style="margin-right:5px;" @click="update(item.id)" :class="item.done?'line':''">{{item.text}}</span>
                <a @click="removeItem(item.id)">X</a>
            </li>
        </ul>
    </div>
</div>
 
</template>

<script>
import { reactive, ref,computed } from 'vue'

export default {
  name: 'App',
  setup(){
    let text=ref('');
    // let computedText=ref('');
    let list=reactive([])
    let id=1;
    const computedText=computed(()=>{
        return text.value;
    })
    const addItem=()=>{
        list.push({
            id:++id,
            text:text.value,
            done:false,
        })
        text.value='';
    }
 
    const removeItem=(id)=>{
       
        const index=list.findIndex((item)=>{item.id ===id})
        list.splice(index,1)
    }
    const update=(id)=>{
        list.map(item=>{
            if(item.id===id){
               item.done=!item.done; //取反
            }
        })
    }
    return{
    addItem,
      text,
      list,
     computedText,
     removeItem,
     update
    }
  }
}
</script>
<style>
.app{
    width:70%;
    margin: 50px auto;
    
}


.list{
    margin-top:20px;
    text-align: left;

}
.line{
    text-decoration: line-through;
}
</style>
