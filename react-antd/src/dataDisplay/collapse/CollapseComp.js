// snipper : rafce
import React from "react";
//import css
import "./collapse.css";
import { Collapse } from "antd";
// import icons
import { CheckCircleTwoTone } from "@ant-design/icons";

// snippet : cp
const { Panel } = Collapse;

const CollapseComp = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div>
      <h3 style={{ color: "white", textAlign: "center" }}>
        Collapse - Accordion mode, only one panel can be expanded at a time
      </h3>
      {/* implement accordion mode */}
      <Collapse accordion className="bg">
        <Panel header="This is panel header 1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3">
          <p>{text}</p>
        </Panel>
      </Collapse>

      <h3 style={{ color: "white", textAlign: "center" }}>Nested Panel</h3>
      {/* implement accordion mode */}
      <Collapse accordion className="bg">
        <Panel header="This is panel header 1">
          {/* implementing the Collapse again */}
          <Collapse className="bgn">
            <Panel header="This is nested panel">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
        {/* just adding spinning icon on right side of the Panel */}
        <Panel
          header="This is panel header 2"
          extra={
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              spin
              style={{ fontSize: "17px" }}
            />
          }
        >
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CollapseComp;
