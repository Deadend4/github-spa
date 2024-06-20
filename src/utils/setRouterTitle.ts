import { useEffect } from 'react';

export default function SetDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
