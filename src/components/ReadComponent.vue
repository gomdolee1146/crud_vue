<template>
  <div>
    <table>
      <tr>
        <th>Id</th>
        <th>날짜</th>
        <th>제목</th>
        <th>타이틀</th>
        <th>내용</th>
      </tr>
      <tr v-for="(data, idx) in datas" :key="data" @click="detail(idx)">
        <td>{{ data.id }}</td>
        <td>{{ data.date }}</td>
        <td>{{ data.title }}</td>
        <td>{{ data.writer }}</td>
        <td>{{ data.content }}</td>
      </tr>
    </table>
    <button @click="write">글쓰기</button>
  </div>
</template>

<script>
import data from '@/data'
export default {
  name: 'ReadComponent',
  data(){
    return {
      datas: data
    }
  },
  methods: {
    write(){
      this.$router.push({
        path:'create'
      })
    },
    detail(idx) {
      this.$router.push({
        name: 'Detail',
        params: {
          contentId: idx
        }
      })
      console.log(idx)
    }
  }
}
</script>

<style>

</style>