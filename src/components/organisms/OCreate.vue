<template>
  <div class="form">
    <div class="form__row">
      <div class="form__title">
        <i></i><span class="txt_subtitle2">제목</span>
      </div>
      <div class="form__content">
        <input type="text" placeholder="제목" v-model="title" class="form__input txt-body1" />
      </div>
    </div>
    <div class="form__row">
      <div class="form__title">
        <i></i><span class="txt_subtitle2">글쓴이</span>
      </div>
      <div class="form__content">
        <input type="text" placeholder="글쓴이" v-model="writer" class="form__input txt-body1" />
      </div>
    </div>
    <div class="form__row">
      <div class="form__title">
        <i></i><span class="txt_subtitle2">내용</span>
      </div>
    </div>
    <div class="form__row">
      <textarea placeholder="내용" v-model="content" class="form__textarea txt-body1"></textarea>
    </div>
    <div class="form__btn_wrap">
      <button class="form__btn txt_btn_large" @click="done">
        {{ this.index !== undefined ? '수정' : '작성' }}
      </button>
    </div>
  </div>
</template>

<script>
import data from '@/data';

export default {
  name: 'CreateComponent',
  data() {
    var index = this.$route.params.contentId;

    return {
      data: data,
      index: index,
      writer: index && index !== undefined ? data[index].writer : '',
      title: index && index !== undefined ? data[index].title : '',
      content: index && index !== undefined ? data[index].content : '',
    };
  },
  props:{
    id: {type: String, default:''},
  },
  methods: {
    write() {
      this.data.push({
        id: this.id,
        writer: this.writer,
        title: this.title,
        content: this.content,
      });
      this.$router.push({
        path: '/',
      });
    },
    update() {
      data[this.index].writer = this.writer;
      data[this.index].title = this.title;
      data[this.index].content = this.content;
      this.$router.push({
        path: '/',
      });
    },
    done() {
      if (this.index && this.index !== undefined) this.update();
      else this.write();
    },
  },
  computed(){
    console.log(this.id)
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/formCommon.scss';
</style>
