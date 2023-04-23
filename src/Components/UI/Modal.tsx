import ReactDOM from "react-dom"

interface IModalProps {
  title: string;
  text: string;
  buttonFunc: () => void;
}

const ModalComponent: React.FC<IModalProps> = (props) => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.title}</h3>
          <p className="py-4">{props.text}</p>
          <div className="modal-action flex flex-row justify-between">
            <label htmlFor="my-modal-6" className="btn">
              Cancel
            </label>
            <button className="btn btn-primary" onClick={props.buttonFunc}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Modal: React.FC<IModalProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalComponent
          text={props.text}
          title={props.title}
          buttonFunc={props.buttonFunc}
        />,
        document.getElementById("modal")!
      )}
    </>
  );
};

export default Modal;
