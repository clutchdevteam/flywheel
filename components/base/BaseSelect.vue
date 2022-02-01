<template>
  <div class="flex flex-col">
    <label class="text-sm mb-2" :for="fieldId">
      <slot>Select an option</slot> <span v-if="isRequired">*</span>
    </label>

    <select
      :id="fieldId"
      class="border border-gray-300 rounded-md p-2"
      v-bind="$attrs"
      v-on="listeners"
      :required="isRequired"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    >
      <option value="" selected disabled>Select</option>

      <option v-for="option in options" :key="option.id" :value="option.title">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fieldId() {
      return `${this.$slots.default[0].text.toLowerCase().replace(" ", "-")}-${
        this._uid
      }`;
    },
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
};
</script>
