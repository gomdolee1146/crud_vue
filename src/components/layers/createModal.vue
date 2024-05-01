<template>
  <div class="create_modal">
    <div class="g_dimmed" @click="toHideCreateModal"></div>
    <div class="g_modal">
      <div class="modal__wrap">
        <h4 class="modal__title txt_headline6">{{ createDate }}</h4>
        <div class="form pc__scroll">
          <div class="form__row">
            <div class="form__title">
              <i></i><span class="txt_subtitle2">카테고리</span>
            </div>
            <div class="form__content">
              <div class="form__input" @click="toggleSlctBox">
                <p>선택하세요</p>
                <ul class="form__slct_list" v-if="isShowSlctBox">
                  <li
                    class="form__slct_lst"
                    v-for="(category, idx) in categoryList"
                    :key="idx"
                  >
                    <div class="form__slct_box">
                      <input type="radio" :value="category" v-model="categoryName" @change="getCategoryOption(category)" />
                      <label>{{ category }}</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="form__row">
            <div class="form__title"><i></i><span class="txt_subtitle2">제목</span></div>
            <div class="form__content">
              <input
                type="text"
                placeholder="제목"
                v-model="title"
                class="form__input txt-body1"
              />
            </div>
          </div>
          <div class="form__row">
            <div class="form__title"><i></i><span class="txt_subtitle2">내용</span></div>
          </div>
          <div class="form__row">
            <textarea
              placeholder="내용"
              v-model="content"
              class="form__textarea txt-body1"
            ></textarea>
          </div>
          <div class="form__row">
            ㅎㅎ
          </div>
        </div>
        <div class="form__btn_wrap">
          <button class="form__btn form__btn-done txt_btn_large" @click="createContent">
            {{ this.index !== undefined ? '수정' : '작성' }}
          </button>
          <button class="form__btn form__btn-cancel txt_btn-large">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data';
import categoryList from '@/data/categoryList';

export default {
  name: 'CreateModal',
  data() {
    var index = this.$route.params.contentId;
    return {
      data: data,
      categoryList: categoryList,
      createDate: this.createData.date,

      isShowSlctBox: false,
      categoryName: '',

      index: index,
      title: index && index !== undefined ? data[index].title : '',
      content: index && index !== undefined ? data[index].content : '',
      category: index && index !== undefined ? data[index].category : '',
      // color: index && index !== undefined ? data[index].color : '',
      isDone: index && index !== undefined ? data[index].isDone : '',
    };
  },
  props: {
    id: { type: String, default: '' },
    createData: { type: Object, default: () => {} },
    isShow: { type: Boolean, default: () => {} },
  },
  methods: {
    toHideCreateModal() {
      this.$emit('hideModal', false);
    },
    toggleSlctBox() {
      this.isShowSlctBox = !this.isShowSlctBox ;
    },
    getCategoryOption(){


      this.toggleSlctBox();
    },
    writeContent() {
      this.data.push({
        id: this.id,
        date: this.createDate,
        title: this.title,
        content: this.content,
        category: this.categoryName,
        // color: this.color,
        isDone: this.isDone,
      });
      this.$router.push({
        path: '/',
      });
    },
    updateContent() {
      data[this.index].title = this.title;
      data[this.index].content = this.content;
      data[this.index].category = this.categoryName;
      // data[this.index].color = this.color;
      data[this.index].isDone = this.isDone;
      this.$router.push({
        path: '/',
      });
    },
    createContent() {
      if (this.index && this.index !== undefined) this.updateContent();
      else this.writeContent();
    },
  },
  mounted() {
    console.log(this.categoryList);
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/modalCommon.scss';
@import '@/assets/scss/components/formCommon.scss';
</style>
