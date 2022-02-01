export default {
  title: "Base components/Heading",
};

export const Default = (args) => ({
  props: Object.keys(args),
  computed: {
    headingText() {
      return this.default;
    },
  },
  template: `
  <BaseHeading v-bind="$props">
    {{headingText}}
  </BaseHeading>
  `,
});

Default.argTypes = {
  default: {
    control: "text",
  },
  size: {
    control: {
      type: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
  tag: {
    control: {
      type: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

Default.args = {
  default: "Heading Text",
  size: "h1",
  tag: undefined,
};
