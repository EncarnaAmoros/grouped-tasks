import { GroupedTask } from "~/modules/Tasks/types/tasks";

export const groupedTasksMock: GroupedTask[] = [
  {
    name: "Group 1",
    tasks: [
      { description: "Task 1.1", value: 1, checked: false },
      { description: "Task 1.2", value: 2, checked: true },
      { description: "Task 1.3", value: 3, checked: false },
    ],
  },
  {
    name: "Group 2",
    tasks: [
      { description: "Task 2.1", value: 1, checked: false },
      { description: "Task 2.2", value: 2, checked: true },
      { description: "Task 2.3", value: 3, checked: false },
    ],
  },
  {
    name: "Group 3",
    tasks: [
      { description: "Task 3.1", value: 1, checked: false },
      { description: "Task 3.2", value: 2, checked: true },
      { description: "Task 3.3", value: 3, checked: false },
    ],
  },
];
