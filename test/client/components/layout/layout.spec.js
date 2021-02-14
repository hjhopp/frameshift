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
});
