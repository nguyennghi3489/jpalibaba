import queryString from "query-string";
import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import moment, { Moment } from "moment";
import { useLocation } from "react-router";
import * as Yup from "yup";

// @material-ui/core components
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FilterList from "@material-ui/icons/FilterList";
import { Cached } from "@material-ui/icons";
import { enhanceListWithAllOption, enhanceUrlWithPagination } from "helpers";
import { DEFAULT_CAMPAIGN_PER_PAGE, categoryOptions, countryOptions } from "constant";

import { getPublicCampaignsApi } from "provider/apis";
import { Campaign, CampaignResponse, CampaignListResponse } from "provider/models";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import { FDatePicker } from "components/Form/FDatePicker";
import { FInput } from "components/Form/FInput";
import { FSelect } from "components/Form/FSelect";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import JPProductItem from "views/Components/Product/JPProductItem";

import styles from "assets/jss/material-dashboard-pro-react/views/searchPageStyle.js";

const useStyles = makeStyles(styles as any);

interface SearchFields {
  name: string;
  category?: string;
  origin?: string;
  fromPrice?: number;
  toPrice?: number;
  fromDate?: Moment;
  toDate?: Moment;
}

const initialSearchFields: SearchFields = {
  name: "",
  category: undefined,
  origin: undefined,
  fromPrice: undefined,
  toPrice: undefined,
  fromDate: undefined,
  toDate: undefined,
};

const ITEM_PER_PAGE = 10
const categoryList = enhanceListWithAllOption(categoryOptions)
const originList = enhanceListWithAllOption(countryOptions)

export default function SearchPage() {
  const formikForm = useRef(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loadmoreActive, setLoadmoreActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [initialValues, setInitialValues] = useState<SearchFields>(
    initialSearchFields
  );
  const classes = useStyles();

  const beginSearchWithQuery = (query: string) => {
      setOffset(0)
      setLoading(true)
      setSearchQuery(query)
  }

  const endSearchUpdateData = (data: CampaignListResponse) => {
    const campaigns = data.campaigns.entities.map(
      (item: CampaignResponse) => new Campaign(item)
    );
    setLoading(false);
    setTotal(data.campaigns?.totalCount ?? 0)
    setCampaigns(campaigns);
  }


  useEffect(() => {
    const fetchCampaigns = async () => {
      beginSearchWithQuery(location.search)
      const paginationQuery = enhanceUrlWithPagination(location.search, offset, ITEM_PER_PAGE)
      const data = await getPublicCampaignsApi(paginationQuery);
      endSearchUpdateData(data)
      const input = queryString.parse(location.search);
      setInitialValues({ ...initialValues, ...input });
    };
    fetchCampaigns();
  }, [location.search]);

  const fetchCampaigns = async (searchFields: any) => {
    const query = `?${queryString.stringify(searchFields)}`;
    beginSearchWithQuery(query)
    const paginationQuery = enhanceUrlWithPagination(query, offset, ITEM_PER_PAGE)
    const data = await getPublicCampaignsApi(paginationQuery);
    endSearchUpdateData(data)
  };

  const loadMore = async () => {
    const newQuery = enhanceUrlWithPagination(searchQuery, offset + ITEM_PER_PAGE, ITEM_PER_PAGE)
    setOffset(offset + ITEM_PER_PAGE)
    setLoadmoreActive(true)
    const data = await getPublicCampaignsApi(newQuery);
    setLoadmoreActive(false)
    const moreCampaigns = data.campaigns.entities.map(
      (item: CampaignResponse) => new Campaign(item)
    );
    setCampaigns([...campaigns, ...moreCampaigns]);
  }
  
  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <FilterList />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Search Your Items</h4>
            </CardHeader>
            <CardBody>
              <Formik
                innerRef={formikForm}
                enableReinitialize
                initialValues={initialValues}
                validationSchema={Yup.object({
                  fromPrice: Yup.number().test('compare', 
                    'fromPrice must lesser than toPrice', 
                    function(fromPrice) { 
                      return fromPrice ? fromPrice > this.parent.toPrice : true
                    }),
                  toPrice: Yup.number().test('compare', 
                    'toPrice must larger than fromPrice', 
                    function(toPrice) { 
                      return toPrice ? toPrice < this.parent.fromPrice : true
                    }),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  fetchCampaigns({
                    ...values,
                    fromDate: values.fromDate?.toISOString(),
                    toDate: values.toDate?.toISOString(),
                  });
                }}
              >
                <Form>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <FInput
                        label="Name"
                        name="name"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>

                    <GridItem xs={12} sm={3}>
                      <FSelect
                        label="Category"
                        name="category"
                        type="text"
                        placeholder=""
                        options={categoryList}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <FSelect
                        label="Origin"
                        name="origin"
                        type="text"
                        placeholder=""
                        options={originList}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={3}>
                      <FInput
                        label="From Price"
                        name="fromPrice"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <FInput
                        label="To Price"
                        name="toPrice"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                      <FDatePicker
                        label="From Date"
                        name="fromDate"
                        type="text"
                        placeholder=""
                        isValidDate={(date: any) => {
                          if (
                            formikForm.current &&
                            formikForm.current.values &&
                            formikForm.current.values.toDate
                          )
                            return (
                              !!date.isSameOrAfter(moment(), "day") &&
                              !!date.isSameOrBefore(
                                formikForm.current.values.toDate,
                                "day"
                              )
                            );
                          return date.isSameOrAfter(moment(), "day");
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                      <FDatePicker
                        label="To Date"
                        name="toDate"
                        type="text"
                        placeholder=""
                        isValidDate={(date: any) => {
                          if (
                            formikForm.current &&
                            formikForm.current.values &&
                            formikForm.current.values.startDate
                          )
                            return (
                              date.isSameOrAfter(moment(), "day") &&
                              date.isSameOrAfter(
                                formikForm.current.values.startDate,
                                "day"
                              )
                            );
                          return date.isSameOrAfter(moment(), "day");
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <Button variant="contained" color="primary" className={classes.actionButton} type="submit">
                        Submit
                      </Button>
                    </GridItem>
                  </GridContainer>
                </Form>
              </Formik>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <br />
      {loading && <Cached className="loading" color="action"></Cached>}
      {campaigns && campaigns.length > 0 ? (
        <>
          <GridContainer>
            {campaigns
              .map((item: Campaign) => {
                return item.toPublicCampaignItem("agencyId");
              })
              .map((item) => (
                <GridItem xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <JPProductItem data={item} />
                </GridItem>
              ))}
          </GridContainer>
          {total > campaigns.length && <GridContainer justify="center">
              {loadmoreActive ? <Cached className="loading" color="action"></Cached>: <Button variant="contained" onClick={loadMore}>Load More</Button>}
          </GridContainer> }
        </>
      ) : (
        <GridContainer justify="center">
          <Typography>Not Found any campaign match with your search</Typography>
        </GridContainer>
      )}
    </div>
  );
}
