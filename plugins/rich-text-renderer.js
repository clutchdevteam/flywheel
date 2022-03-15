import Vue from "vue";
import { Block } from "@marvr/storyblok-rich-text-types";
import RichTextHeading from "../components/base/BaseRichText/Heading.vue";
import RichTextParagraph from "../components/base/BaseRichText/Paragraph.vue";
import VueRichTextRenderer from "@marvr/storyblok-rich-text-vue-renderer";

Vue.use(VueRichTextRenderer, {
  resolvers: {
    blocks: {
      [Block.PARAGRAPH]: RichTextParagraph,
      [Block.HEADING]: RichTextHeading,
    },
  },
});
