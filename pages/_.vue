<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :block="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      story: { content: {} },
    };
  },
  computed: {
    ...mapState("global", ["loaded"]),
    // set version based on environment
    version() {
      return this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev
        ? "draft"
        : "published";
    },
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on("input", (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });

      // Use the bridge to listen the events
      storyblokInstance.on(["input", "published", "change"], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      });
    });
  },
  async fetch() {
    const globalRes = await this.$storyapi.get("cdn/stories/global", {
      version: this.version,
    });

    // set global content in vuex
    this.$store.commit("global/setGlobals", globalRes.data.story.content);
    // set loaded to true to negate uneccesary additional calls to storyblok
    this.$store.commit("global/isLoaded", true);

    const fullSlug = this.$route.path === "/" ? "home" : this.$route.path;

    let res;
    try {
      res = await this.$storyapi.get(`cdn/stories/${fullSlug}`, {
        version: this.version,
      });
      this.story = res.data.story;
    } catch (e) {
      if (!e.response) {
        this.$nuxt.context.error({
          statusCode: 404,
          message: "Failed to receive content from api",
        });
      } else {
        this.$nuxt.context.error({
          statusCode: e.response.status,
          message: e.response.data,
        });
      }
    }
  },
};
</script>
