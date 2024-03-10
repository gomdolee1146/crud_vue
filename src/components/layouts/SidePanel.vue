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
          <i class="nav__ico" :class="menu.icon"></i>
          <div class="nav__text txt_btn_small">
            {{ menu.txt }}
            <span class="nav__badge-count txt_caption">24</span>
          </div>
          <i></i>
        </li>
      </ul>
    </div>

    <div class="nav__btm">
      <button v-for="(menu, index) in navFooterList" :key="index">
        <i class="nav__ico" :class="menu.icon"></i>
        <span>{{ menu.txt }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
import navMenuList from '@/data/layouts/navMenuList';
import navFooterList from '@/data/layouts/navFooterList';

export default {
  name: 'SidePanel',
  data() {
    return {
      navMenuList: navMenuList,
      navFooterList: navFooterList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 16px;
  width: 260px;
  height: 100vh;
  background: $primary;
  box-sizing: border-box;
  z-index: 100;

  & > div {
    width: 100%;
    margin-bottom: 24px;
    border-radius: 12px;
    background: #fff;
  }

  &__ico {
    display: block;
    width: 20px;
    height: 20px;
  }

  &__top {
    @include flex-box(flex-start, center);
    position: relative;
    height: 50px;
    padding: 0 10px;
    box-sizing: border-box;

    span {
      display: block;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      border-radius: 50%;
      background: #c99cbd;
    }

    .nav__btn {
      display: block;
      position: absolute;
      top: 50%;
      right: 12px;
      width: 24px;
      height: 24px;
      transform: translateY(-50%);
    }
  }

  &__mid {
    @include flex-box(flex-start, center);
    height: 62px;
    padding: 0 10px;
    box-sizing: border-box;

    .nav__thumb {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #000;
    }

    .nav__user {
      margin-left: 4px;
    }
  }
  &__list_wrap {
    .nav__lst {
      @include flex-box(flex-start, center);
      height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid $border_default;
      box-sizing: border-box;
      & > i {
        flex: 0 0 auto;
      }
    }
    .nav__text {
      flex: 1 1 auto;
      position: relative;
    }
    .nav__badge-count {
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 12px;
      height: 18px;
      line-height: 18px;
      padding: 0 6px;
      border-radius: 12px;
      background: $brand;
      color: #fff;
      transform: translateY(-50%);
      box-sizing: border-box;
    }
  }
  &__btm {
    display: block;
    width: calc(100% - 32px) !important;
    position: absolute;
    left: 50%;
    bottom: 16px;
    margin: 10px auto !important;
    transform: translateX(-50%);

    button {
      @include flex-box(center, center);
      gap: 8px;
      width: 100%;
      height: 40px;
    }
  }
}
</style>
