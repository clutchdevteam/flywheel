export { default as Page } from '../../components/Page.vue'
export { default as BaseButton } from '../../components/base/BaseButton.vue'
export { default as BaseImage } from '../../components/base/BaseImage.vue'
export { default as BaseInput } from '../../components/base/BaseInput.vue'
export { default as BlocksTest } from '../../components/blocks/Test.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
