import React from "react";

const PageHeader: React.FC<{text: string}> = (props) => {
  return <h1 className="text-4xl font-bold mb-16">{props.text}</h1>
}

export default PageHeader;
