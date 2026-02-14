import { useState } from 'react';
import { useLoveLetterConfig } from '../state/useLoveLetterConfig';
import { generateShareUrl } from '../utils/shareQueryParams';
import { toast } from 'sonner';

export function useShareLink() {
  const { fromName, toName } = useLoveLetterConfig();
  const [isCopying, setIsCopying] = useState(false);

  const copyShareLink = async () => {
    setIsCopying(true);
    try {
      const shareUrl = generateShareUrl(fromName, toName);
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Share link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy link');
    } finally {
      setIsCopying(false);
    }
  };

  return { copyShareLink, isCopying };
}
