/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Post from "../src/components/Post";
import { POST } from "../types/Types";

describe(`Post component with given props`, () => {
  let dummyProps: POST;
  beforeEach(() => {
    dummyProps = {
      userId: 1,
      id: 1,
      title: "dummy title 1",
      body: "dummy body 1",
    };
  });
  it("Should render correctly with given props value", async () => {
    render(<Post {...dummyProps} />);
    expect(await screen.findByText(dummyProps.id)).toBeInTheDocument();
    expect(await screen.findByText(dummyProps.title)).toBeInTheDocument();
  });
});
