import { render } from "@testing-library/svelte";

import App from "client/app.svelte";

describe("App", () => {
    it("should render successfully", () => {
        const { getByTestId } = render(App);

        expect(getByTestId("app")).toBeTruthy();
    });
});
