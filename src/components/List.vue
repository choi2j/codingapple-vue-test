<template>
    <p>글 목록</p>
    <div v-for="(v, i) in post" class="p-4">
        <h2 @click="$router.push(`/detail/${i}`)">{{v.title}}</h2>
        <p>{{v.date}}</p>
    </div>
</template>

<script>
export default {
    name: "List",
    props: {
        post: Array
    }
}
</script>