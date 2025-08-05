import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithIntl } from "~/tests/test-utils";
import userEvent from "@testing-library/user-event";
import { Task } from "~/modules/Tasks/types/tasks";
import GroupTask from "./GroupTask";

const mockTasksList: Task[] = [
  {
    description: "Task 1",
    value: 1,
    checked: false,
  },
  {
    description: "Task 2",
    value: 2,
    checked: false,
  },
  {
    description: "Task 3",
    value: 3,
    checked: false,
  },
];

const groupName = "Group 1";

describe("GroupTask Component", () => {
  it("should render the component with the group name", () => {
    renderWithIntl(<GroupTask name={groupName} tasks={mockTasksList} />);

    expect(screen.getByText(groupName)).toBeVisible();
  });

  it("should render the component with the tasks list", async () => {
    renderWithIntl(<GroupTask name={groupName} tasks={mockTasksList} />);

    await userEvent.click(screen.getByText(groupName));

    expect(screen.getByText(mockTasksList[0].description)).toBeVisible();
    expect(screen.getByText(mockTasksList[1].description)).toBeVisible();
    expect(screen.getByText(mockTasksList[2].description)).toBeVisible();
  });
});
