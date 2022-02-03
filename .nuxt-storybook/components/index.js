export { default as SiteHeader } from '../../components/global/SiteHeader.vue'
export { default as Page } from '../../components/Page.vue'
export { default as BaseButton } from '../../components/base/BaseButton.vue'
export { default as BaseHeading } from '../../components/base/BaseHeading.vue'
export { default as BaseImage } from '../../components/base/BaseImage.vue'
export { default as BaseInput } from '../../components/base/BaseInput.vue'
export { default as BaseLink } from '../../components/base/BaseLink.vue'
export { default as BaseMenu } from '../../components/base/BaseMenu.vue'
export { default as BaseMenuItem } from '../../components/base/BaseMenuItem.vue'
export { default as BaseModal } from '../../components/base/BaseModal.vue'
export { default as BaseRadio } from '../../components/base/BaseRadio.vue'
export { default as BaseRadioGroup } from '../../components/base/BaseRadioGroup.vue'
export { default as BaseSelect } from '../../components/base/BaseSelect.vue'
export { default as BaseTextarea } from '../../components/base/BaseTextarea.vue'
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
