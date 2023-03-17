import React from "react";

const PageLayout: React.FC<{children: React.ReactNode}> = (props) => {
  return <div className="mx-auto pt-24 pb-8 max-w-7xl px-8">
    {props.children}
  </div>
}

export default PageLayout;
