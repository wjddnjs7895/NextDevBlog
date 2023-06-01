export const SET_CATEGORY = "setting/SET_CATEGORY" as const;
export const SET_POST = "setting/SET_ISPOST" as const;

export function setCategory(index: number) {
  return { type: SET_CATEGORY, payload: index };
}

export function setPost(isPost: boolean) {
  return { type: SET_POST, payload: isPost };
}

type SettingAction =
  | ReturnType<typeof setCategory>
  | ReturnType<typeof setPost>;

interface SettingState {
  index: number;
  isPost: boolean;
}

const initialState: SettingState = {
  index: 0,
  isPost: false,
};

function setting(
  state: SettingState = initialState,
  action: SettingAction
): SettingState {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, index: action.payload };
    case SET_POST:
      return { ...state, isPost: action.payload };
    default:
      return state;
  }
}

export default setting;
