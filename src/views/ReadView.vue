<template>
  <TodoListCard />
  <ReadComponent />
</template>

<script>
import ReadComponent from '@/components/ReadComponent';
import TodoListCard from '@/components/card/TodoListCard.vue';
export default {
  name: 'ReadView',
  components: { ReadComponent, TodoListCard },
};
</script>
