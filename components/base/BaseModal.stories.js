import Vue from "vue";
import PortalVue from "portal-vue";

Vue.use(PortalVue);

export default {
  title: "Base components/Modal",
};

export const Default = (args) => ({
  template: `
  <div>
    <BaseModal>
      <template v-slot:button>Open Modal</template>
      <template v-slot:content><h2>The modal content</h2></template>
    </BaseModal>
    
    <portal-target name='modal'></portal-target>
  </div>`,
});
