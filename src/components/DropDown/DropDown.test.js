import { render,screen } from "@testing-library/react";
import DropDown from "./DropDown";

const data = {
  id: "priority",
  label: "Priority",
  options: ["default", "high", "abovenormal", "normal", "belownormal", "idle"],
};

describe("DropDown component", () => {
  it("render label", () => {
    render(<DropDown id={data.id} label={data.label} values={data.options} />);
    expect(screen.getByText(data.label)).toBeInTheDocument();
  });

});
