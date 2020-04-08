import validator from 'validator';
import _debounce from 'lodash/debounce';
import { useState, useCallback } from 'react';

interface TextHookOption {
  isEmail?: boolean;
  isMobilePhone?: boolean;
  delayTime?: number;
}

const defaultOption: TextHookOption = {
  isEmail: false,
  isMobilePhone: false,
  delayTime: 300,
};

const useText = <T extends string>(
  initialState: T,
  options: TextHookOption = defaultOption,
): [T, (text: T) => void] => {
  const { isEmail = false, isMobilePhone = false, delayTime = 300 } = options;
  const [text, setText] = useState<T>(initialState);

  const handleTextChange = useCallback(
    (textInput: T): void => {
      if (isEmail && validator.isEmail(textInput)) {
        return setText(textInput);
      }

      if (isMobilePhone && validator.isMobilePhone(textInput, 'ko-KR')) {
        return setText(textInput);
      }

      return setText(textInput);
    },
    [isEmail, isMobilePhone],
  );

  const debounedTextHandler = _debounce(handleTextChange, delayTime);

  return [text, debounedTextHandler];
};

export default useText;
