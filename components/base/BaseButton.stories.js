export default {
  title: "Base components/Button",
};

export const Default = (args) => ({
  props: Object.keys(args),
  data() {
    return {
      clicked: 0,
    };
  },
  computed: {
    buttonText() {
      return this.default;
    },
  },
  methods: {
    handleClick() {
      this.clicked++;
    },
  },
  template: `
  <div>
    <BaseButton :type="type" @click="handleClick">{{buttonText}}</BaseButton>
    
    <p class="mt-12">Clicked: {{clicked}}</p>
  </div>`,
});

Default.argTypes = {
  default: {
    type: "string",
  },
  type: {
    control: {
      type: "select",
      options: ["button", "submit"],
    },
  },
};

Default.args = {
  default: "Click me",
  type: "button",
};
