export default {
  title: "Base components/Select",
};

export const Default = (args) => ({
  props: Object.keys(args),
  data() {
    return {
      selectValue: "",
    };
  },
  computed: {
    label() {
      return this.default;
    },
  },
  template: `
  <div>
    <BaseSelect v-bind="$props" v-model="selectValue">{{label}}</BaseSelect>
    <p class="mt-12">v-model: {{selectValue}}</p>
  </div>
  `,
});

Default.argTypes = {
  default: {
    control: "text",
  },
  options: {
    control: "object",
  },
  isRequired: {
    control: "boolean",
  },
  disabled: {
    control: "boolean",
  },
};

Default.args = {
  default: "Select your state",
  options: [
    {
      id: 1,
      title: "Georgia",
    },
    {
      id: 2,
      title: "Alabama",
    },
    {
      id: 3,
      title: "Florida",
    },
  ],
  isRequired: false,
  disabled: false,
};
