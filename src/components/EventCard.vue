<script setup lang="ts">
// import { title } from 'process';
// import { ref } from 'vue'
//defineProps<{
//  msg: string
//}>()
// const event = ref({
//   id: 5928101,
//   category: 'animal welfare',
//   title: 'Cat Adoption Day',
//   description: 'Find your new feline friend at this event.',
//   location: 'Meow Town',
//   date: 'January 28,2022',
//   time: '12:00',
//   petsAllowed: 'true',
//   organizer: 'Kat Laydee'
// })
import { type  Event } from '@/types'
import EventDetails from './EventDetails.vue'
defineProps<{
  event: Event
}>()
// const event = ref({
//   id: 5928101,
//   category: 'animal welfare',
//   title: 'Cat Adoption Day',
//   description: 'Find your new feline friend at this event.',
//   location: 'Meow Town',
//   date: 'January 28,2022',
//   time: '12:00',
//   petsAllowed: 'true',
//   organizer: 'Kat Laydee'
</script>

<template>
  <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div> -->
  <!-- <div class="greetings"></div> -->
  <!-- <div class="event-class"> -->
  <!-- <RouterLink to ="/event/5928101"> -->
    <RouterLink class="event-link" :to ="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>

      <EventDetails :event="event" />
    </div>
  </RouterLink>
  <!-- </div> -->
</template>

<!-- <style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style> -->
<style scoped>
.event-card{
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover{
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link{
  text-decoration: none;
  color: #2c3e50;
}
</style>

