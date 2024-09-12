<template>
  <div class="card">
    <h4 class="card__title txt_headline6" v-if="title">{{ title }}</h4>
    <div class="card__list_wrap">
      <transition-group tag="ul" name="fade" class="card__list">
        <li
          class="card__lst txt_body2"
          v-for="(data, idx) in contentList"
          :key="idx"
          @click="goToDetail(idx)"
        >
          <div class="card__box">
            <div class="card__content_title">{{ data.title }}</div>
            <div class="card__content_date">{{ data.date }}</div>
            <div class="card__content_check" @click.stop="">
              <span class="toggle">
                <input
                  class="toggle__input"
                  type="checkbox"
                  :value="data.isDone"
                  v-model="data.isDone"
                  @change="sortList($event, idx)"
                />
                <label class="toggle__label">
                  <i class="toggle__label_toggle"></i>
                </label>
              </span>
            </div>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListCard',
  data() {
    return {
      todayDate: Date.now(),
    };
  },
  props: {
    title: { type: String, default: '' },
    isShowAll: { type: Boolean, default: true },
    updateIdx: { type: Number, default: null },
    todoList: { type: Object, default: () => {} },
  },
  methods: {
    sortList(e, idx) {
      this.$emit('updateList', idx, e.target.value);
    },
    goToDetail(idx) {
      this.$router.push({
        name: 'Detail',
        params: {
          contentId: idx,
        },
      });
    },
  },
  computed: {
    contentList() {
      let contentList = this.todoList;
      if (this.isShowAll === false) {
        return this.$_.filter(contentList, (i) => {
          let resultDate = new Date(i.date).toDateString();
          let todaysDate = new Date().toDateString();
          return resultDate === todaysDate;
        });
      }
      return contentList;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/todoListCard.scss';
</style>
