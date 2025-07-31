<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import {type  Event } from '@/types'
import { ref , onMounted , computed, watchEffect} from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'
import nProgress from 'nprogress'
// import nProgress from 'nprogress'

const router = useRouter()
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage.value)
  return page.value < totalPages
})
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)
const perPage = computed(() => props.perPage)

onMounted(async () => {
  // axios
  //   .get('https://my-json-server.typicode.com/FOAM009/vue-events/events')
  // EventService.getEvents(2, page.value)
  //   .then((response) => {
  //     // console.log(response.data)
  //     events.value = response.data
  //   })
  //   .catch((error) => {
  //     console.error('There was an error!',error)
  //   })
  watchEffect(() => {
    events.value = null
    // nProgress.start()
    EventService.getEvents(perPage.value, page.value)
      .then((response) => {
        events.value =response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
      // .finally(() =>{
      //   // nProgress.done()
      // })
  })
})

</script>

<template>
  <!-- <main>
    <TheWelcome />
  </main> -->
  <!-- <div class="home"> -->
  <h1 class="text-2xl font-bold mb-6">Events For Good</h1>
  <div class="flex flex-col items-center space-y-4">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>
  <div class="pagination">
    <RouterLink class="text-blue-600 hover:underline" :to="{ name: 'event-list-view', query: { page: page - 1 , perPage: perPage}} "
    rel="prev"
    v-if="page != 1"
    >&#60; Prev Page</RouterLink>>

    <RouterLink class="text-blue-600 hover:underline ml-auto" :to="{ name: 'event-list-view', query: { page: page + 1 , perPage: perPage}}"
    rel="next"
    v-if="hasNextPage"
    >Next Page &#62;</RouterLink>>
  </div>
</template>

<!-- <style>
/* .events{
  display: flex;
  flex-direction: column;
  align-items: center;
} */
.pagination{
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev{
  text-align: left;
}
#page-next{
  text-align: right;
}
</style> -->
