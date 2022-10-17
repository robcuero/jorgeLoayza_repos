import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Home } from ".";
import { store } from "../../../store";

describe("Pokemon organism", () => {
  it("Should render Pokemon with props", async () => {
    const app = render(<Provider store={store}><Home/></Provider>)
    expect(app).toMatchSnapshot()
  });
});
