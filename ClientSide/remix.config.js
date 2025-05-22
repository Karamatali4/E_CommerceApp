/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
    future: {
      v3_routeConvention: true,
    },
    ignoredRouteFiles: ["**/.*"],
  };
  