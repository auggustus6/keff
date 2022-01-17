// import SignedHeader from "./Signed";
import dynamic from "next/dynamic";
import * as Styles from "./styles";

const SignedHeader = dynamic(() => import("./Signed"), {
  ssr: false,
});

const Header = () => {
  return (
    <Styles.Wrapper>
      <HeaderContent />
    </Styles.Wrapper>
  );
};

const HeaderContent = () => {
  return <SignedHeader />;
};
export default Header;
