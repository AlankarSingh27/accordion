import React, { useState } from "react";

export default function Family({ data }) {
  const [show, setshow] = useState(false);
  const expand = () => {
    setshow(!show);
  };
  return (
    <div style={{ paddingLeft: 10 }}>
      {data.map((parent) => (
        <div key={parent.id}>
          <span onClick={expand}>{parent.name}</span>
          {show && parent.children && (
            <div style={{ paddingLeft: 10 }}>
              <Family data={parent.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}