export default {
  title: "Base components/Image",
};

export const Default = (args) => ({
  props: Object.keys(args),
  template: `
  <div :class="width">
    <BaseImage :src="src" :alt-text="alt" />
  </div>
  `,
});

Default.argTypes = {
  src: "text",
  alt: "text",
  width: {
    control: {
      type: "select",
      options: ["w-1/4", "w-1/3", "w-1/2", "w-2/3", "w-3/4", "w-full"],
    },
  },
};

Default.args = {
  src: "https://source.unsplash.com/random",
  alt: "Image alt text",
  width: "w-1/2",
};
