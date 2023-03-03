import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Inputs } from "../../types/CheckoutInputs";
import CheckoutImg from "../../assets/checkout/icon-cash-on-delivery.svg";
import { Background } from "../_Header/Header";
import { CheckoutProps } from "../../types/CheckoutProps";
import Order from "./Order";
import Summary from "./Summary";
import { GoBackContainer } from "../Product";
import { Container } from "../ViewProducts";
import {
  Input,
  Error,
  BillingDetails,
  BillingDetailsContainer,
  CheckoutContainer,
  Label,
  MainContainer,
  ShippingInfo,
  ShippingInfoContainer,
  PaymentMethod,
  PaymentDetailsContainer,
  PaymentDetails,
  PaymentMethodContainer,
  RadioInput,
  PaymentDetailsLabel,
  EMoneyContainer,
  CashOnDelivery,
  GlobalStyle,
} from "./checkout_styles";

export default function Checkout(props: CheckoutProps) {
  const [isClicked, setIsCliked] = useState<boolean>(false);
  const [validations, setValidations] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => {
    setValidations(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { cartProducts, totalPrice, setCartProducts } = props;

  const shippingPrice = 50;

  const handleEmoney = () => {
    setIsCliked(false);
  };

  const handleCashOnDelivery = () => {
    setIsCliked(true);
  };

  const handleGoBack = () => {
    window.history.back();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <MainContainer>
      <GoBackContainer>
        <span onClick={handleGoBack} style={{ opacity: 0.5 }}>
          Go Back
        </span>
      </GoBackContainer>
      <Container>
        <CheckoutContainer id="form" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <h1 style={{ letterSpacing: 1, marginBlock: 25 }}>CHECKOUT</h1>
          </div>
          <BillingDetailsContainer>
            <h4 style={{ color: "#D87D4A", fontSize: 14, marginBottom: 15 }}>
              BILLING DETAILS
            </h4>
            <BillingDetails>
              <div className="name-input-container">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {errors.name ? (
                    <Label style={{ color: "#cd2c2c" }} htmlFor="name">
                      Name
                    </Label>
                  ) : (
                    <Label htmlFor="name">Name</Label>
                  )}
                  {errors.name ? <Error>{errors.name.message}</Error> : null}
                </div>
                <Input
                  style={{ borderColor: errors.name ? "#cd2c2c" : "#CFCFCF" }}
                  type="text"
                  {...register("name", {
                    required: "Wrong format",
                    pattern: {
                      value: /^[A-Za-z\s]*$/,
                      message: "Wrong format",
                    },
                  })}
                  id="name"
                  placeholder="Alexei Ward"
                />
              </div>
              <div style={{ marginTop: 23 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {errors.email ? (
                    <Label style={{ color: "#cd2c2c" }} htmlFor="email">
                      Email Address
                    </Label>
                  ) : (
                    <Label htmlFor="email">Email Address</Label>
                  )}
                  {errors.email ? <Error>{errors.email.message}</Error> : null}
                </div>
                <Input
                  style={{ borderColor: errors.email ? "#cd2c2c" : "#CFCFCF" }}
                  type="text"
                  {...register("email", {
                    required: "Wrong format",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Wrong format",
                    },
                  })}
                  id="email"
                  placeholder="alexei@mail.com"
                />
              </div>
              <div style={{ marginTop: 23 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {errors.phone ? (
                    <Label style={{ color: "#cd2c2c" }} htmlFor="phone">
                      Phone Number
                    </Label>
                  ) : (
                    <Label htmlFor="phone">Phone Number</Label>
                  )}
                  {errors.phone ? <Error>{errors.phone.message}</Error> : null}
                </div>
                <Input
                  style={{ borderColor: errors.phone ? "#cd2c2c" : "#CFCFCF" }}
                  type="text"
                  {...register("phone", {
                    required: "Wrong format",
                    minLength: {
                      value: 10,
                      message: "Wrong format",
                    },
                    pattern: {
                      value: /^[0-9.+-]*$/,
                      message: "Wrong format",
                    },
                  })}
                  id="phone"
                  placeholder="+1 202-555-0136"
                />
              </div>
            </BillingDetails>
          </BillingDetailsContainer>
          <ShippingInfoContainer>
            <h4 style={{ color: "#D87D4A", fontSize: 14, marginBottom: 15 }}>
              SHIPPING INFO
            </h4>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {errors.address ? (
                  <Label style={{ color: "#cd2c2c" }} htmlFor="address">
                    Your Address
                  </Label>
                ) : (
                  <Label htmlFor="address">Your Address</Label>
                )}
                {errors.address ? (
                  <Error>{errors.address.message}</Error>
                ) : null}
              </div>
              <Input
                style={{ borderColor: errors.address ? "#cd2c2c" : "#CFCFCF" }}
                type="text"
                {...register("address", {
                  required: "Wrong format",
                  pattern: {
                    value: /^[A-Za-z0-9\s]*$/,
                    message: "Wrong format",
                  },
                })}
                id="address"
                placeholder="1137 WIlliams Avenue"
              />
            </div>
            <ShippingInfo>
              <div style={{ marginTop: 23 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {errors.zipcode ? (
                    <Label style={{ color: "#cd2c2c" }} htmlFor="zipcode">
                      ZIP Code
                    </Label>
                  ) : (
                    <Label htmlFor="zipcode">ZIP Code</Label>
                  )}
                  {errors.zipcode ? (
                    <Error>{errors.zipcode.message}</Error>
                  ) : null}
                </div>
                <Input
                  style={{
                    borderColor: errors.zipcode ? "#cd2c2c" : "#CFCFCF",
                  }}
                  type="text"
                  {...register("zipcode", {
                    required: "Wrong format",
                    minLength: {
                      value: 5,
                      message: "Wrong format",
                    },
                    maxLength: {
                      value: 5,
                      message: "Wrong format",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Wrong format",
                    },
                  })}
                  id="zipcode"
                  placeholder="10001"
                />
              </div>
              <div style={{ marginTop: 23 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {errors.city ? (
                    <Label style={{ color: "#cd2c2c" }} htmlFor="city">
                      City
                    </Label>
                  ) : (
                    <Label htmlFor="city">City</Label>
                  )}
                  {errors.city ? <Error>{errors.city.message}</Error> : null}
                </div>
                <Input
                  style={{ borderColor: errors.city ? "#cd2c2c" : "#CFCFCF" }}
                  type="text"
                  {...register("city", {
                    required: "Wrong format",
                    pattern: {
                      value: /^[A-Za-z\s]*$/,
                      message: "Wrong format",
                    },
                  })}
                  id="city"
                  placeholder="New York"
                />
              </div>
              <div style={{ marginTop: 23 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {errors.country ? (
                    <Label style={{ color: "#cd2c2c" }} htmlFor="country">
                      Country
                    </Label>
                  ) : (
                    <Label htmlFor="country">Country</Label>
                  )}
                  {errors.country ? (
                    <Error>{errors.country.message}</Error>
                  ) : null}
                </div>
                <Input
                  style={{
                    borderColor: errors.country ? "#cd2c2c" : "#CFCFCF",
                  }}
                  type="text"
                  {...register("country", {
                    required: "Wrong format",
                    pattern: {
                      value: /^[A-Za-z\s]*$/,
                      message: "Wrong format",
                    },
                  })}
                  id="country"
                  placeholder="United States"
                />
              </div>
            </ShippingInfo>
          </ShippingInfoContainer>
          <PaymentDetailsContainer>
            <h4 style={{ color: "#D87D4A", fontSize: 14, marginBottom: 15 }}>
              PAYMENT DETAILS
            </h4>
            <PaymentDetails>
              <p
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: 12,
                  margin: 0,
                }}
              >
                Payment Method
              </p>
              <PaymentMethodContainer>
                <PaymentMethod>
                  <RadioInput
                    onClick={handleEmoney}
                    defaultChecked
                    type="radio"
                    name="payment-choice"
                    id="e-money"
                    placeholder="1137 WIlliams Avenue"
                  />
                  <PaymentDetailsLabel onClick={handleEmoney} htmlFor="e-money">
                    e-Money
                  </PaymentDetailsLabel>
                </PaymentMethod>
                <PaymentMethod style={{ marginTop: 17 }}>
                  <RadioInput
                    onClick={handleCashOnDelivery}
                    type="radio"
                    name="payment-choice"
                    id="cash-on-delivery"
                    placeholder="1137 WIlliams Avenue"
                  />
                  <PaymentDetailsLabel
                    onClick={handleCashOnDelivery}
                    htmlFor="cash-on-delivery"
                  >
                    Cash on Delivery
                  </PaymentDetailsLabel>
                </PaymentMethod>
              </PaymentMethodContainer>
            </PaymentDetails>
            {!isClicked ? (
              <EMoneyContainer>
                <div style={{ marginTop: 23 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {errors.emoneyNumber ? (
                      <Label
                        style={{ color: "#cd2c2c" }}
                        htmlFor="emoneyNumber"
                      >
                        e-Money Number
                      </Label>
                    ) : (
                      <Label htmlFor="emoneyNumber">e-Money Number</Label>
                    )}
                    {errors.emoneyNumber ? (
                      <Error>{errors.emoneyNumber.message}</Error>
                    ) : null}
                  </div>
                  <Input
                    style={{
                      borderColor: errors.emoneyNumber ? "#cd2c2c" : "#CFCFCF",
                    }}
                    type="text"
                    {...register("emoneyNumber", {
                      required: "Wrong format",
                      minLength: {
                        value: 9,
                        message: "Wrong format",
                      },
                      maxLength: {
                        value: 9,
                        message: "Wrong format",
                      },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Wrong format",
                      },
                    })}
                    id="e-money-number"
                    placeholder="238521993"
                  />
                </div>
                <div className="emoney-pin-container" style={{ marginTop: 23 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {errors.emoneyPin ? (
                      <Label style={{ color: "#cd2c2c" }} htmlFor="emoneyPin">
                        e-Money PIN
                      </Label>
                    ) : (
                      <Label htmlFor="emoneyPin">e-Money PIN</Label>
                    )}
                    {errors.emoneyPin ? (
                      <Error>{errors.emoneyPin.message}</Error>
                    ) : null}
                  </div>
                  <Input
                    style={{
                      borderColor: errors.emoneyPin ? "#cd2c2c" : "#CFCFCF",
                    }}
                    type="text"
                    {...register("emoneyPin", {
                      required: "Wrong format",
                      minLength: {
                        value: 4,
                        message: "Wrong format",
                      },
                      maxLength: {
                        value: 4,
                        message: "Wrong format",
                      },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Wrong format",
                      },
                    })}
                    id="e-money-pin"
                    placeholder="6891"
                  />
                </div>
              </EMoneyContainer>
            ) : (
              <CashOnDelivery>
                <img src={CheckoutImg} alt="icon-cash-on-delivery" />
                <p
                  style={{
                    margin: 0,
                    marginLeft: 30,
                    opacity: 0.5,
                    fontWeight: 500,
                  }}
                >
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </CashOnDelivery>
            )}
          </PaymentDetailsContainer>
        </CheckoutContainer>
        <GlobalStyle />
        <Summary
          cartProducts={cartProducts}
          totalPrice={totalPrice}
          shippingPrice={shippingPrice}
        />
      </Container>
      {validations ? (
        <Background style={{ top: window.innerWidth > 1100 ? 91 : 75 }}>
          <Order
            cartProducts={cartProducts}
            totalPrice={totalPrice}
            shippingPrice={shippingPrice}
            setCartProducts={setCartProducts}
          />
        </Background>
      ) : null}
    </MainContainer>
  );
}
