import { writable }  from "svelte/store";
import { interpret } from "xstate";
import ComponentTree from "xstate-component-tree";

import FrameshiftStatechart from "client/statechart/frameshift";

const service = interpret(FrameshiftStatechart);
const tree    = writable([]);
const send    = service.send;

new ComponentTree(service, (children) => {
    /**
     *
     * tree will be something like this
     *
     * [{
     *     path : "one",
     *     component: MyComponent,
     *     children: [],
     *     props: false,
     * }]
     *
     * or if there are nested components
     *
     * [{
     *     path : "one",
     *     component: MyComponent,
     *     props: false
     *     children : [{
     *         path : "one.two",
     *         component : ChildComponent,
     *         props: {
     *             one : 1
     *         },
     *         children: []
     *     }]
     * }]
     *
     */
    tree.set(children);
});

service.start();

export {
    tree,
    send
};
