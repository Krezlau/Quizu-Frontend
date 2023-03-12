import React from "react";

const SectionHeader: React.FC<{text: string, centered?: boolean, label?: string}> = (props) => {
  const style = `text-2xl font-semibold mb-4 mt-12 ${props.centered ? " text-center" : ""}`;

  if (props.label) {
    return <label id={props.label} className={style}>{props.text}</label>
  }

  return <h2 className={style}>{props.text}</h2>
}

export default SectionHeader;
