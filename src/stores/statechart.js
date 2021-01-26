import { writable }  from "svelte/store";
import { interpret } from "xstate";
import ComponentTree from "xstate-component-tree";

import FrameshiftStatechart from "src/statechart/machine";

const service = interpret(FrameshiftStatechart);
