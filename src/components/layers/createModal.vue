<template>
  <div class="create_modal">
    <transition name="fade">
      <div class="g_dimmed" @click="toHideCreateModal" v-if="isShow"></div>
    </transition>
    <div class="g_modal" v-if="isShowWrap">
      <div class="modal__wrap">
        <h4 class="modal__title txt_headline6">{{ createDate }}</h4>
        <div class="form pc__scroll">
          <div class="form__row">
            <div class="form__title">
              <i></i><span class="txt_subtitle2">카테고리</span>
            </div>
            <div class="form__content">
              <button class="form__btn-slct" @click="isShowCategory">
                {{ categoryName ? categoryName : '선택하세요' }}
              </button>
              <div class="form__slct_list" v-if="isShowCate">
                <span
                  class="form__slct_lst"
                  v-for="(category, idx) in categoryList"
                  :key="idx"
                  ref="formSlctLst"
                  @click="saveCategoryInfo(category)"
                >
                  {{ category }}
                </span>
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
        </div>
        <div class="form__btn_wrap">
          <button class="form__btn form__btn-done txt_btn_large" @click="createContent">
            {{ this.index !== undefined ? '수정' : '작성' }}
          </button>
          <button
            class="form__btn form__btn-cancel txt_btn-large"
            @click="toHideCreateModal"
          >
            취소
          </button>
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
      isShowCate: false,

      isShowWrap: false,
      isShowSlctBox: false,
      categoryName: '',

      index: index,
      title: index && index !== undefined ? data[index].title : '',
      content: index && index !== undefined ? data[index].content : '',
      category: index && index !== undefined ? data[index].category : '',
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
      this.isShowSlctBox = !this.isShowSlctBox;
    },
    writeContent() {
      this.data.push({
        id: this.id,
        date: this.createDate,
        title: this.title,
        content: this.content,
        category: this.categoryName,
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
      data[this.index].isDone = this.isDone;
      this.$router.push({
        path: '/',
      });
    },
    createContent() {
      if (this.index && this.index !== undefined) this.updateContent();
      else this.writeContent();
    },
    showModal() {
      if (this.isShow) {
        this.$nextTick(() => {
          this.isShowWrap = true;
        });
      }
    },
    isShowCategory() {
      this.isShowCate = !this.isShowCate;
    },
    saveCategoryInfo(category) {
      this.categoryName = category;
      this.isShowCate = false;
    },
  },
  mounted() {
    this.showModal();
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/modalCommon.scss';
@import '@/assets/scss/components/formCommon.scss';
</style>
