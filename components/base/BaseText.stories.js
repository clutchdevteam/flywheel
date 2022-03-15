export default {
  title: 'Base components/Text',
}

export const Default = (args) => ({
  props: Object.keys(args),
  computed: {
    text() {
      return this.default
    },
  },
  template: `
    <BaseText>{{text}}</BaseText>
  `,
})

Default.argTypes = {
  default: {
    control: 'text',
  },
}

Default.args = {
  default:
    'Our residents attend daily 12-step meetings and practice the principles of the 12-steps in their daily lives through sponsorship and mentorship.',
}
