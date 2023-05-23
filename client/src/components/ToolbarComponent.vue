<script setup lang="ts">
  import { useAuthStore } from '../stores/AuthStore';
  const authStore = useAuthStore();
  const name = authStore.session.name;
</script>

<template>
  <div>
    <header>
      <div class="toolbar" style="height: 50px;">
        <span class="transparent py-5 v-chip v-chip--clickable v-chip--no-color v-chip--pill theme--light v-size--default">
          <span class="v-chip__content">
            Olá, {{ name }}
            <div class="ml-5">
              <img class="avatar" src="../../public/img-user.jpg" height="32">
            </div>
          </span>
        </span>
      </div>
    </header>
  </div>
</template>

<style scoped>
  header {
    background-color: white;
    height: 50px;
    margin-top: 0px;
    transform: translateY(0px);
    left: 0px;
    right: 0px;
  }

  .toolbar {
    justify-content: flex-end; /* alinha a direta */
    align-items: center;
    display: flex;
    position: relative;
    z-index: 0;
  }

  /* .toolbar, .v-toolbar__extension {
    padding: 4px 16px;
  } */

  .transparent {
    background-color: transparent!important;
    border-color: transparent!important;
  }
  
  .py-5 {
    padding-top: 20px!important;
    padding-bottom: 20px!important;
  }

  .v-chip {
    align-items: center;
    cursor: default;
    display: inline-flex;
    line-height: 20px;
    max-width: 100%;
    outline: none;
    overflow: hidden;
    padding: 0 12px;
    position: relative;
    text-decoration: none;
    transition-duration: .28s;
    transition-property: box-shadow,opacity;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    vertical-align: middles;
    white-space: nowrap;
  }

  .v-chip::before {
    background-color: currentColor;
    bottom: 0;
    border-radius: inherit;
    content: "";
    left: 0;
    opacity: 0;
    position: absolute;
    pointer-events: none;
    right: 0;
    top: 0;
  }

  .v-chip--clickable {
    cursor: pointer;
  }
  /* .v-chip--no-color */
  /* .v-chip--pill */
  /* acho que é isso */

  .theme--light {
    /* background: #fff; */
    background: #e0e0e0;
    color: rgba(0,0,0,.87);
  }

  .theme--light.v-chip:not(.v-chip--active) {
    background: #e0e0e0;
  }

  .v-size--default {
    border-radius: 16px;
    font-size: 14px;
    height: 32px;
  }

  .v-chip .v-chip__content {
    align-items: center;
    display: inline-flex;
    height: 100%;
    max-width: 100%;
  }

  .avatar {
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    line-height: normal;
    position: relative;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
  }

  .ml-5 {
    margin-left: 5px;
  }

  *, :after, :before {
    background-repeat: no-repeat;
    box-sizing: inherit;
  }
</style>
