/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';

import { mortgageLoanApiService } from '../../services';
import { useAddToHomescreenPrompt } from '@/hooks/use-add-to-home-screen-prompt';

export function PwaAddToHomescreen() {
  const [prompt, promptToInstall, isInstalled] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = useState(false);

  async function fetchData() {
    const response = await mortgageLoanApiService.getAllMortgageLoan();
    // eslint-disable-next-line no-console
    console.log(response.data);
  }

  useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
    fetchData();
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
