<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <p>
      <a rel="noreferrer" href="https://github.com/blouflashdb/vitesse-lite-bootstrap" target="_blank">
        Vitesse Lite Bootstrap
      </a>
    </p>
    <p>
      <font-awesome-icon :icon="['fas', 'user-secret']" />
      <em>Opinionated Vite Starter Template</em>
    </p>
    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="mt-2 btn btn-secondary"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
