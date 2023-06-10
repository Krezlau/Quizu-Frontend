import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { alertActions } from "../store/alert-slice";
import { IRootState } from "../store/index";

const useAlert = () => {
  const isActive = useSelector((state: IRootState) => state.alert.isActive);
  const dispatch = useDispatch();

  const showAlert = (type: string, text: string) => {
    if (!isActive) {
      dispatch(alertActions.show({ type, text }));
    }
    if (isActive) {
      dispatch(alertActions.hide());
      setTimeout(() => {
        dispatch(alertActions.show({ type, text }));
      }, 200);
    }
  };

  return showAlert;
};

export default useAlert;
