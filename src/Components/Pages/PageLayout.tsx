import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const PageLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  const isPLayActive = useSelector((state: IRootState) => state.play.isActive);

  return (
    <div
      className={`mx-auto min-h-screen ${
        isPLayActive ? "pt-16 sm:pt-36 sm:flex sm:flex-col sm:justify-center" : "pt-24"
      } pb-8 max-w-7xl px-8`}
    >
      {props.children}
    </div>
  );
};

export default PageLayout;
