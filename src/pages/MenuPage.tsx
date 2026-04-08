import { useParams, Link } from "react-router-dom";
import { menuData } from "../data/menuData";

export default function MenuPage() {
  const { menuId } = useParams();

  // 선택한 과목 정보 찾기
  const menu = menuData.find((m) => m.menuId === menuId);

  if (!menu) {
    return <div>존재하지 않는 과목입니다.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 bg-blue-50 p-5">{menu.title} - 챕터 목록</h2>
      {menu.chapters.length === 0 ? (
        <p>등록된 챕터가 없습니다.</p>
      ) : (
        <ul className="space-y-2">
          {menu.chapters.map((chapter) => (
            <li key={chapter.chapterId}>
              <Link
                to={`/${menu.menuId}/chapter/${chapter.chapterId}`}
                className="block p-3 rounded border hover:bg-blue-600 hover:text-white transition"
              >
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}