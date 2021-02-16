import { render }            from "@testing-library/svelte";
import { fireEvent, screen } from "@testing-library/dom";

import Form from "client/pages/dream-form/dream-form.svelte";

import { dreams } from "client/stores/dreams";

describe("Create dream form", () => {
    const dream = {
        title       : "Test Title",
        date        : "2021-02-15",
        description : "Test description"
    };
    let rerender,
        titleInput,
        dateInput,
        dreamInput;

    beforeEach(() => {
       const wrapper = render(Form);

       rerender   = wrapper.rerender;
       titleInput = screen.getByLabelText("Title");
       dateInput  = screen.getByLabelText("Date");
       dreamInput = screen.getByLabelText("Dream");
    });

    async function fillForm() {
        await fireEvent.change(titleInput, { target : { value : dream.title } });
        await fireEvent.change(dateInput, { target : { value : dream.date } });
        await fireEvent.change(dreamInput, { target : { value : dream.description } });
    }

    it("should save values of the input form on input", async () => {
        await fillForm();
        await rerender(Form);

        expect(titleInput.value).toBe(dream.title);
        expect(dateInput.value).toBe(dream.date);
        expect(dreamInput.value).toBe(dream.description);
    });

    it("should create dream on submit", async () => {
        const submit        = screen.getByRole("button", { name : "Create" });
        const { subscribe } = dreams;
        let saved;

        subscribe((v) => {
            saved = v;
        });

        const initialLength = saved.length;

        await fillForm();
        await fireEvent.click(submit);

        expect(saved).toHaveLength(initialLength + 1);
    });
});
