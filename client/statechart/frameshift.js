import { Machine } from "xstate";

import Home     from "client/pages/home/home.svelte";
import NewDream from "client/pages/new-dream/new-dream.svelte";
import Archive  from "client/pages/dream-archive/archive.svelte";

export const events = {
    HOME     : "HOME",
    NEWDREAM : "NEWDREAM",
    ARCHIVE  : "ARCHIVE"
};

const states = {
    HOME     : "home",
    NEWDREAM : "newDream",
    ARCHIVE  : "archive"
};

export default Machine({ // eslint-disable-line
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
            on : {
                [events.NEWDREAM] : states.HOME,
                [events.ARCHIVE]  : states.ARCHIVE
            },
            meta : {
                component : NewDream
            }
        },
        archive : {
            on : {
                [events.ARCHIVE]  : states.HOME,
                [events.NEWDREAM] : states.NEWDREAM
            },
            meta : {
                component : Archive
            }
        }
    }
});
