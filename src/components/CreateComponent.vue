<template>
  <div>
    <input
      type="text"
      placeholder="글쓴이"
      v-model="writer"
    />
    <input type="text" placeholder="제목" v-model="title" />
    <textarea placeholder="내용" v-model="content"></textarea>
    <button @click="done">{{ this.index !== undefined ? '수정' : '작성' }}</button>
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
  methods: {
    write() {
      this.data.push({
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
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/formCommon.scss';
</style>
