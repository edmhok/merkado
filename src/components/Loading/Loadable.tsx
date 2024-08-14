import React, { Suspense } from "react";
import Fullscreen from "./Fullscreen";

export default function Loadable(Component: React.FC) {
  return (props: any) => (
    <Suspense fallback={<Fullscreen />}>
      <Component {...props} />
    </Suspense>
  );
}
