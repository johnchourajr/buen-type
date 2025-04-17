/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false, path: false };

    // Allow Tailwind 4 CSS directives to be processed
    const oneOfRule = config.module.rules.find(
      (rule) => typeof rule.oneOf === "object"
    );
    if (oneOfRule) {
      const cssModuleRules = oneOfRule.oneOf.filter(
        (rule) => rule.test && rule.test.toString().includes("modules")
      );
      cssModuleRules.forEach((rule) => {
        const cssLoaderOptions = rule.use.find(
          (use) => use.loader && use.loader.includes("css-loader")
        );
        if (cssLoaderOptions) {
          cssLoaderOptions.options.url = false;
        }
      });
    }

    return config;
  },
};

export default nextConfig;
