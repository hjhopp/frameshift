import { Machine, actions } from "xstate";

import Home      from "client/pages/home/home.svelte";
import DreamForm from "client/pages/dream-form/dream-form.svelte";
import Archive   from "client/pages/dream-archive/archive.svelte";

import { events, states } from "./consts";

export default Machine({ // eslint-disable-line
    id      : "frameshift",
    initial : states.HOME,
    on      : states,
    context : {
        editing : false
    },
    states : {
        home : {
            meta : {
                component : Home
            }
        },
        createForm : {
            on : {
                [events.CREATEFORM] : states.HOME,
                [events.EDITFORM]   : {
                    target  : states.EDITFORM,
                    actions : [
                        actions.assign({
                            editing : true
                        })
                    ]
                },
                [events.ARCHIVE] : states.ARCHIVE
            },
            meta : {
                component : DreamForm
            }
        },
        editForm : {
            on : {
                [events.CREATEFORM] : {
                    target  : states.CREATEFORM,
                    actions : [
                        actions.assign({
                            editing : false
                        })
                    ]
                },
                [events.ARCHIVE] : states.ARCHIVE
            },
            meta : {
                load : ({ editing }, { dream }) => [ DreamForm, { dream, editing }]
            }
        },
        archive : {
            on : {
                [events.ARCHIVE]    : states.HOME,
                [events.CREATEFORM] : {
                    target  : states.CREATEFORM,
                    actions : [
                        actions.assign({
                            editing : false
                        })
                    ]
                },
                [events.EDITFORM] : {
                    target  : states.EDITFORM,
                    actions : [
                        actions.assign({
                            editing : true
                        })
                    ]
                }
            },
            meta : {
                component : Archive
            }
        }
    }
});
