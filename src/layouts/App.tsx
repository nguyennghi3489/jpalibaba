import SharingModal from "components/SharingModal";
import { verifyToken } from "helpers";
import { useGetNotification } from "hooks/useGetNotification";
import { ModalType } from "provider/actions/modal";
import { authenticationSlice } from "provider/actions/slice/authentication";
import { notificationSlice } from "provider/actions/slice/notification";
import { AppState } from "provider/reducer";
import { tokenSelector } from "provider/selectors";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, useLocation, withRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  recheckToken: Function;
  isOpen: boolean;
  text: string;
  type: ModalType;
  updateNotification: Function;
  token: string;
  saveBackLink: Function;
}

const App = ({
  children,
  isOpen,
  recheckToken,
  history,
  token,
  updateNotification,
  saveBackLink,
}: Props & RouteComponentProps) => {
  const { value } = useGetNotification();
  const previousRoute = useRef();
  const location = useLocation();

  useEffect(() => {
    if (!token && !location.pathname.includes("login")) {
      saveBackLink(location.pathname);
    }
  }, [location, token]);

  useEffect(() => {
    updateNotification(value);
  }, [value]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (verifyToken(token)) {
      recheckToken({ token, location: history.location });
    } else {
      localStorage.removeItem("token");
    }
  }, []);
  return (
    <>
      {children}
      {isOpen && <SharingModal />}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isOpen: state.modal.isOpen,
  token: tokenSelector(state),
});

const ConnectedLoginPage = connect(
  mapStateToProps,
  {
    recheckToken: authenticationSlice.actions.recheckToken,
    updateNotification: notificationSlice.actions.updateNotification,
    saveBackLink: authenticationSlice.actions.saveBackLink,
  }
)(withRouter(App));

export default ConnectedLoginPage;
