export const actions = {
  USER_DETAIL: "USER_DETAIL"
};

export function userDetail(payload) {
  return {
    type: actions.USER_DETAIL,
    payload
  };
}
