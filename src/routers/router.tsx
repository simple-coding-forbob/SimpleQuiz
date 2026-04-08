import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "../layout/Layout";

// 공통 로딩 컴포넌트
const loading = <div>로딩중...😊😊😊</div>;

// 페이지 lazy 로딩
const Home = lazy(() => import("../pages/Home"));
const MenuPage = lazy(() => import("../pages/MenuPage"));
const SectionPage = lazy(() => import("../pages/SectionPage"));
const QuizList = lazy(() => import("../pages/QuizList"));
const QuizPage = lazy(() => import("../pages/QuizPage"));

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loading}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/:menuId", element: <MenuPage /> },
      { path: "/:menuId/chapter/:chapterId", element: <SectionPage /> },
      { path: "/:menuId/chapter/:chapterId/section/:sectionId", element: <QuizList /> },
      { path: "/:menuId/chapter/:chapterId/section/:sectionId/quiz/:quizId", element: <QuizPage /> },
    ],
  },
]);

export default router;
