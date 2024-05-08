<template>
  <VCalendar expanded @dayclick="showModal($event)" :attributes="attributes" />
  <CreateModal
    v-if="isShow"
    :createData="createData"
    :isShow="isShow"
    @hideModal="hideModal"
  ></CreateModal>
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
      this.isShow = !this.isShow;
      this.createData.date = e.id;
      this.createData.id = e.date;
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

<style lang="scss" scoped>
@import '@/assets/scss/components/calendar.scss';
</style>
