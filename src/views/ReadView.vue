<template>
  <TodoListCard
    :isShowAll="false"
    :title="`오늘 해야 할 일 목록이예요!`"
    :todo-list="data"
    @update-list="updateList"
  />
  <TodoListCard :todo-list="data" @update-list="updateList" />
</template>

<script>
import data from '@/data';
import TodoListCard from '@/components/card/TodoListCard.vue';

export default {
  name: 'ReadView',
  data() {
    return {
      data: data,
      updateIdx: null,
    };
  },
  components: { TodoListCard },
  methods: {
    updateList(idx, value) {
      this.data[idx].isDone = value;
    },
  },
  mounted() {},
};
</script>
