import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { alertActions } from "../../store/alert-slice";

const Alert = () => {
  const props = useSelector((state: IRootState) => state.alert)
  const dispatch = useDispatch();

  const classname = `alert alert-${
    props.type ? props.type : "error"
  } shadow-lg fixed ${props.pos} max-w-4xl inset-x-0 mx-auto duration-500 ease-in-out transform -translate-y-full`;
  let d =
    "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z";
  if (props.type === "info")
    d = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  if (props.type === "success")
    d = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
  if (props.type === "warning")
    d =
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z";

  const closeHandler = () => {
    dispatch(alertActions.hide());
  }
  return (
    <div className={classname} onClick={closeHandler}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={d}
          />
        </svg>
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default Alert;
