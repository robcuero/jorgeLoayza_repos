import React from "react";
import { SaveIcon } from "../../../assets/icons";
import { render,screen } from "@testing-library/react";
import {Buttons}  from ".";
import { Provider } from "react-redux";
import { store } from "../../../store";

const buttonMock = {
  isDisabled: true,
  message: "nombre"
};
describe("Button component", () => {
  it("Should render Button with props", () => {
    render(
    
      <Provider store={store}>
         <Buttons isDisabled={buttonMock.isDisabled} message={buttonMock.message} icon={SaveIcon}/>
      </Provider>
    
   );
    screen.getByText("nombre");
  });
});
