import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useQueryParamState(
  searchParamName: string
): [string, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') {
      return '';
    }

    const searchParams = new URL(window.location.toString()).searchParams;
    const searchParamValue = searchParams.get(searchParamName);

    return searchParamValue ?? '';
  });

  useEffect(() => {
    const newUrl = new URL(window.location.toString());

    if (value) {
      newUrl.searchParams.set(searchParamName, value ?? '');
    } else {
      newUrl.searchParams.delete(searchParamName);
    }

    window.history.replaceState(window.history.state, '', newUrl.toString());
  }, [value, setValue]);

  return [value, setValue];
}
