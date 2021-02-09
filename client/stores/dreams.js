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
        },
        edit : (data) => {
            update((dreams) => {
                const idx = dreams.indexOf((dream) => dream.id === data.id);

                dreams[idx] = {
                    ...dreams[idx],
                    ...data
                };

                return dreams;
            });
        }
    };
}

const dreams = createDream();
const schema = {
    id          : "",
    title       : "",
    description : "",
    date        : ""
};

export {
    dreams,
    schema
};
