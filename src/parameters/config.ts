import DoneTasks from "../components/DoneTasks";
import YourTasks from "../components/YourTasks";
import AddTask from "../components/AddTask";

interface Ilinks {
  pathname: string;
  text: string;
  id: number;
}

export const links: Ilinks[] = [
  { pathname: "/addtask", text: "Add Task", id: 0 },
  { pathname: "/", text: "Your Tasks", id: 1 },
  { pathname: "/donetasks", text: "Your Done Tasks", id: 2 },
];

interface Iroutes {
  path: string;
  component: React.FC;
  id: number;
}

export const routes: Iroutes[] = [
  { path: "/addtask", component: AddTask, id: 0 },
  { path: "/", component: YourTasks, id: 1 },
  { path: "/donetasks", component: DoneTasks, id: 2 },
];
