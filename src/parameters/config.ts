import DoneTasks from "../components/DoneTasks/DoneTasks";
import YourTasks from "../components/YourTasks/YourTasks";
import AddTask from "../components/AddTask/AddTask";
import { ILinks, IRoutes } from "./interfaces";

export const links: ILinks[] = [
  { pathname: "/addtask", text: "Add Task", id: 0 },
  { pathname: "/", text: "Your Tasks", id: 1 },
  { pathname: "/donetasks", text: "Your Done Tasks", id: 2 },
];

export const routes: IRoutes[] = [
  { path: "/addtask", component: AddTask, id: 0 },
  { path: "/", component: YourTasks, id: 1 },
  { path: "/donetasks", component: DoneTasks, id: 2 },
];
