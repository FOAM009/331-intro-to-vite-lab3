<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const {message} = storeToRefs(store)
// import HelloWorld from './components/EventCard.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <!-- <div id="layout"> -->
    <!-- ใช้ Tailwind จะไม่ต้องเขียน CSS แยกเอง → แค่ใส่ class บน element เลย
    ทำให้โค้ด CSS สั้นลง สะอาด และดูแลง่าย
    เหมาะกับ UI component ที่มี style ซ้ำ ๆ หรือเล็ก ๆ -->
  <div class="text-center font-sans text-gray-700 antialias" >
    <header>
      <div id="flashMessage" class="animate-pulse bg-yellow-200 p-4 mb-4 rounded" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav class="flex justify-center space-x-4 py-6 text-sm">
          <!-- <RouterLink to="/">Home</RouterLink> -->
          <!-- <RouterLink to="/">Event</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/students">Student</RouterLink>  -->
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view', query: { page: 1, perPage: 2 } }">2 / page</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view', query: { page: 1, perPage: 3 } }">3 / page</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view', query: { page: 1, perPage: 4 } }">4 / page</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view', query: { page: 1, perPage: 6 } }">6 / page</RouterLink>
          |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink>
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'Students' }">Student</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<!-- <style scoped> -->
<!-- <style>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

/* #layout{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

nav{
  padding: 30px;
}

nav a {
  /* display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border); */
  font-weight: bold;
  color: #2c3e50;
}

/* nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

 nav a.router-link-exact-active{
  color: #42b983;
 }

 h2{
  font-size: 20px;
 }
 @keyframes yellofade{
  from {
    background-color: yellow;
  }
  to{
    background-color: transparent;
  }
 }
 #flashMessage{
  animation: yellofade 3s ease-in-out;
 }
</style> -->
