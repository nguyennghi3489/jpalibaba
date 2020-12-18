import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CampaignAdmin } from "provider/models";

interface AdminCampaignPayload {
  agencyId: string;
  productId: undefined | string;
}

const emptyCampaignAdminList = [] as CampaignAdmin[];
export interface AdminCampaignState {
  list: CampaignAdmin[];
}

export const initialState: AdminCampaignState = {
  list: emptyCampaignAdminList,
};

export const adminCampaignSlice = createSlice({
  name: "campaignAdmin",
  initialState: initialState as AdminCampaignState,
  reducers: {
    getAdminCampaign: {
      reducer(state) {},
      prepare(agencyId: string, productId: undefined | string) {
        return { payload: { agencyId, productId } };
      },
    },
    getAdminCampaignSuccess: {
      reducer(state, action: PayloadAction<CampaignAdmin[]>) {
        state.list = action.payload;
      },
      prepare(list: CampaignAdmin[]) {
        return { payload: list };
      },
    },
  },
});

export const adminCampaignReducer = adminCampaignSlice.reducer;

export const getAdminCampaign = (
  agencyId: string,
  productId: undefined | string
) => {
  return adminCampaignSlice.actions.getAdminCampaign(agencyId, productId);
};
