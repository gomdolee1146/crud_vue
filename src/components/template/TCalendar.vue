<!-- <script setup>
const { mapCurrent } = userSecreens({xs: '0px', sm: '640px', md: '768px', lg: '1024px'})
</script> -->
<template>
  <div>
    <VCalendar
      expanded
      @dayclick="test($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'TCalendar',
  data() {
    return {
      test(e){
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/calendar.scss';
</style>