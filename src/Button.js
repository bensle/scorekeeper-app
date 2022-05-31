//Button(hier holt er sich die Props/Properties/Attribute)
// Wir füllen den Inhalt mit {text} text= atrribut was gesetzt wurde!
//mit hilfe von {} kann ich innerhalb von jsx javascript schreiben. Jedes Javascript!
import './Button.css';
export default function Button({ text }) {
  return <button className="resetbuttons">{text}</button>;
}
