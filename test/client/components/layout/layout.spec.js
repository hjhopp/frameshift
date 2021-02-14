import { render, fireEvent } from "@testing-library/svelte";

import Layout from "client/components/layout/layout.svelte";

describe("Layout", () => {
    it("should render component", () => {
        const { getByTestId } = render(Layout);

        expect(getByTestId("layout")).toBeTruthy();
    });

    it("should render initial welcome screen", () => {
        const { getByText } = render(Layout);

        expect(getByText("Frameshift")).toBeTruthy();
    });

    it("should render nav bar", () => {
        const { getByTestId } = render(Layout);

        expect(getByTestId("nav")).toBeTruthy();
    });

    it("should nav to archive when the archive button is pushed", async () => {
        const { getByTestId, rerender } = render(Layout);
        const button                    = getByTestId("archive-nav");

        await fireEvent.click(button);

        await rerender(Layout);

        expect(getByTestId("archive")).toBeTruthy();
    });

    it("should nav to create form when the create button is pushed", async () => {
        const { getByTestId, rerender } = render(Layout);
        const button                    = getByTestId("create-nav");

        await fireEvent.click(button);

        await rerender(Layout);

        expect(getByTestId("dream-form")).toBeTruthy();
    });
});
