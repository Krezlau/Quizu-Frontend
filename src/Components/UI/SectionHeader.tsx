import React from "react";

const SectionHeader: React.FC<{text: string}> = (props) => {
  return <h2 className="text-2xl font-semibold mb-4 mt-12">{props.text}</h2>
}

export default SectionHeader;
