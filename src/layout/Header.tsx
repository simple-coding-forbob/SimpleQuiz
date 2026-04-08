import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    // TODO: md:xxx (768px 이상에서 적용), lg:xxx (1024px 이상에서 적용), 기본은 모바일 우선 디자인
    <nav className="bg-gray-100 text-gray-800">
      <div className="bg-blue-700 text-white flex justify-between border-b items-center py-1 px-5">
        {/* Logo + 메뉴 */}
        <div className="text font-bold">simple-coding</div>

        {/* 햄버거 + 로그인 메뉴 */}
        <div className="flex items-center gap-4">
          {/* 햄버거 버튼 (모바일) */}
          <button
            aria-label="햄버거 메뉴 열기/닫기"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 모바일 메뉴: md:hidden (758px 이상에서 숨김) */}
      {/* flex-col : 세로 바꾸기  */}

      <div
        className={`flex flex-col gap-4 transition-all duration-700
                                   md:flex-row md:justify-between md:items-center
                                   ${
                                     isOpen
                                       ? "max-h-1000"
                                       : "max-h-0 overflow-hidden"
                                   }
                                   `}
      >
        <ul
          className="flex flex-col gap-4 pl-5 py-2
                              md:flex-row
          "
        >
          {/* PC 메뉴 */}
          <li>
            <Link to="/" className="hover:underline">
              홈
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
