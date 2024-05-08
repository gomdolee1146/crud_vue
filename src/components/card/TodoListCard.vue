<template>
  <div class="card">
    <h4 class="card__title txt_headline6">{{ title }}</h4>
    <ul class="card__list_top">
      <li class="card__lst txt_subtitle1">
        <div class="card__content_date">날짜</div>
        <div class="card__content_title">제목</div>
        <div class="card__content_box">컨텐츠</div>
        <div class="card__content_check">완료</div>
      </li>
    </ul>
    <!-- <transition-group tag="ul" name="fade" class="card__list"> -->
    <ul class="card__list">
      <li class="card__lst txt_body2" v-for="(data, idx) in contentList" :key="idx">
        <div class="card__content_date">{{ data.date }}</div>
        <div class="card__content_title">{{ data.title }}</div>
        <div class="card__content_box">{{ data.content }}</div>
        <div class="card__content_check">
          <span class="toggle" @click="sortList">
            <input class="toggle__input" type="checkbox" :checked="data.isDone" />
            <label class="toggle__label">
              <i class="toggle__label_toggle"></i>
            </label>
          </span>
        </div>
      </li>
    </ul>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import data from '@/data';

export default {
  name: 'TodoListCard',
  data() {
    return {
      datas: data,
      todayDate: Date.now(),
      contentList: [],
    };
  },
  props: {
    title: { type: String, default: '남아있는 해야 일 목록 이예요!' },
    isShowAll: { type: Boolean, default: true },
  },
  methods: {
    getList() {
      this.contentList = this.$_.cloneDeep(this.datas);

      if (this.isShowAll === false) {
        this.$_.remove(this.contentList, (i) => {
          return i.id.toString() !== new Date().toString();
        });
      } else {
        this.contentList = this.datas;
      }
    },
    sortList() {
      let a = [1, 2, 3, 4, 5]
      a = this.$_.shuffle(a)
      console.log(a)
      // console.log(this.contentList);
      // this.contentList = this.$_.sortBy(this.contentList, ['isDone', 'date']);
      // console.log(this.contentList);
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/todoListCard.scss';
</style>
