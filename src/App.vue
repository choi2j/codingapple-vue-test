<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuelog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">List</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Write</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <router-view :post="post"></router-view>
  </div>

</template>

<script>
import List from "./components/List.vue";
import data from "./data/data"

export default {
  name: 'App',
  components: {
    List
  },
  data() {
    return {
      post: data
    }
  }
}
</script>

<style></style>
