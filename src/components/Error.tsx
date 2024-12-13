import { ReactNode } from "react";

type ErrorProps = {
  children: ReactNode;
};

export default function Error({ children }: ErrorProps) {
  return (
    <p className="my-4 text-red-600 font-bold uppercase text-sm">{children}</p>
  );
}
