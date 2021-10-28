import { useState } from "react";
const InputOutput = () => {
  //   const [inputs, setInputs] = useState("");
  const [outputs, setOutput] = useState("");

  const handleInputChange = (e) => {
    const unClean = e.target.value;
    let data = "";
    if (unClean) {
      data = unClean
        .split(",")
        .map((output) => output * 2)
        .join(",");
    }
    setOutput(data);
  };

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
            onChange={(e) => {
              handleInputChange(e);
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
            value={outputs}
          />
        </div>
      </div>
    </div>
  );
};

export default InputOutput;
