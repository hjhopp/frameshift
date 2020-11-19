const production = !process.env.ROLLUP_WATCH;

export default{
    input  : "src/main.js",
    output : {
        sourcemap      : true,
        format         : "iife",
        name           : "app",
        file           : "public/build/bundle.js",
        assetFileNames : "[name][extname]"
    },
    plugins : [
        require("@rollup/plugin-commonjs")(),

        require("@rollup/plugin-node-resolve").nodeResolve({
            browser : true,
            dedupe  : [ "svelte" ]
        }),

        require("rollup-plugin-svelte")({
            dev        : !production,
            extensions : [ ".svelte" ],
            css        : (css) => css.write("bundle.css")
        })
    ],
    watch : {
        clearScreen : false
    }
};
