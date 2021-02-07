import { writable } from "svelte/store";

import mockDreams  from "client/data/dreams";
import randomImage from "client/data/images";

function createDream() {
    const { subscribe, update } = writable(mockDreams);

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

const dreams = createDream();
const schema = {
    title       : "",
    description : "",
    date        : ""
};

export {
    dreams,
    schema
};
