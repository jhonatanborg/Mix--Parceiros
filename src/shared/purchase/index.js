export function statusPurchase(statePurchase) {
  let status;
  switch (statePurchase) {
    case "Pendente":
      status = {
        title: "Pendente",
        color: { primary: "#FFFDE7", secondary: "#fb8c00" },
        action: "Confirmar Pedido",
        statusUpdate: "Confirmado",
        status: statePurchase,
      };
      break;
    case "Confirmado":
      status = {
        title: "Confirmado",
        color: { primary: "#F3E5F5", secondary: "#9c27b0" },
        action: "Despachar",
        statusUpdate: "Saiu para Entrega",
        status: statePurchase,
      };
      break;
    case "Saiu para Entrega":
      status = {
        title: "Saiu para Entrega",
        color: { primary: "#ebf2ff", secondary: "#578fea" },
        action: "Finalizar",
        statusUpdate: "Entregue",
        status: statePurchase,
      };
      break;
    case "Pronto":
      status = {
        title: "Pronto",
        color: { primary: "#E3F2FD", secondary: "#03a9f4" },
        action: "Finalizar",
        statusUpdate: "Entregue",
        status: statePurchase,
      };
      break;
    case "Entregue":
      status = {
        title: "Entregue",
        color: { primary: "#E8F5E9", secondary: "#3adb76" },
        action: "Pedido entregue",
        status: statePurchase,
      };
      break;
    case "Cancelado":
      status = {
        title: "Pedido Cancelado",
        color: { primary: "#FFEBEE", secondary: "#f44336" },
        action: "Pedido Cancelado",
        status: statePurchase,
      };
      break;
    case "Finalizado":
      status = {
        title: "Finalizado",
        color: { primary: "#E0F2F1", secondary: "#8BC34A" },
        action: "Pedido Finalizado",
        status: statePurchase,
      };
      break;
    default:
      status = {
        title: "Finalizado",
        color: { primary: "#E0F2F1", secondary: "#8BC34A" },
        status: statePurchase,
      };
      break;
  }
  return status;
}
