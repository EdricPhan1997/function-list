import React, { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";

import Lecturer from "./pages/lecturer";
import { recoilState, LocalStorageKey } from "./dataStructure";
import { setSession } from "./utils/setSession";

const App = () => {
  const appState = useRecoilValue(recoilState);
  const initialize = useCallback(async () => {
    setSession(appState);
  }, [appState]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div>
      <h1>Lecturer</h1>
      <Lecturer />
    </div>
  );
};

export default App;
