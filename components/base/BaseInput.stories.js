export default {
  title: "Base/Input",
};

export const Default = (args) => ({
  props: Object.keys(args),
  data() {
    return {
      value: "",
    };
  },
  computed: {
    label() {
      return this.default;
    },
  },
  template: `
  <div>
    <BaseInput v-bind="$props" v-model="value">
      <template v-slot:label>{{label}}</template>
    </BaseInput>
    <p class="mt-8">v-model: {{value}}</p>
  </div>
  `,
});

Default.argTypes = {
  default: {
    control: "text",
  },
  placeholder: {
    control: "text",
  },
  required: {
    control: "boolean",
  },
};

Default.args = {
  default: "First Name",
  placeholder: "Enter your first name",
  required: false,
};
