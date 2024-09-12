<template>
  <TodoListCard :isShowAll="false" :todo-list="data" @update-list="updateList" />
  <button @click="showModal()" class="btn-main">할 일 추가</button>
  <TodoListCard
    :todo-list="data"
    @update-list="updateList"
    :title="`남아있는 해야 일 목록 이예요!`"
  />

  <transition name="fade-in">
    <CreateModal
      v-if="isShow"
      :createData="createData"
      :isShow="isShow"
      @hideModal="hideModal"
    ></CreateModal>
  </transition>
</template>

<script>
import data from '@/data';
import TodoListCard from '@/components/card/TodoListCard.vue';
import CreateModal from '@/components/layers/createModal.vue';

export default {
  name: 'ReadView',
  data() {
    return {
      data: data,
      updateIdx: null,
      isShow: false,
      createData: {
        id: '',
        date: '',
      },
    };
  },
  components: { TodoListCard, CreateModal },
  methods: {
    updateList(idx, value) {
      this.data[idx].isDone = value;
    },
    showModal() {
      this.$nextTick(() => {
        this.isShow = !this.isShow;
      });
    },
    hideModal(data) {
      this.isShow = data;
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-main {
  display: inline-block;
  position: absolute;
  right: 16px;
  height: 36px;
  line-height: 36px;
  padding: 0 12px;
  margin-left: auto;
  border-radius: 8px;
  background: $brand;
  color: $text-gray4;
}
</style>
