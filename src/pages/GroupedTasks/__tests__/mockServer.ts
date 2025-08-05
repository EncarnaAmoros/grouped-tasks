import { setupServer } from "msw/node";
import { http, HttpResponse, RequestHandler } from "msw";
import { GET_TASKS_URL } from "~/modules/Tasks/constants/tasksService";
import { groupedTasksMock } from "./mockData";

const httpHandlers: RequestHandler[] = [
  http.get(GET_TASKS_URL, async () => HttpResponse.json(groupedTasksMock)),
];

export const getServer = () => setupServer(...httpHandlers);
