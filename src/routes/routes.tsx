import { RouteProps } from "react-router-dom";
import { NotFoundPage } from '../pages/NotFoundPage';
import { OutLayPage } from '../pages/OutLayPage';

export enum AppRoutes {
  // MAIN = "main",
  OUTLAY = "outlay",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  // [AppRoutes.MAIN]: "/",
  [AppRoutes.OUTLAY]: "/",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<string, RouteProps> = {
 
  [AppRoutes.OUTLAY]: {
    path: RoutePath.outlay,
    element: (
        <OutLayPage />
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};