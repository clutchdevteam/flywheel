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
    this.$storybridge(
      () => {
        // eslint-disable-next-line no-undef
        const storyblokInstance = new StoryblokBridge();
        storyblokInstance.on("enterEditmode", (event) => {
          this.isProdSite && this.$fetch();
          this.getStory(event.storyId);
        });
        storyblokInstance.on(["input", "published", "change"], (event) =>
          this.handleEvent(event)
        );
      },
      (error) => {
        if (this.$nuxt.context.isDev && this.$route.query._storyblok) {
          this.logError(error);
        }
      }
    );
  },
  async fetch() {
    if (!this.loaded) {
      const globalRes = await this.$storyapi.get("cdn/stories/global", {
        version: this.version,
      });

      // set global content in vuex
      this.$store.commit("global/setGlobals", globalRes.data.story.content);

      console.log(globalRes.data.story.content);
      // set loaded to true to negate uneccesary additional calls to storyblok
      this.$store.commit("global/isLoaded", true);
    }

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
  methods: {
    getStory(storyId, version = "draft") {
      return this.$storyapi
        .get(`cdn/stories/${storyId}`, {
          version: version,
        })
        .then(({ data }) => {
          this.story.content = data.story && data.story.content;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleEvent(event) {
      if (event.action === "input") {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      }
    },
  },
};
</script>
