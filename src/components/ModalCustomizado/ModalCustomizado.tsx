import { Modal } from 'react-bootstrap'
import './ModalCustomizado.css'
import type { ModalCustomizadaPropS } from '../../types/ModalCustomizadaProps'


    export default function ModalCustomizado({ mostrarModalQuando,aoCancelar,exibirConteudoCentralizado,titulo,corpo,customizarBotoes,
        textoBotaoCancelamento,textoBotaoCofirmacao,aoConfirmar}: ModalCustomizadaPropS) {
  return (
    <Modal 
    style={{ fontFamily: "Bellota, system-ui" }}
    show={ mostrarModalQuando }
    onHide={aoCancelar}
    centered={exibirConteudoCentralizado}
    >
        <Modal.Header>
            <Modal.Title>{ titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {corpo}
            </Modal.Body>
        <Modal.Footer>
            {
                customizarBotoes && (
                    <button onClick={aoCancelar} className='botaoModalCancelar'>
                        { textoBotaoCancelamento}
                    </button>
                )
            }
          <button onClick={customizarBotoes? aoConfirmar : aoCancelar} className='botaoSubmitModal'>
            { customizarBotoes? textoBotaoCofirmacao : "OK"}
          </button>
        </Modal.Footer>

    </Modal>
  
  )
}
