<template>
  <div class="detail">
    <div class="detail__wrap">
      <div class="detail__title">
        <h2 class="txt_subtitle1">제목</h2>
        <h4 class="detail__title_box txt_headline6">{{ data.title }}</h4>
      </div>
      <div class="detail__content txt_body1">{{ data.content }}</div>
    </div>
    <div class="detail__btn_wrap">
      <button class="txt_btn_large" @click="updateData">수정</button>
      <button class="txt_btn_large" @click="deleteData">삭제</button>
      <button class="detail__btn-list txt_btn_large" @click="goToMain">목록으로</button>
    </div>
  </div>
</template>

<script>
import data from '@/data';

export default {
  name: 'DetailComponent',
  data() {
    const idx = this.$route.params.contentId;
    return {
      data: data[idx],
      index: idx,
    };
  },
  methods: {
    deleteData() {
      data.splice(this.index, 1);
      this.goToMain();
    },

    updateData() {
      this.$router.push({
        name: 'Create',
        params: {
          contentId: this.index,
        },
      });
    },
    goToMain() {
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/detailComponents.scss';
</style>
