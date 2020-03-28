import React from "react";
import { createApp, APP_MODE, IAppConfig } from "ice";
import LocaleProvider from "@/components/LocaleProvider";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const appConfig: IAppConfig = {
  app: {
    rootId: "ice-container",
    addProvider: ({ children }) => <LocaleProvider>{children}</LocaleProvider>
  },
  logger: {
    level: APP_MODE === "build" ? "error" : "debug"
  },
  router: {
    type: "browser",
    fallback: <div>加载中...</div>
  },
  request: {
    timeout: 5000,
    baseURL: "/",
    interceptors: {
      response: {
        onError: error => {
          history.push("/about");
          return Promise.reject(error);
        }
      }
    }
  }
};

createApp(appConfig);
