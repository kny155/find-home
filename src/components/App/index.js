import React from "react";

import { Theme } from "../Theme";

import { ToolBar } from "../ToolBar";
import { Main } from "../Main";
import { SimpleBottomNavigation } from "../BottomNavigation";

export const App = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Theme>
      <ToolBar setValue={setValue} />
      <Main value={value} />
      <SimpleBottomNavigation value={value} setValue={setValue} />
    </Theme>
  );
};
