import { useEffect, useState } from "react";
import useHttp from "./useHttp";

const useHttpValidation = (
  value: string,
  valueIsValid: boolean,
  defaultValue?: string
) => {
  const { isLoading: isLoadingVal, checkIfTitleAvailable } = useHttp();
  const [availableMessage, setAvailableMessage] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value === defaultValue) {
        setAvailableMessage("");
        return;
      }
      if (valueIsValid) {
        checkIfTitleAvailable(value, setAvailableMessage);
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
