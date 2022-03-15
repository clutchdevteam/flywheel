<template>
  <component :is="`h${attrs.level}`" :id="getId">
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
      attrs: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        isMounted: false,
      }
    },
    computed: {
      getId() {
        if (this.isMounted) {
          return (
            'h' + this.attrs.level + this.$el.innerText.replace(/[^A-Z0-9]+/gi, '-').toLowerCase()
          )
        } else {
          return ''
        }
      },
    },
    mounted() {
      this.isMounted = true
    },
  }
</script>
