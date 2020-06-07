/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */
export const messages = {
  sucessFinishOrder: 'Seu pedido foi realizado com sucesso!',
  errorAtendimentoRestaurante: 'Restaurante fechado.',
  errorValidarTrocoNaN: 'Informe um valor númerico no campo troco.',
  errorValidarTrocoLessThenTotal:
    'Informe um valor no troco maior que o valor total do pedido.',
  errorValidateSizeBag:
    'Inclua pelo menos um item na sua sacola para finalizar o pedido.',
  errorValidateTotal: (param) =>
    `O pedido mínimo para o restaurante é de ${param}.`,

  errorGetPedidosList:
    'Opss... Não conseguimos acessar sua lista de pedidos. Verifique sua conexão com a internet.',

  errorValidadeAddress: (param) =>
    `Informe o ${param} no seu endereço de entrega.`,

  errorCepInvalido: 'Ainda não fazemos entrega para cep informado',

  successSendSugestRestaurant:
    'Prontinho já anotamos sua sugestão! Muito obrigado.',
  successSendFormPartner:
    'Obrigado! Em breve nossa equipe entrará em contato com você!',
  warningBeApartner:
    'Ao processeguir, aceito que a Smartfome entre em contato comigo por telefone, e-mail ou Whatsapp (incluindo mensagens automáticas para fins comerciais).',

  errorAccessServer:
    'Ops... Ocorreu algum erro, verifique se você esta conectado a internet',

  requiredField: 'Campo obrigatório.',

  invalidEmail: 'Informe um e-mail válido.',
};
