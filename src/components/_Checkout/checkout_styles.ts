import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root {
        background-color: #fafafa;
    }
`;

export const GoBackContainer = styled.div`
  margin-inline: 25px;
  margin-top: 50px;
  span {
    cursor: pointer;
  }
  @media (min-width: 1100px) {
    width: 1100px;
    margin: auto;
    padding-top: 50px;
  }
`;

export const MainContainer = styled.div`
  @media (min-width: 1100px) {
    height: 1100px;
  }
`;

export const EMoneyContainer = styled.div`
  @media (min-width: 765px) {
    display: flex;
    div {
      width: 100%;
      margin-right: 15px;
    }
    .emoney-pin-container {
      margin: 0;
    }
  }
`;

export const PaymentDetailsLabel = styled.label`
  margin: 0;
  font-size: 14px;
  margin-left: 17px;
  font-weight: 700;
  width: 100%;
  cursor: pointer;
`;

export const CashOnDelivery = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
`;

export const Error = styled.p`
  margin: 0;
  font-size: 12px;
  color: #cd2c2c;
  font-weight: 500;
`;

export const PaymentMethodContainer = styled.div`
  width: 50%;
  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #cfcfcf;
  padding: 15px;
  border-radius: 8px;
  margin-top: 5px;
  &:hover {
    border: 1px solid #d87d4a;
  }
`;

export const RadioInput = styled.input`
  border: 1px solid #cfcfcf;
  padding: 15px;
  border-radius: 8px;
  width: 18px;
  height: 18px;
  margin: 0;
  box-sizing: border-box;
  accent-color: #d87d4a;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid #cfcfcf;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5px;
  outline: none;
  &:focus {
    border: 1px solid #d87d4a;
  }
`;

export const BillingDetailsContainer = styled.div`
  width: 100%;
`;

export const BillingDetails = styled.div`
  @media (min-width: 765px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
    div {
      margin: 0 !important;
    }
  }
`;

export const ShippingInfo = styled.div`
  @media (min-width: 765px) {
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
    div {
      margin: 0 !important;
    }
  }
`;

export const ShippingInfoContainer = styled.div`
  width: 100%;
  margin-block: 35px;
`;

export const PaymentDetails = styled.div`
  @media (min-width: 765px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const PaymentDetailsContainer = styled.div`
  width: 100%;
  margin-top: 35px;
`;

export const CheckoutContainer = styled.form`
  padding-inline: 25px;
  background-color: white;
  border-radius: 8px;
  margin-block: 40px;
  padding-bottom: 30px;
  @media (min-width: 1100px) {
    width: 65%;
    margin: 0;
    margin-top: 50px;
    height: 100%;
  }
`;

export const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  margin-inline: 25px;
  @media (min-width: 1100px) {
    width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;
