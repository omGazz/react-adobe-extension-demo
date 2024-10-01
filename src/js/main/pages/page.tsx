import axios from "axios";
import DcButton from "../components/button";
import DcList from "../components/list";
import { useState } from "react";
import { DcListProps } from "../types/types";
import { Flex } from "@adobe/react-spectrum";
import CSInterface from "../../lib/cep/csinterface";
import ColorPicker from "../components/ColorPicker";

const Page = () => {
  const buttonText = "Stamp in Console";
  const buttonApiRequestText = "Request API";
  const buttonExtendScript = "Use ExtendScript";
  const [data, setData] = useState<DcListProps>({ list: [] });
  const [loading, setLoading] = useState<boolean>(false);


  const request = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData({ list: response.data });
    setLoading(false);
  };

  const log = () => {
    console.log("Hello from the page component");
  };

  const demoExtendScript = () => {
    const csInterface = new CSInterface();
    const script = 'alert("Questo è un alert in Adobe Illustrator!");';
    csInterface.evalScript(script, (result: any) => {
      console.log("Risultato dello script:", result);
    });
  };


  return (
    <div>
      <Flex gap="size-100">
        <DcButton text={buttonText} onClick={log} />
        <DcButton text={buttonApiRequestText} onClick={request} />
        <DcButton text={buttonExtendScript} onClick={demoExtendScript} />
      </Flex>
      <ColorPicker></ColorPicker>
      {loading && <h1 style={{ color: "#ff5b3b" }}>Loading...</h1>}
      <DcList list={data.list}></DcList>
    </div>
  );
};

export default Page;
