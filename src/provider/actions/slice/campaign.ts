import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Campaign, CampaignAdmin } from "provider/models";

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
    updateCampaignStatus: {
      reducer(state) {},
      prepare(campaignId: string, status: boolean) {
        return { payload: { campaignId, status } };
      },
    },
    updateCampaignStatusSuccess: {
      reducer(
        state,
        action: PayloadAction<{ campaignId: string; status: boolean }>
      ) {
        const newList = [...state.list].map((item) => {
          if (item.id === action.payload.campaignId) {
            return item.updateStatus(action.payload.status);
          } else {
            return item;
          }
        });
        state.list = newList;
      },
      prepare(campaignId: string, status: boolean) {
        return { payload: { campaignId, status } };
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

export const updateCampaignStatus = (campaignId: string, status: boolean) => {
  return adminCampaignSlice.actions.updateCampaignStatus(campaignId, status);
};

export interface PublicCampaignState {
  list: Campaign[];
}

const emptyPublicCampaignList = [] as Campaign[];
export const initialPublicCampaign: PublicCampaignState = {
  list: emptyPublicCampaignList,
};

export const publicCampaignSlice = createSlice({
  name: "publicCampaign",
  initialState: initialPublicCampaign as PublicCampaignState,
  reducers: {
    getPublicCampaign: {
      reducer(state) {},
      prepare() {
        return { payload: {} };
      },
    },
    getPublicCampaignSuccess: {
      reducer(state, action: PayloadAction<Campaign[]>) {
        state.list = action.payload;
      },
      prepare(list: Campaign[]) {
        return { payload: list };
      },
    },
  },
});

export const publicCampaignReducer = publicCampaignSlice.reducer;

export const getPublicCampaign = () => {
  return publicCampaignSlice.actions.getPublicCampaign();
};
