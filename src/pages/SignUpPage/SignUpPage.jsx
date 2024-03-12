import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import { WrapperInputPassStyle } from "../../components/InputForm/style";

const SignUpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(0, 0, 0, 0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445",
          borderRadius: "4px",
          backgroundColor: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Hello Everyone</h1>
          <p>Sign In and Sign Up</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abcdef@gmail.com"
          />
          <WrapperInputPassStyle placeholder="password" style={{ marginBottom: "10px" }} />
          <WrapperInputPassStyle placeholder="Confirm password" />
          <ButtonComponent
            size={40}
            styleButton={{
              backgroundColor: "rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton={"Sign In"}
            styleTextButton={{ color: "#fff" }}
          />
          <p>
            You have an account
            <WrapperTextLight>Sign in now</WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src=""
            alt="Logo"
            preview={false}
            height={"203px"}
            width={"203px"}
          />
          <h4>Shopping at MERN-Ecommerce</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
