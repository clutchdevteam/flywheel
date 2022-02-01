export default {
  title: "Base components/Textarea",
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
    <BaseTextarea v-bind="$props" v-model="value">
      <template v-slot:label>{{label}}</template>
    </BaseTextarea>
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
  rows: {
    control: {
      type: "number",
      range: { min: 1, max: 10, step: 1 },
    },
  },
  required: {
    control: "boolean",
  },
};

Default.args = {
  default: "Message",
  placeholder: "What's on your mind today?",
  rows: 4,
  required: false,
};
