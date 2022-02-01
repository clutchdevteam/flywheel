export default {
  title: "Base components/Link",
};

export const Default = (args) => ({
  props: Object.keys(args),
  computed: {
    slotContent() {
      return this.default;
    },
  },
  template:
    '<BaseLink v-bind="$props" target="_blank">{{ slotContent }}</BaseLink>',
});

Default.argTypes = {
  default: {
    control: "text",
  },
  href: {
    control: {
      type: "text",
    },
  },
};

Default.args = {
  default: "Check out Flywheel",
  href: "https://github.com/clutchdevteam/flywheel",
};
