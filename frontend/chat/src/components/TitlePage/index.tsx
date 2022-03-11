import { useRef, useEffect } from 'react'

function useDocumentTitle(title: string) {
  const defaultTitle = 'Chat - '

  useEffect(() => {
      document.title = defaultTitle + title;
  }, [title]);
}

export default useDocumentTitle