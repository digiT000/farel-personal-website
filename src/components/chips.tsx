import "../styles/components/chip.css";

export interface chipsProps {
  isMainType: boolean;
  text: string;
}

function Chips({ isMainType, text }: chipsProps) {
  if (isMainType) {
    return (
      <div className="chips mainChips">
        <p className="captionSmall orange">{text}</p>
      </div>
    );
  } else {
    return (
      <div className="chips listChips">
        <p className="captionSmall">{text}</p>
      </div>
    );
  }
}

export default Chips;
