import { render, screen } from "@testing-library/react";
import DropDown from "./DropDown";

const data = {
  id: "priority",
  label: "Priority",
  options: {
    default: "",
    high: "high",
    abovenormal: "abovenormal",
    normal: "normal",
    belownormal: "belownormal",
    idle: "idle",
  },
};

describe("DropDown component", () => {
  test("should render", () => {
    render(<DropDown data={data} options={data.options} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
