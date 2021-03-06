import React from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
// import styled from 'styled-components'
export const LoadingIndicator = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    <>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000} //5 secs
        />
      )}
    </>
  );
};
