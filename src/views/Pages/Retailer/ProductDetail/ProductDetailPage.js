// @material-ui/core components
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { appUrl } from "routing";
import Cached from "@material-ui/icons/Cached";

import { PageContainer } from "components/PageContainer";
import { useLocalStorage } from "hooks/useLocalStorage";
import { getPublicCampaignByIdApi } from "provider/apis";
import { Campaign } from "provider/models";
import { getAgencyIdSelector } from "provider/selectors";
import { Notfound } from "views/Pages/Notfound/NotFound";

import { ProductDetail } from "./components/ProductDetail";
import { Placeholder } from "./components/Placeholder";

function ProductDetailPage(props) {
  let history = useHistory();
  const [campaignData, setCampaignData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const { agencyId } = props;
  const [cart, setCart] = useLocalStorage("cart", null);
  const BackupComponent = error ? <Notfound /> : null;

  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    const fetch = async () => {
      const data = await getPublicCampaignByIdApi(id);
      setIsLoad(false);
      if (data.error) {
        setError(true);
      } else {
        const campaignDetail = new Campaign(data.campaign);
        setCampaignData(campaignDetail.toPublicCampaignDetailItem(agencyId));
      }
    };
    fetch();
  }, [agencyId]);

  const handleProcessCampaign = (quantity) => {
    if (agencyId) {
      setCart({
        campaign: campaignData,
        quantity,
        retailerId: agencyId,
      });
      history.push("/admin/checkout");
    } else {
      history.push(`${appUrl.loginPage}`);
    }
  };

  if (isLoad) {
    return <Cached className="loading" color="action" />;
  }

  return (
    <PageContainer>
      <Placeholder
        data={campaignData}
        mainComponent={
          <ProductDetail
            campaignData={campaignData}
            handleProcessCampaign={handleProcessCampaign}
          />
        }
        backupEmptyComponent={BackupComponent}
      />
    </PageContainer>
  );
}

const mapStateToProps = (state) => ({
  agencyId: getAgencyIdSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailPage);
