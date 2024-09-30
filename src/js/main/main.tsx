import { defaultTheme, Divider, Footer, Header, Heading, Provider } from "@adobe/react-spectrum";
import Page from "./pages/page";

const Main = () => {
  return (
    <Provider theme={defaultTheme}>
      <Header><Heading level={4}>Header of my extension</Heading></Header>
      <Divider size="L" />
    <div>
      <Heading level={2}>Welcome to Bolt CEP!</Heading>
      <Divider size="S" />
      <Page></Page>
    </div>
    <Footer>&copy; All rights reserved.</Footer>
    </Provider>
  );
};
export default Main;