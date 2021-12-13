/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';

import { useAddToHomescreenPrompt } from '../hooks/useAddToHomescreenPrompt';

export function PwaAddToHomescreen() {
  const [prompt, promptToInstall, isInstalled] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = useState(false);

  useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);
  const hide = () => setVisibleState(false);

  if (!isVisible) {
    return <div />;
  }

  return prompt && !isInstalled ? (
    <div className="modal">
      <div className="cookiesContent" onClick={hide}>
        <button className="accept" onClick={promptToInstall}>
          HangiKredi'yi Yükle!
        </button>
      </div>
    </div>
  ) : null;
}
