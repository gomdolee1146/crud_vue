<template>
  <nav class="nav">
    <div class="nav__top">
      <span></span>
      <p class="txt_body1">{{ '곰도뤼의 캘린더' }}</p>
      <button class="nav__btn"></button>
    </div>

    <div class="nav__mid">
      <div class="nav__thumb">
        <img src="" />
      </div>
      <div class="nav__user">
        <p class="txt_body1">{{ '김곰돌' }}</p>
        <span class="txt_caption">{{ 'gomdolee@gom.dol' }}</span>
      </div>
    </div>

    <div class="nav__list_wrap">
      <ul class="nav__list">
        <li class="nav__lst" v-for="(menu, index) in navMenuList" :key="index">
          <div class="nav__box" @click="toGoPage(menu.link)">
            <i class="nav__ico" :class="menu.icon"></i>
            <div class="nav__text txt_btn_small">
              {{ menu.txt }}
              <span class="nav__badge-count txt_caption">24</span>
            </div>
            <i class="nav__ico ico-chevron"></i>
          </div>
        </li>
      </ul>
    </div>

    <div class="nav__btm">
      <button v-for="(menu, index) in navFooterList" :key="index" @click="toGoPage(menu.link)">
        <i class="nav__ico" :class="menu.icon"></i>
        <span>{{ menu.txt }}</span>
      </button>
    </div>
    <headerComponent></headerComponent>
  </nav>
</template>

<script>
import navMenuList from '@/data/layouts/navMenuList';
import navFooterList from '@/data/layouts/navFooterList';

import headerComponent from '@/components/layouts/HeaderComponent.vue';

export default {
  name: 'SidePanel',
  components:{headerComponent},
  data() {
    return {
      navMenuList: navMenuList,
      navFooterList: navFooterList,
    };
  },

  methods: {
    toGoPage(link) {
      this.$router.push({
        path: link
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layouts/SidePanel.scss';
</style>
