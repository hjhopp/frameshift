import { render, fireEvent } from "@testing-library/svelte";

import App from "client/app.svelte";

let getByTestId, rerender;

beforeEach(() => {
    const wrapper = render(App);

    getByTestId = wrapper.getByTestId;
    rerender    = wrapper.rerender;
});

afterEach(() => {
    getByTestId = undefined;
    rerender    = undefined;
});

describe("App", () => {
    it("should render successfully", () => {
        expect(getByTestId("app")).toBeTruthy();
    });
});

describe("Navigation", () => {
    it("should nav home if same navigation button is hit", async () => {
        const button = getByTestId("create-nav");

        await fireEvent.click(button);
        await fireEvent.click(button);
        await rerender(App);

        expect(getByTestId("home")).toBeTruthy();
    });

    it("should nav to archive when the archive button is pushed", async () => {
        const button = getByTestId("archive-nav");

        await fireEvent.click(button);
        await rerender(App);

        expect(getByTestId("archive")).toBeTruthy();
    });

    it("should nav to create form when the create button is pushed", async () => {
        const button = getByTestId("create-nav");

        await fireEvent.click(button);
        await rerender(App);

        expect(getByTestId("dream-form")).toBeTruthy();
    });


    it("should nav from one page to another", async () => {
        const createBtn  = getByTestId("create-nav");
        const archiveBtn = getByTestId("archive-nav");

        await fireEvent.click(createBtn);
        await fireEvent.click(archiveBtn);
        await fireEvent.click(createBtn);
        await rerender(App);

        expect(getByTestId("dream-form")).toBeTruthy();
    });
});

// describe("Archive", () => {
//     it("clicking item in archive opens up edit form", async () => {
//         const archiveBtn = getByTestId("archive-nav");

//         await fireEvent.click(archiveBtn);
//         await rerender(App);

//         const dream = getByTestId("dream-0");

//         await fireEvent.click(dream);
//         await rerender(App);

//         expect(getByTestId("dream-form")).toBeTruthy();
//     });
// });
