<script setup lang="ts">
// import { ref, onMounted } from 'vue'
// import { type Event } from '@/types'
// import EventService from '@/services/EventService'
// import { useRouter } from 'vue-router'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
// const event = ref<Event | null>(null)
// // const id = ref<number>(5928101)
// const props = defineProps({
//     id: {
//         type: String,
//         required: true
//     }
// })

// const router = useRouter()
const store = useEventStore()
const {event} = storeToRefs(store)
// onMounted(() =>{
//     //fetch event (by id) and set local event data
//     // EventService.getEvent(id.value)
//     // EventService.getEvent(props.id)
//     EventService.getEvent(parseInt(props.id))
//         .then((response) =>{
//             event.value = response.data
//         })
//         .catch((error) =>{
//             if (error.response && error.response.status == 404){
//                     router.push({
//                     name: '404-resource-view',
//                     params: { resource: 'event'}
//                 })
//             } else {
//                 router.push({ name: 'network-error-view'})
//             }
//         })
// })
</script>
<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <nav>
            <RouterLink :to="{ name: 'event-detail-view', params: {id} }">Details</RouterLink>
            <RouterLink :to="{ name: 'event-register-view', params: {id} }">Register</RouterLink>
            <RouterLink :to="{ name: 'event-edit-view', params: {id} }">Edit</RouterLink>
        </nav>
        <!-- <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p> -->
        <RouterView :event="event" />
    </div>
</template>