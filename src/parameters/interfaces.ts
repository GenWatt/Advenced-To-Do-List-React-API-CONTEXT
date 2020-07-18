export interface ITask {
  title: string;
  description: string;
  id: number;
  date: string;
  doneDate?: string;
}

export interface IRoutes {
  path: string;
  component: React.FC;
  id: number;
}

export interface ILinks {
  pathname: string;
  text: string;
  id: number;
}
