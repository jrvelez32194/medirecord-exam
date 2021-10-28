import { useState } from "react";
const InputOutput = () => {
  const [inputs, setInputs] = useState("");

  return (
    <div className="container content">
      <div className="content content-child">
        <div className="form-control">
          <h1>Input</h1>
          <br />
          <label>Array</label>
          <input
            type="text"
            placeholder="Enter Input sample 1,2,3,4"
            value={inputs}
            onChange={(e) => {
              setInputs(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="content content-child">
        <div className="form-control">
          <h1>Output</h1>
          <br />
          <label>Doubled</label>
          <input
            type="text"
            placeholder="Result will appear here"
            readOnly
            value={
              inputs === ""
                ? ""
                : inputs
                    .split(",")
                    .map((input) => input * 2)
                    .join(",")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default InputOutput;
