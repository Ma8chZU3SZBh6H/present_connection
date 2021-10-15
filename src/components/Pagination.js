import { Link } from "react-router-dom";

function Pages({ page }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {Array(10)
        .fill(0)
        .map((value, index) => (
          <div key={index}>
            <Link
              to={`/page/${index}`}
              className={`${
                page == index ? "btn-page-selected" : "btn-page-unselected"
              }`}
            >
              {index + 1}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Pages;
