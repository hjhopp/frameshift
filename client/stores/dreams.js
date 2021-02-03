import { writable } from "svelte/store";

import dreams      from "client/data/dreams";
import randomImage from "client/data/images";

function createDream() {
    const { subscribe, set, update } = writable(dreams);

    return {
        subscribe,
        create : (data) => {
            update((dreams) => [
                ...dreams,
                {
                    ...data,
                    image : randomImage()
                }
            ]);
        }
    };
}

export const dreamStore = createDream();
