import path from "path";

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let server;

    function toExit() {
        if (server) {
            server.kill(0);
        }
    }

    return {
        writeBundle() {
            if (server) {
                return;
            }

            server = require("child_process").spawn(
                "npm",
                [ "run", "svelte-start", "--", "--dev" ],
                {
                    stdio : [ "ignore", "inherit", "inherit" ],
                    shell : true,
                }
            );

            process.on("SIGTERM", toExit);
            process.on("exit", toExit);
        }
    };
}

export default{
    input  : "client/main.js",
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

        require("@rollup/plugin-alias")({
            entries : [
                { find : "client", replacement : path.join(__dirname, "client") }
            ]
        }),

        require("rollup-plugin-svelte")({
            dev        : !production,
            extensions : [ ".svelte" ],
            css        : (css) => css.write("bundle.css")
        }),

        !production && serve(),

        !production && require("rollup-plugin-livereload")("public")
    ],
    watch : {
        clearScreen : false
    }
};
