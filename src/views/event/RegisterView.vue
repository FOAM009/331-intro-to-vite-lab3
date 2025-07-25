<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message';
// import EventService from '@/services/EventService'
// const event = ref<Event | null>(null)
// const id = ref<number>(5928101)
// const props = defineProps({
//     id: {
//         type: String,
//         required: true
//     }
// })

// onMounted(() =>{
//     //fetch event (by id) and set local event data
//     // EventService.getEvent(id.value)
//     // EventService.getEvent(props.id)
//     EventService.getEvent(parseInt(props.id))
//         .then((response) =>{
//             event.value = response.data
//         })
//         .catch((error) =>{
//             console.error('There was an error!',error)
//         })
// })
const props = defineProps<{
    // id: {
    //     type: String,
    //     required: true
    // }
    event: Event
    id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {event} = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const register = () => {
    store.updateMessage('You are successfully registered for' + props.event.title)
    setTimeout(() =>{
        store.resetMessage()
    }, 3000)
    router.push({ name: 'event-detail-view', params:{id: props.event.id}})
}
</script>
<template>
    <!-- <div v-if="event">
        <h1>{{ event.title }}</h1>
        <nav>
            <router-link :to="{ name: 'event-detail-view', params: {id} }">Details</router-link>
            <router-link :to="{ name: 'event-register-view', params: {id} }">Register</router-link>
            <router-link :to="{ name: 'event-edit-view', params: {id} }">Edit</router-link>
        </nav>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div> -->
    <p>Register event here</p>
    <button @click="register">Register</button>
</template>