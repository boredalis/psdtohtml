/* ============
 * Postimet Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
  components: {
    postimi: require("@/components/postimi/postimi.vue"),
  },

  props: {
    nikolon: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    console.log('Postimet component has been mounted!');
  },
};
