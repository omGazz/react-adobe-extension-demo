import { Heading, Text, Divider } from "@adobe/react-spectrum";
import { DcListProps } from "../types/types";


const DcList = ({list}: DcListProps) => {
    
    return (
    <div>
      {list && list.length === 0 ? <EmptyList /> : <FullList list={list} />}
    </div>
  );
}

const EmptyList = () => {
    return (
        <div>
        <h3 style={{ color: "#ff5b3b" }}>No items to display</h3>
    </div>
    )
}

const FullList = ({list}: DcListProps) => {
    return (
        <div>
        {list.map((item) => (
          <div key={item.id} style={{padding: "10px 20px"}}>
              <Heading level={4}>{item.title}</Heading>
              <Text>{item.body}</Text>
              <Divider size="S"></Divider>
          </div>
        ))}
      </div>
    )
}

export default DcList;