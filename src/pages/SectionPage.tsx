import { useParams, Link } from "react-router-dom";
import { menuData } from "../data/menuData";

export default function SectionPage() {
  const { menuId, chapterId } = useParams();

  // 선택한 과목
  const menu = menuData.find((m) => m.menuId === menuId);
  if (!menu) return <div>존재하지 않는 과목입니다.</div>;

  // 선택한 챕터
  const chapter = menu.chapters.find(
    (c) => c.chapterId === Number(chapterId)
  );
  if (!chapter) return <div>존재하지 않는 챕터입니다.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 bg-blue-50 p-5">
        {menu.title} - {chapter.title}
      </h2>

      {chapter.sections.length === 0 ? (
        <p>등록된 섹션이 없습니다.</p>
      ) : (
        <ul className="space-y-2">
          {chapter.sections.map((section) => (
            <li key={section.sectionId}>
              <Link
                to={`/${menu.menuId}/chapter/${chapter.chapterId}/section/${section.sectionId}`}
                className="block p-3 rounded border hover:bg-orange-500 hover:text-white transition"
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}