import { useState } from "react";
import { Layout } from "../Layout";
import { MarvelView } from "../views/MarvelView";

export const Root = () => {
  const [currentHover, setCurrentHover] = useState<
    string | null
  >(null);

  return (
    <Layout hover={currentHover}>
      <MarvelView
        hover={{
          set: setCurrentHover,
          current: currentHover,
        }}
      />
    </Layout>
  );
};
