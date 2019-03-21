import React from "react";

export default function Keyboard(props) {
  const {
    handleNumKeyClick,
    handleResult,
    handleOperatorClick,
    handleStateClearing,
    currDisplay
  } = props;

  return (
    <div className="keyboard">
      <div className="keyboard__keyboard-row-key">
        <div
          id="clear"
          data-calcdata="AC"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
          onClick={handleStateClearing}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">
            AC
          </span>
        </div>
        <div
          data-calcdata="±"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">±</span>
        </div>
        <div
          data-calcdata="Del"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">
            Del
          </span>
        </div>
        <div
          id="divide"
          data-calcdata="/"
          className="keyboard__keyboard-row-key__key-btn  keyboard__keyboard-row-key__key-btn--operation-btn"
          onClick={handleOperatorClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">/</span>
        </div>
      </div>
      <div className="keyboard__keyboard-row-key">
        <div
          id="seven"
          data-calcdata="7"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">7</span>
        </div>
        <div
          id="eight"
          data-calcdata="8"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">8</span>
        </div>
        <div
          id="nine"
          data-calcdata="9"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">9</span>
        </div>
        <div
          id="multiply"
          data-calcdata="*"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
          onClick={handleOperatorClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">*</span>
        </div>
      </div>
      <div className="keyboard__keyboard-row-key">
        <div
          id="four"
          data-calcdata="4"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">4</span>
        </div>
        <div
          id="five"
          data-calcdata="5"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">5</span>
        </div>
        <div
          id="six"
          data-calcdata="6"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">6</span>
        </div>
        <div
          id="subtract"
          data-calcdata="-"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
          onClick={handleOperatorClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">-</span>
        </div>
      </div>
      <div className="keyboard__keyboard-row-key">
        <div
          id="one"
          data-calcdata="1"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">1</span>
        </div>
        <div
          id="two"
          data-calcdata="2"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">2</span>
        </div>
        <div
          id="three"
          data-calcdata="3"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">3</span>
        </div>
        <div
          id="add"
          data-calcdata="+"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
          onClick={handleOperatorClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">+</span>
        </div>
      </div>
      <div className="keyboard__keyboard-row-key">
        <div
          id="zero"
          data-calcdata="0"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--double keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={handleNumKeyClick}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">0</span>
        </div>
        <div
          id="decimal"
          data-calcdata="."
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
          onClick={e => {
            if (!currDisplay.includes(".")) handleNumKeyClick(e);
          }}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">.</span>
        </div>
        <div
          data-calcdata="="
          id="equals"
          className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
          onClick={handleResult}
        >
          <span className="keyboard__keyboard-row-key__key-btn__symbol">=</span>
        </div>
      </div>
    </div>
  );
}
