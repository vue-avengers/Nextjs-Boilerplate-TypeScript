import { useState, useEffect } from 'react';

interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function useAddToHomescreenPrompt(): [
  IBeforeInstallPromptEvent | null,
  () => void,
  boolean
] {
  const [prompt, setState] = useState<IBeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  const promptToInstall = () => {
    if (prompt) {
      return prompt.prompt();
    }
    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event'
      )
    );
  };

  useEffect(() => {
    const ready = (e: IBeforeInstallPromptEvent) => {
      e.preventDefault();
      setState(e);
    };

    window.addEventListener('beforeinstallprompt', ready as any);

    return () => {
      window.removeEventListener('beforeinstallprompt', ready as any);
    };
  }, []);

  useEffect(() => {
    const onInstall = () => {
      setIsInstalled(true);
    };

    window.addEventListener('appinstalled', onInstall as any);

    return () => {
      window.removeEventListener('appinstalled', onInstall as any);
    };
  }, []);

  return [prompt, promptToInstall, isInstalled];
}
