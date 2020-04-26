export const UPDATE_TEMPLATE_SETTING = "ADMIN.UPDATE_SETTING";
export const UPDATE_TEMPLATE_SETTING_SUCCESS = "ADMIN.UPDATE_SETTING_SUCCESS";
export const UPDATE_TEMPLATE_SETTING_FAILURE = "ADMIN.UPDATE_SETTING_FAILURE";

export interface UpdateTemplateSettingAction {
  type: typeof UPDATE_TEMPLATE_SETTING;
  payload: Record<string, File>;
}

interface UpdateTemplateSettingSuccessAction {
  type: typeof UPDATE_TEMPLATE_SETTING_SUCCESS;
  result: boolean;
}

interface UpdateTemplateSettingFailureAction {
  type: typeof UPDATE_TEMPLATE_SETTING_FAILURE;
}

export const updateTemplateSetting = (
  payload: Record<string, File>
): UpdateTemplateSettingAction => ({
  type: UPDATE_TEMPLATE_SETTING,
  payload,
});

export const updateTemplateSettingSuccess = (
  result: boolean
): UpdateTemplateSettingSuccessAction => ({
  type: UPDATE_TEMPLATE_SETTING_SUCCESS,
  result,
});

export const updateTemplateSettingFailure = (): UpdateTemplateSettingFailureAction => ({
  type: UPDATE_TEMPLATE_SETTING_FAILURE,
});
