import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithIntl } from "~/tests/test-utils";
import ProgressBar from "./ProgressBar";

describe("ProgressBar Component", () => {
  it("should render the component with the right progress value", () => {
    renderWithIntl(<ProgressBar progress={50.33} />);

    expect(screen.getByText("50.33%")).toBeVisible();
  });

  it("should render the component without the progress value when is 0", () => {
    renderWithIntl(<ProgressBar progress={0} />);

    expect(screen.queryByText("0%")).not.toBeInTheDocument();
  });
});
