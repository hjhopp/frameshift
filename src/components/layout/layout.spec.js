import Layout from "./layout.svelte";
import { render } from "@testing-library/svelte";

it("it works", async () => {
    const { getByText, getByTestId } = render(Layout);


});