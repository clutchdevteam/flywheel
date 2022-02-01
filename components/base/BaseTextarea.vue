<template>
  <div class="flex flex-col">
    <label class="text-sm mb-2" :for="_uid">
      <slot name="label" /> <span v-if="required">*</span>
    </label>

    <textarea
      :id="_uid"
      class="border border-gray-300 rounded-md p-2"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      v-on="listeners"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    rows: {
      type: Number,
      default: 4,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
};
</script>
