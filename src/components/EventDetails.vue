<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-details">
    <p class="text">{{ event.category }}</p>
    <p class="text">{{ event.organizer }}</p>
  </div>
</template>

<style scoped>
.event-details {
  text-align: right; /* ✅ ชิดขวา */
  margin-top: 10px;
}
.text {
  font-size: 14px; /* ✅ ขนาดเท่ากัน */
  margin: 2px 0;
}
</style>
