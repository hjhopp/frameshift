import Layout from "./layout.svelte";
import { render } from "@testing-library/svelte";

describe("Layout", () => {
    it("should render initial welcome screen", () => {
        const { getByText } = render(Layout);

        getByText("Frameshift");
    });

    it("should render nav bar", () => {
        const { getByTestId } = render(Layout);
        const buttons = [ "+", "Dreams", "Statistics" ];

        buttons.forEach((btn) => {
            expect(getByTestId(`${btn}-nav`)).toBeTruthy();
        });
    })
})