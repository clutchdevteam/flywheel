export default {
  title: "Base/Menu Dropdown",
};

export const Default = (args) => ({
  props: Object.keys(args),
  template: '<nav><ul><BaseMenu v-bind="$props"/></nav></ul>',
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
