<script setup lang="ts">
const route = useRoute()
const router = useRouter()
</script>

<template>
  <div>
    <p>
      Hi, {{ route.params.name }}
    </p>
    <p>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button class="btn btn-primary" @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
