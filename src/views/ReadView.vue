<template>
  <TodoListCard :isShowAll="false" :title="`오늘 해야 할 일 목록이예요!`" />
  <TodoListCard />
</template>

<script>
import TodoListCard from '@/components/card/TodoListCard.vue';
export default {
  name: 'ReadView',
  components: { TodoListCard },
};
</script>
