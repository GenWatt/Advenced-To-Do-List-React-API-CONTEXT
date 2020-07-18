import React from "react";
import "./scss/App.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "./parameters/config";

import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";

import TaskContextProvider from "./contexts/TaskContext";
import DoneTasksProvider from "./contexts/AddToDone";
import EditTaskContextProvider from "./contexts/EditTaskContext";

const ToDoList = () => {
  return (
    <Router basename="/">
      <Header />
      <NavBar />
      <main>
        <TaskContextProvider>
          <DoneTasksProvider>
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <EditTaskContextProvider>
                      {routes.map((route) => (
                        <Route
                          key={route.id}
                          exact
                          component={route.component}
                          path={route.path}
                        />
                      ))}
                    </EditTaskContextProvider>
                  </Switch>
                </AnimatePresence>
              )}
            />
          </DoneTasksProvider>
        </TaskContextProvider>
      </main>
    </Router>
  );
};

export default ToDoList;
