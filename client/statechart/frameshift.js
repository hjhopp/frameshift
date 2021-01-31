import { Machine } from "xstate";

import Home      from "client/pages/home/home.svelte";
import DreamForm from "client/pages/dream-form/dream-form.svelte";
import Archive   from "client/pages/dream-archive/archive.svelte";

export const events = {
    HOME      : "HOME",
    DREAMFORM : "DREAMFORM",
    ARCHIVE   : "ARCHIVE"
};

const states = {
    HOME      : "home",
    DREAMFORM : "dreamForm",
    ARCHIVE   : "archive"
};

export default Machine({ // eslint-disable-line
    id      : "frameshift",
    initial : "home",
    on      : {
        HOME      : "home",
        DREAMFORM : "dreamForm",
        ARCHIVE   : "archive"
    },
    states : {
        home : {
            meta : {
                component : Home
            }
        },
        dreamForm : {
            on : {
                [events.DREAMFORM] : states.HOME,
                [events.ARCHIVE]   : states.ARCHIVE
            },
            meta : {
                component : DreamForm
            }
        },
        archive : {
            on : {
                [events.ARCHIVE]   : states.HOME,
                [events.DREAMFORM] : states.DREAMFORM
            },
            meta : {
                component : Archive
            }
        }
    }
});
