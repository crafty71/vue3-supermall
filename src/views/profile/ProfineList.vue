<template>
  <div>
    <profile-nav-bar />
    <login />
    <money />
    <profile-list />
  </div>
</template>

<script setup>
import ProfileNavBar from './children/ProfileNavBar'
import Login from './children/LoginList.vue'
import Money from './children/MoneyList.vue'
import ProfileList from './children/ProfileList'
</script>

<style lang="scss" scoped></style>
