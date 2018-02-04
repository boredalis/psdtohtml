/* ============
 * Home Page
 * ============
 *
 * todo: add documentation here!
 */

export default {
  data: () => ({
    menu: true,
    nomenu:false,
    aoshtaktive: false,
    postimet: [
      [{
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'big',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'big',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
      ],
      [{
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'big',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
      ],
      [{
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'big',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'big',
        },
      ],
      [{
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'small',
        },
        {
          imazhi: 'http://moziru.com/images/drawn-space-tumblr-drawing-13.jpg',
          llogo: 'LOGO DESIGN',
          teksti: 'Illustrate',
          muti: 'big',
        },
      ],
    ],
  }),
  components: {
    postimet: require("@/components/postimet/postimet.vue"),
  },
  methods: {
    showmenu() {
      this.aoshtaktive=true;
      this.nomenu=true;
    },
    deletemenu(){
      this.aoshtaktive=false;
      this.nomenu=false;
    }
  },
  mounted() {
    console.log('Home page has been mounted!');
  },
};
