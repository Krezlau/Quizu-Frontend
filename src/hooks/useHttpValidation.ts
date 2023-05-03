import { useEffect, useState } from "react";
import useHttp from "./useHttp";

const useHttpValidation = (
  value: string,
  valueIsValid: boolean,
  ifUsername: boolean,
  defaultValue?: string
) => {
  const { isLoading: isLoadingVal, checkIfTitleAvailable, checkIfUsernameAvailable } = useHttp();
  const [availableMessage, setAvailableMessage] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value === defaultValue) {
        setAvailableMessage("");
        return;
      }
      if (valueIsValid && !ifUsername) {
        checkIfTitleAvailable(value, setAvailableMessage);
      }
      if (valueIsValid && ifUsername) {
        checkIfUsernameAvailable(value, setAvailableMessage);
      }
      if (!valueIsValid) {
        setAvailableMessage("");
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  return { isLoadingVal, availableMessage };
};

export default useHttpValidation;
