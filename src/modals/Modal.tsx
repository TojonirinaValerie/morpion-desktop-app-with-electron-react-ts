import { ReactNode } from "react";
import { ModalBack, AlertContainerStyle as ModalContainerElement } from "../styles/MultiplayerStyles";

interface ModalContainerProps {
  children: ReactNode,
  isShow: boolean
}

const ModalContainer = ({children, isShow}: ModalContainerProps) => {

  return (
    <>
      {isShow && <ModalBack />}
      <ModalContainerElement className={ isShow ? 'modal-show' : 'modal-hide'}>
        {children}
      </ModalContainerElement>
    </>
   );
}
 
export default ModalContainer;