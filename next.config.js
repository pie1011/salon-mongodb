/* 
warn  - Invalid next.config.js options detected: 
  - The value at .experimental has an unexpected property, browsersListForSwc, which is not in the list of allowed properties (adjustFontFallbacks, adjustFontFallbacksWithSizeAdjust, amp, cpus, craCompat, disableOptimizedLoading, disablePostcssPresetEnv, esmExternals, appDir, externalDir, fallbackNodePolyfills, fetchCache, forceSwcTransforms, fullySpecified, gzipSize, incrementalCacheHandlerPath, isrFlushToDisk, isrMemoryCacheSize, largePageDataBytes, legacyBrowsers, manualClientBasePath, middlewarePrefetch, newNextLinkBehavior, nextScriptWorkers, optimizeCss, optimisticClientCache, outputFileTracingRoot, outputFileTracingIgnores, pageEnv, profiling, proxyTimeout, runtime, serverComponentsExternalPackages, scrollRestoration, sharedPool, sri, swcFileReading, swcMinify, swcMinifyDebugOptions, swcPlugins, swcTraceProfiling, urlImports, enableUndici, workerThreads, fontLoaders, webVitalsAttribution, mdxRs, turbotrace).
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'avatar.tobi.sh',
      'cloudflare-ipfs.com',
      'loremflickr.com'
    ]
  },
  experimental: {
    legacyBrowsers: false
  }
};

module.exports = nextConfig;
