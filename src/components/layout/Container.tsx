import { ChildrenProps } from "types/common";

const Container = ({ children }: ChildrenProps) => {
  return <div className="mx-auto max-w-md px-4 pt-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl text-slate-600">{children}</div>;
};

export default Container;
