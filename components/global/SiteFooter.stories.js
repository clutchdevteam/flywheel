export default {
  title: "Global/Site Footer",
};

export const Default = (args) => ({
  props: Object.keys(args),
  template: `
    <SiteFooter v-bind="$props" />
  `,
});

Default.argTypes = {
  logo: {
    control: "object,",
  },
  footerNav: {
    control: "array",
  },
};

Default.args = {
  footerContent: {
    logo: {
      alt: "Clutch Creative Logo",
      fieldname: "https://a.storyblok.com/f/144859/x/9da6cc40f9/logo.svg",
    },
    footerNav: [
      {
        id: 0,
        slug: "#",
        title: "Menu item 1",
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
  },
};
