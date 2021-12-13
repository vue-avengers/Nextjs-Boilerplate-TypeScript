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
        <button className="close">✖</button>
        <button className="accept" onClick={promptToInstall}>
          PWA İnstall App
        </button>
      </div>
    </div>
  ) : null;
}
