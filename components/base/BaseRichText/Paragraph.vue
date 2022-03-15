<template>
  <component :is="element">
    <slot />
  </component>
</template>

<script>
  export default {
    data() {
      return {
        element: 'p',
      }
    },
    mounted() {
      if (this.$children.length === 1 && this.$children[0].$el.tagName === 'IMG') {
        this.element = 'div'
        this.$nextTick(() => {
          this.$el.classList.add('rich-text-image-wrapper')
        })
      }
    },
  }
</script>
