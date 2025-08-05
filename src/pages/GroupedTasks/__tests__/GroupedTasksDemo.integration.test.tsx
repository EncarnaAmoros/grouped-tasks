import { describe, expect, it, beforeAll, afterEach, afterAll } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithIntl } from "~/tests/test-utils";
import { getServer } from "./mockServer";
import { groupedTasksMock } from "./mockData";
import GroupedTasksDemo from "../GroupedTasksDemo";
import { getTasksProgress } from "~/modules/Tasks/helpers/getTasksProgress";

const server = getServer();

describe("GroupedTasksDemo Component", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
    localStorage.clear();
  });

  it("should render all the groups", async () => {
    renderWithIntl(<GroupedTasksDemo />);

    await waitFor(() => {
      expect(screen.getByText(groupedTasksMock[0].name)).toBeVisible();
      expect(screen.getByText(groupedTasksMock[1].name)).toBeVisible();
      expect(screen.getByText(groupedTasksMock[2].name)).toBeVisible();

      expect(
        screen.getByText(`${getTasksProgress(groupedTasksMock)}%`)
      ).toBeVisible();
    });
  });
});
