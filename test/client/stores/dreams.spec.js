import { schema, createDream } from "client/stores/dreams";

import mockDreams from "client/data/dreams";

describe("Dream store", () => {
   it("create adds a new dream", () => {
        const { subscribe, create } = createDream();
        let saved;

        subscribe((v) => {
            saved = v;
        });

        create({ ...schema });

        expect(saved).toHaveLength(mockDreams.length + 1);
   });

   it("edit edits an existing dream", () => {
      const { subscribe, edit } = createDream();
      let saved;

      subscribe((v) => {
          saved = v;
      });

      const edited = {
          ...mockDreams[0],
          title : "New Title"
      };

      edit(edited);

      expect(saved).toHaveLength(mockDreams.length);
      expect(saved[0].title).toEqual("New Title");
   });
});
