const production = !process.env.ROLLUP_WATCH;

const { preprocess, processor } = require("@modular-css/svelte")({
    rewrite: false,
    map: !production ? { inline: false } : false
});

export default {
    input: "src/main.js",
    output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "public/build/bundle.js"
    },
    plugins: [
        require("@rollup/plugin-commonjs")(),

        require("@rollup/plugin-node-resolve").nodeResolve({
            browser: true,
            dedupe: ["svelte"]
        }),

        require("rollup-plugin-svelte")({
            preprocess,
            dev: !production,
            extensions: [".svelte"],
            css: false
        }),

        require("@modular-css/rollup")({
            processor,
            json: true,
            meta: true,
            namedExports: false
        })
    ],
    watch: {
        clearScreen: false
    }
};
