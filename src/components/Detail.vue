<template>
    <p>상세페이지</p>
    <div>
        <h2>{{ post[$route.params.id].title }}</h2>
        <p>{{ post[$route.params.id].date }}</p>
        <p>{{ post[$route.params.id].content }}</p>
    </div>
</template>

<script>
export default {
    name: "Detail",
    props: {
        post: Array
    }
}
</script>