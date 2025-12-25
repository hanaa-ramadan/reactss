import "./TagButtonStyle.css";

function Menu({ items }) {
  return (
    <div className="menuContainer">
      <ul className="menuList">
        {items.map((item) => (
          <li key={item.id} className="menuItem">
            <button className="tagButton">
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
