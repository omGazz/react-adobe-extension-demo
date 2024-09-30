import axios from "axios";
import DcButton from "../components/button";
import DcList from "../components/list";
import { useState } from "react";
import { DcListProps } from "../types/types";
import { Flex } from "@adobe/react-spectrum";
//import CSInterface from "../../lib/cep/csinterface";

const Page = () => {
  const buttonText = "Stamp in Console";
  const buttonApiRequestText = "Request API";
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


  return (
    <div>
      <Flex gap="size-100">
        <DcButton text={buttonText} onClick={log} />
        <DcButton text={buttonApiRequestText} onClick={request} />
      </Flex>
      {loading && <h1 style={{ color: "#ff5b3b" }}>Loading...</h1>}
      <DcList list={data.list}></DcList>
    </div>
  );
};

export default Page;
