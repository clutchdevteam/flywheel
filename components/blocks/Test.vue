<template>
  <div>
    {{ block.text }}
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
