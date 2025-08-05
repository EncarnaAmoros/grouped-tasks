import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithIntl } from "~/tests/test-utils";
import { Task } from "~/modules/Tasks/types/tasks";
import TasksList from "./TasksList";

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

describe("TasksList Component", () => {
  it("should render the task list", () => {
    const onCheckTaskMockFn = vi.fn();
    renderWithIntl(
      <TasksList tasks={mockTasksList} onCheckTask={onCheckTaskMockFn} />
    );

    expect(screen.getByText(mockTasksList[0].description)).toBeVisible();
    expect(screen.getByText(mockTasksList[1].description)).toBeVisible();
    expect(screen.getByText(mockTasksList[2].description)).toBeVisible();
  });

  it("should call on check function when a task is checked", async () => {
    const onCheckTaskMockFn = vi.fn();
    renderWithIntl(
      <TasksList tasks={mockTasksList} onCheckTask={onCheckTaskMockFn} />
    );

    await userEvent.click(
      screen.getByRole("checkbox", {
        name: mockTasksList[1].description,
      })
    );

    expect(onCheckTaskMockFn).toHaveBeenCalledWith(mockTasksList[1]);
  });
});
