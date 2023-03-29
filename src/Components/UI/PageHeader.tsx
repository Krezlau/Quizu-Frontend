import React from "react";

const PageHeader: React.FC<{text: string, centered?: boolean}> = (props) => {
  return <h1 className={`text-4xl font-bold mb-16 ${props.centered ? "text-center" : ""}`}>{props.text}</h1>
}

export default PageHeader;
