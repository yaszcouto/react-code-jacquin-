export interface ModalCustomizadaPropS{
    mostrarModalQuando: boolean;
    aoCancelar: () => void;
    titulo: string;
    corpo: string | React.ReactNode;
    textoBotaoCofirmacao?: string;
    textoBotaoCancelamento?: string;
    aoConfirmar?:() => void;
    customizarBotoes?: boolean;
    exibirConteudoCentralizado?: boolean;
}
