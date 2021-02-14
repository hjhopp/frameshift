import { render, fireEvent } from "@testing-library/svelte";

import App from "client/app.svelte";

describe("App", () => {
    it("should render successfully", () => {
        const { getByTestId } = render(App);

        expect(getByTestId("app")).toBeTruthy();
    });
});

describe("Navigation", () => {
    it("should nav to archive when the archive button is pushed", async () => {
        const { getByTestId, rerender } = render(App);
        const button                    = getByTestId("archive-nav");

        await fireEvent.click(button);

        await rerender(App);

        expect(getByTestId("archive")).toBeTruthy();
    });

    it("should nav to create form when the create button is pushed", async () => {
        const { getByTestId, rerender } = render(App);
        const button                    = getByTestId("create-nav");

        await fireEvent.click(button);

        await rerender(App);

        expect(getByTestId("dream-form")).toBeTruthy();
    });
});
