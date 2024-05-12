<template>
  <TodoListCard
    :isShowAll="false"
    :title="`오늘 해야 할 일 목록이예요!`"
    @update-list="updateList"
    :update-idx="updateIdx"
  />
  <TodoListCard
    @update-list="updateList"
    :update-idx="updateIdx"
  />
</template>

<script>
import TodoListCard from '@/components/card/TodoListCard.vue';
export default {
  name: 'ReadView',
  data() {
    return {
      updateIdx: null,
    };
  },
  components: { TodoListCard },
  methods: {
    updateList(idx) {
      this.updateIdx = idx;
    },
  },
  mounted() {},
};
</script>
