import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const PageLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  const isPLayActive = useSelector((state: IRootState) => state.play.isActive);

  return (
    <div
      className={`mx-auto ${
        isPLayActive ? "pt-4" : "pt-24"
      } pb-8 max-w-7xl px-8`}
    >
      {props.children}
    </div>
  );
};

export default PageLayout;
