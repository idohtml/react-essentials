export default function TabButton({ children, click, isClicked }) {
  return (
    <li>
      <button className={isClicked ? "active" : undefined} onClick={click}>
        {children}
      </button>
    </li>
  );
}
