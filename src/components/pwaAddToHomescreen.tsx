import { useState, useEffect } from 'react';

import { useAddToHomescreenPrompt } from '../hooks/useAddToHomescreenPrompt';

export function PwaAddToHomescreen() {
  const [prompt, promptToInstall, isInstalled] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = useState(false);

  useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
    const installApp1: any = document.querySelector('#installApp');
    console.log(installApp1);
    if (installApp1) {
      installApp1.click();
    }
  }, [prompt]);
  const hide = () => setVisibleState(false);

  if (!isVisible) {
    return <div />;
  }

  // installApp1.click();

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
