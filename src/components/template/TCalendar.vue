<!-- <script setup>
const { mapCurrent } = userSecreens({xs: '0px', sm: '640px', md: '768px', lg: '1024px'})
</script> -->
<template>
  <div>
    <VCalendar expanded @dayclick="test($event)" />
    <CreateModal v-if="isShow" :createData="createData"></CreateModal>
  </div>
</template>

<script>
import CreateModal from '@/components/layers/createModal.vue';

export default {
  name: 'TCalendar',
  components: { CreateModal },
  data() {
    return {
      isShow: false,
      date: '',
      createData: {
        isShow: this.isShow,
        date: '',
      },
    };
  },
  methods: {
    test(e) {
      this.isShow = !this.isShow;
      this.createData.date = e.id;
      console.log(e)
    },
   
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/calendar.scss';
</style>
