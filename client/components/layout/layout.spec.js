import Layout                from "./layout.svelte";
import { render, fireEvent } from "@testing-library/svelte";

const buttons = [ "+", "Dreams" ];

describe("Layout", () => {
    it("should render initial welcome screen", () => {
        const { getByText } = render(Layout);

        expect(getByText("Frameshift")).toBeTruthy();
    });

    it("should render nav bar", () => {
        const { getByTestId } = render(Layout);

        buttons.forEach((btn) => {
            expect(getByTestId(`${btn}-nav`)).toBeTruthy();
        });
    });
});
