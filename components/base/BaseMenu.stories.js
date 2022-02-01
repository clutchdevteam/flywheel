export default {
  title: "Base components/Menu Dropdown",
};

export const Default = (args) => ({
  props: Object.keys(args),
  template: '<BaseMenu v-bind="$props"/>',
});

Default.argTypes = {
  menu: {
    control: {
      type: "object",
    },
  },
  depth: {
    control: {
      type: "number",
    },
  },
};

Default.args = {
  menu: {
    title: "Menu Button",
    submenus: [
      {
        title: "Submenu Button 1",
        link: "/",
      },
      {
        title: "Submenu Button 2",
        link: "/",
      },
    ],
  },
  depth: 0,
};
