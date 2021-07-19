import api from "../config";

export default {
  login: (user) =>
    api({
      method: "POST",
      url: "/admin-session",
      data: user,
    }),
};
