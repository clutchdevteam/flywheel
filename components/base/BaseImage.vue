<template>
  <img class="w-full h-auto" :src="src" :alt="alt" />
</template>

<script>
/**
 * A dumb base image component that will take up the full width of parent element it's placed in.
 */
export default {
  props: {
    /**
     * A string of the image source
     */
    src: {
      type: String,
      required: true,
    },
    /**
     * Required alt text for the image
     */
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>
