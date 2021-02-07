import { writable } from "svelte/store";

import { schema } from "./dreams";

const form = writable(schema);

export {
    form
};
