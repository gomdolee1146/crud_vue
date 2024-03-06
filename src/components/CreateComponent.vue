<template>
  <div>
    <input type="text" placeholder="글쓴이" v-model="writer" />
    <input type="text" placeholder="제목" v-model="title" />
    <textarea placeholder="내용" v-model="content"></textarea>

    <button @click="write">작성</button>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name: 'CreateComponent',
  data(){
    return {
      datas: data,
      writer: '',
      title: '',
      content: ''
    }
  },
  methods:{
    write(){
      this.datas.push({
        writer: this.writer,
        title: this.title,
        content: this.content
      })
      this.$router.push({
        path: '/read'
      })
    }
  }
}
</script>

<style>

</style>