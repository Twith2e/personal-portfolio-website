export default {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: false,
  },
  plugins: [
    "preset-default",
    {
      name: "removeViewBox",
      active: false,
    },
    {
      name: "removeDimensions",
      active: true,
    },
    {
      name: "removeAttrs",
      params: { attrs: ["stroke", "fill"] },
    },
    {
      name: "sortAttrs",
      active: true,
    },
    {
      name: "mergePaths",
      active: true,
    },
    {
      name: "convertStyleToAttrs",
      active: true,
    },
  ],
};
