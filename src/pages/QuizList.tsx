import { useParams, Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import { javaQuizList } from "../data/java/javaQuizList"; // 과목별 quizList import

export default function QuizList() {
  const { menuId, chapterId, sectionId } = useParams();

  // 선택한 과목
  const menu = menuData.find((m) => m.menuId === menuId);
  if (!menu) return <div>존재하지 않는 과목입니다.</div>;

  // 선택한 챕터
  const chapter = menu.chapters.find(
    (c) => c.chapterId === Number(chapterId)
  );
  if (!chapter) return <div>존재하지 않는 챕터입니다.</div>;

  // 선택한 섹션
  const section = chapter.sections.find(
    (s) => s.sectionId === Number(sectionId)
  );
  if (!section) return <div>존재하지 않는 섹션입니다.</div>;

  // ===== 과목별 quizList 선택 =====
  let quizList: { quizId: string; path: string }[] = [];
  switch (menuId) {
    case "java":
      quizList = javaQuizList;
      break;
    // case "html": quizList = htmlQuizList; break;
    // case "js": quizList = jsQuizList; break;
    default:
      quizList = [];
  }

  // 섹션의 quizIds에 해당하는 quizList 필터링
  const quizzes = quizList.filter((q) => section.quizIds.includes(Number(q.quizId.replace(/\D/g, ""))));

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {menu.title} - {chapter.title} - {section.title}
      </h2>

      {quizzes.length === 0 ? (
        <p>등록된 퀴즈가 없습니다.</p>
      ) : (
        <ul className="space-y-2">
          {quizzes.map((quiz) => (
            <li key={quiz.quizId}>
              <Link
                to={`/${menu.menuId}/quiz/${quiz.quizId}`}
                className="block p-3 rounded border hover:bg-purple-600 hover:text-white transition"
              >
                퀴즈 {quiz.quizId}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}