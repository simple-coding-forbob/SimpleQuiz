import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";

function Home() {
  return (
    <div>
      <ul className="space-y-2">
        {menuData.map((ch) => (
          <li key={ch.menuId}>
            <Link
              to={`/${ch.menuId}`}
              className="block p-3 rounded border hover:bg-green-600 hover:text-white transition"
            >
              <h2 className="text-xl font-bold">{ch.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
