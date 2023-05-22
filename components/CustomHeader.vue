<template>
  <div class="min-h-[60px] bg-[#9144aa] flex items-center">
    <h1 class="text-white text-3xl font-bold">{{ currentRoute }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CustomHeader',
  props: ['currentRoute'],
}
</script>