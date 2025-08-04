export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface GroupedTask {
  name: string;
  tasks: Task[];
}
