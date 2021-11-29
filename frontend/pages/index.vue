<template>
  <h1>Lol</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      lol: "kek",
      ws: null as WebSocket | null,
    }
  },
  methods: {
    async connect() {
      this.ws = await (new WebSocket("ws://localhost:8080/ws/"))
    },
    async send() {
      await this.ws.send("lol")
    },
  },
  async mounted() {
    await this.connect()
    await this.send()
  }
})
</script>
