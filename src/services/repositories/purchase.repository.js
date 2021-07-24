import api from "../config";

export default {
  listPurchases: (status) =>
    api({
      method: "get",
      url: `/sale-filter?status=${status}&&not_type=local`,
    }),
  updateStatus: (id, status) =>
    api({
      method: "put",
      url: `/sale-filter/${id}`,
      data: { status },
    }),
};
