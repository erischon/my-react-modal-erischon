import React from "react";
import renderer from "react-test-renderer";

import { describe, expect, it } from "vitest";

import MyModal from "./index";

const modalProps = {
  title: "Modal Title",
  message: "Modal message",
  actionA: {
    title: "Action A Title",
    action: () => {},
  },
  actionB: {
    title: "Action B Title",
    action: () => {},
  },
  isOpen: () => {},
  ui: {
    modalBackgroundContainer: "bg-zinc-600",
    modalBackgroundContainerOpacity: "bg-opacity-100",
    modalBackground: "bg-zinc-100",
    modalColor: "text-black",
    buttonABackground: "bg-orange-600",
    buttonAColor: "text-white",
    buttonBBackground: "bg-orange-600",
    buttonBColor: "text-white",
  },
};

describe("MyModal Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<MyModal modalProps={modalProps} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
