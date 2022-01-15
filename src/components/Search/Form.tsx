import React, { ReactElement } from 'react';
import { FormProps } from '../../types/searchTypes';

export const Form: React.FC<FormProps> = ({
  placeHolder,
  buttonText,
  onSubmitHandler,
}): ReactElement => {
  let input: HTMLInputElement;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitHandler(input.value);
    input.value = '';
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        ref={(node) => {
          input = node as HTMLInputElement;
        }}
        className="search-input-text"
        placeholder={placeHolder}
      />
      <button type="submit" className="search-btn-submit">
        {buttonText}
      </button>
    </form>
  );
};
