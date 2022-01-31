export default {
  title: "Base/Textarea",
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
  rows: {
    control: {
      type: "number",
      range: { min: 1, max: 10, step: 1 },
    },
  },
  placeholder: {
    control: "text",
  },
  required: {
    control: "boolean",
  },
};

Default.args = {
  default: "Message",
  rows: 4,
  placeholder: "What's on your mind today?",
  required: false,
};
