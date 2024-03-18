<template>
  <div class="create_modal">
    <div class="g_dimmed" @click="console.log('gidl`')"></div>
    <div class="g_modal">
      <div class="modal__wrap">
        <h4 class="modal__title txt_headline6">{{ createDate }}</h4>
        <o-create :id="createDate" />
      </div>
    </div>
  </div>
</template>

<script>
import OCreate from '@/components/organisms/OCreate.vue';
export default {
  name: 'CreateModal',
  components: { OCreate },
  data() {
    return {
      createDate: this.createData.date
    };
  },
  props: {
    createData: { type: Object, default: () => {} },
  },
  methods: {
    // toHideCreateModal(){
    //   this.isShow = false
    //   this.$emit('toHideCreateModal', isShow)
    // }
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/modalCommon.scss';
</style>
