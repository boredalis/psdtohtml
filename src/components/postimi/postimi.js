/* ============
 * Postimi Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
	props: {
    nipost: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('Postimi component has been mounted!');
  },
};
