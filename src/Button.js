import './Button.css';
export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} text className="resetbuttons">
      {children}
    </button>
  );
}
