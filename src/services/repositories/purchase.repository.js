import api from "../config";

export default {
  listPurchases: () =>
    api({
      method: "GET",
      url: "/sale-filter?now=true&not_type=local",
    }),
  getPurchase: (id) =>
    api({
      method: "GET",
      url: `/sale/${id}`,
    }),
  updateStatus: (id, status) =>
    api({
      method: "PUT",
      url: `/sale/${id}`,
      data: { status },
    }),
};
