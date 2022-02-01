export default {
  title: "Base components/Radio",
};

export const Basic = (args) => ({
  props: Object.keys(args),
  data() {
    return {
      groupValue: "value1",
    };
  },
  computed: {
    label1() {
      return this.label1Override ?? `${this.default} 1`;
    },
    label2() {
      return this.label2Override ?? `${this.default} 2`;
    },
  },
  template: `
    <BaseContainer max-width="sm">
      <div class="flex justify-center">
        <BaseRadioGroup v-model="groupValue" @change="change">
          <BaseStack>
            <BaseRadio value="value1" :disabled="disabled" :size="size" :color="color" :vertical-alignment="verticalAlignment" :label-hidden="labelHidden">
              <span v-html="label1" />
            </BaseRadio>
            <BaseRadio value="value2" :disabled="disabled" :size="size" :color="color" :vertical-alignment="verticalAlignment" :label-hidden="labelHidden">
              <span v-html="label2" />
            </BaseRadio>
          </BaseStack>
        </BaseRadioGroup>
      </div>
    </BaseContainer>
  `,
});

Basic.argTypes = {
  // Slots
  default: {
    control: "text",
  },
  button: {
    control: null,
  },
  // Props
  value: {
    control: null,
  },
  disabled: {
    control: "boolean",
  },
  // Events
  change: {
    action: "change",
    table: {
      category: "events",
    },
  },
};

Basic.args = {
  // Slots
  default: "Option",
  button: undefined,
  // Props
  value: undefined,
  disabled: false,
};

export const Multiline = Basic.bind({});

Multiline.argTypes = {
  label1Override: {
    control: "text",
    table: {
      category: "story",
    },
  },
  label2Override: {
    control: "text",
    table: {
      category: "story",
    },
  },
  ...Basic.argTypes,
  default: {
    control: null,
  },
};

Multiline.args = {
  label1Override:
    "<b>Jackie Lubrano</b><br>\n12033 Kearsarge St<br>\nLos Angeles, CA, 90049<br>\nUnited States",
  label2Override:
    "<b>Carolyn Kaufman</b><br>\n3077 Rivermont Rd<br>\nChattanooga, TN, 37415<br>\nUnited States",
  ...Basic.args,
  default: undefined,
};
