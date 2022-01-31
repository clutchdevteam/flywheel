<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true,
      validator: (value) =>
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
    },
    /** The semantic HTML element used for the heading. Defaults to the value of `size`. */
    tag: {
      type: String,
      default: undefined,
      validator: (value) =>
        ["h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(value),
    },
  },
  computed: {
    component() {
      return this.tag ?? this.size.slice(0, 2);
    },
    classes() {
      const classes = [];

      switch (this.size) {
        case "h1":
          classes.push(
            "font-heading",
            "font-semibold",
            "text-5xl",
            "xs:text-6xl",
            "sm:text-7xl",
            "leading-heading"
          );
          break;
        case "h2-lg":
          classes.push(
            "font-heading",
            "font-medium",
            "text-4xl",
            "sm:text-5xl",
            "leading-tighter"
          );
          break;
        case "h2":
          classes.push(
            "font-heading",
            "font-medium",
            "text-3xl",
            "sm:text-4xl",
            "leading-tighter"
          );
          break;
        case "h3":
          classes.push(
            "font-heading",
            "font-medium",
            "text-2xl",
            "sm:text-3xl",
            "leading-tighter"
          );
          break;
        case "h4":
          classes.push(
            "font-heading",
            "font-medium",
            "text-xl",
            "sm:text-2xl",
            "leading-tighter"
          );
          break;
        case "h5":
          classes.push("font-semibold", "text-xl", "leading-snug");
          break;
        case "h6":
          classes.push(
            "font-medium",
            "text-2xs",
            "leading-snug",
            "uppercase",
            "tracking-wide"
          );
          break;
      }

      return classes.join(" ");
    },
  },
};
</script>
