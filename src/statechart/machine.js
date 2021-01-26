import { Machine } from "xstate";

import Home     from "src/pages/home/Home.svelte";
import NewDream from "src/pages/new-dream/NewDream.svelte";
import Archive  from "src/pages/dream-archive/Archive.svelte";

export default Machine({
    id      : "frameshift",
    initial : "home",
    on      : {
        HOME     : "home",
        NEWDREAM : "newDream",
        ARCHIVE  : "archive"
    },
    states : {
        home : {
            meta : {
                component : Home
            }
        },
        newDream : {
            meta : {
                component : NewDream
            }
        },
        archive : {
            meta : {
                component : Archive
            }
        }
    }
});
