import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const Modal = () => {
   const [open, setOpen] = useRecoilState(modalState);
   return <div></div>;
};

export default Modal;
