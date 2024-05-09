<template>
  <VCalendar
    expanded
    @dayclick="showModal($event)"
    :attributes="attributes"
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
import CreateModal from '@/components/layers/createModal.vue';
import data from '@/data/';

export default {
  name: 'CalendarWrap',
  components: { CreateModal },
  data() {
    return {
      datas: data,
      isShow: false,
      date: '',
      dateList: [],
      createData: {
        id: '',
        date: '',
      },
      attributes: [
        {
          dot: true,
          dates: [],
        },
      ],
    };
  },
  methods: {
    showModal(e) {
      this.createData.date = e.id;
      this.createData.id = e.date;
      this.$nextTick(() => {
        this.isShow = !this.isShow;
      });
    },
    hideModal(data) {
      this.isShow = data;
    },
    getDateList() {
      this.datas.forEach((el) => {
        this.attributes[0].dates.push(el.date);
      });
    },
  },
  mounted() {
    this.getDateList();
  },
};
</script>

<style>
.vc-container {
  z-index: 0;
}
.vc-header {
  height: 60px;
}
.vc-weeks {
  display: grid;
  grid-template-rows: 1fr repeat(6, 2fr);
}
.vc-weekdays {
  align-items: flex-end;
}
.vc-weekday {
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.vc-weekday:last-child {
  border-right: 0 none;
}
.vc-day {
  display: block;
  min-height: 60px; 
  border-bottom: 1px solid #efefef;
  border-right: 1px solid #efefef;
}
.vc-day:last-child {
  border-right: 0 none;
}
.vc-week:last-child .vc-day {
  border-bottom: 0 none;
} 
.vc-dots {
  width: 100%;
  margin-bottom: 12px;
  overflow: hidden;
}
</style>
