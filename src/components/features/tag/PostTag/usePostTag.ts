import { ChangeEventHandler, FormEvent, useCallback } from 'react';
import { usePostTagAndCleanUp, useUpdateCurrentTag } from '../store';

export const usePostTag = () => {
  const postTag = usePostTagAndCleanUp();
  const updateCurrentTag = useUpdateCurrentTag();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => updateCurrentTag({ name: e.currentTarget.value }),
    [updateCurrentTag],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      postTag();
    },
    [postTag],
  );

  return {
    handleInputChange,
    handleSubmit,
  };
};
