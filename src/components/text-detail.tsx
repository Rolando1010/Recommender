import { useRef } from "react";
import Modal, { getInititalModalRef } from "./modal";

const TextDetail = ({ text }: { text: string }) => {
    const modalRef = useRef(getInititalModalRef());

    if(!text) return null;

    return (<>
        <div>
            <button onClick={() => modalRef.current.open()}>Ver respuesta de IA</button>
        </div>
        <Modal modalRef={modalRef} title="Respuesta de IA">
            <p>{text.trim()}</p>
        </Modal>
        <style jsx>{`
            div {
                display: flex;
                justify-content: flex-end;
            }

            button {
                background-color: transparent;
                border: 0px;
                color: var(--font-color-1);
                font-size: 16px;
                cursor: pointer;
                text-decoration: underline;
            }

            button:hover, button:focus {
                color: var(--primary-1);
            }
            
            p {
                margin: 0;
                word-break: break-all;
                white-space: pre-line
            }
        `}</style>
    </>);
}

export default TextDetail;