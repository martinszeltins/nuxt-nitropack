<template>
    <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
    const myVariable: ApiStatus = 'start'

    console.log('myVariable', myVariable)

    const { data } = useFetch('/api/user/list', { method: 'POST' })
</script>
