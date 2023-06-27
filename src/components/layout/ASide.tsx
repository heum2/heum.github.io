import React from "react";

type Props = {
  children: React.ReactNode;
};

export function ASide({ children }: Props): JSX.Element {
  return (
    <div
      className="common-no-scroll-bar sticky top-[81px] hidden lg:block col-span-2 overflow-scroll"
      style={{ height: "calc(100vh - 81px)" }}
    >
      {children}
    </div>
  );
}
