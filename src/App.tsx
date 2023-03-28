import React, { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";

import Lecturer from "./pages/lecturer";
import Upload from "./pages/upload";
import { recoilState, LocalStorageKey } from "./dataStructure";

const App = () => {
  const appState = useRecoilValue(recoilState);

  console.log(appState);

  useEffect(() => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState || "") // convert JavaScript Object to string
    );
  }, [appState]);

  return (
    <div>
      <h1>Lecturer</h1>
      <Lecturer />
      <h1>Upload</h1>
      <Upload />
    </div>
  );
};

export default App;
