import { Machine, actions } from "xstate";

import Home      from "client/pages/home/home.svelte";
import DreamForm from "client/pages/dream-form/dream-form.svelte";
import Archive   from "client/pages/dream-archive/archive.svelte";

import { events, states } from "./consts";

export default Machine({ // eslint-disable-line
    id      : "frameshift",
    initial : "home",
    on      : states,
    states  : {
        home : {
            meta : {
                component : Home
            }
        },
        createForm : {
            on : {
                [events.CREATEFORM] : states.HOME,
                [events.ARCHIVE]    : states.ARCHIVE
            },
            meta : {
                component : DreamForm
            }
        },
        editForm : {
            on : {
                [events.CREATEFORM] : states.CREATEFORM,
                [events.ARCHIVE]    : states.ARCHIVE
            },
            meta : {
                load : (context, { dream }) => [ DreamForm, { dream }]
            }
        },
        archive : {
            on : {
                [events.ARCHIVE]    : states.HOME,
                [events.CREATEFORM] : states.CREATEFORM,
                [events.EDITFORM]   : states.EDITFORM
            },
            meta : {
                component : Archive
            }
        }
    }
});
