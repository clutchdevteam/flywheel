import Vue from "vue";
import PortalVue from "portal-vue";

Vue.use(PortalVue);

export default {
  title: "Global/Site Header",
};

export const Default = (args) => ({
  props: Object.keys(args),
  template: `
    <div>
      <SiteHeader v-bind="$props"/>

      <portal-target name='mobile-menu'></portal-target>
    </div>
  `,
});

Default.argTypes = {
  nav: {
    type: "array",
  },
};

Default.args = {
  nav: [
    {
      id: 0,
      slug: "#",
      title: "Menu item 1",
      submenus: [
        {
          id: 3,
          title: "Submenu 1",
          slug: "#",
        },
      ],
    },
    {
      id: 1,
      slug: "#",
      title: "Menu item 2",
    },
    {
      id: 2,
      slug: "#",
      title: "Menu item 3",
    },
  ],
};
