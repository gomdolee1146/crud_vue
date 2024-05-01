<template>
  <div class="card">
    <h4 class="card__title">{{ title }}</h4>
    <ul class="card__list">
      <li class="card__lst"></li>
    </ul>
  </div>
</template>

<script>
import data from '@/data';

export default {
  name: 'TodoListCard',
  data() {
    return {
      datas: data
    }
  },
  props:{
    title: {type:String, default: 'gd'},
    // todoList: {}
  }
}
</script>

<style>

</style>