Repro for fork-ts-checker-webpack-plugin not affected by Webpack 5 filesystem cache.

To repro the issue with fork-ts-checker-webpack-plugin:
1. `git clean -fdx`
2. `npm ci`
3. `npm run build` -- first build is slow, cache miss
4. `npm run build` -- second build is also slow

Expected, without fork-ts-checker-webpack-plugin:
1. `git clean -fdx`
2. `npm ci`
3. `npm run build-production` -- first build is slow, cache miss
4. `npm run build-production` -- second build is fast
