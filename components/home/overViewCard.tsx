import { Card, CardHeader } from "@ui5/webcomponents-react";

type Props = {
  title: string;
  icon: string;
};

const OverViewCard = (props: Props) => {
  return (
    <Card
      header={<CardHeader titleText={props.title} />}
      style={{
        height: "176px",
      }}
    >
      <div
        style={{
          padding: "1rem",
          width: "200px",
          height: "110px",
          display: "flex",
          justifyContent: "start",
          alignItems: "end",
        }}
      >
        {/* <Icon name={"add-coursebook"} /> */}
      </div>
    </Card>
  );
};

export default OverViewCard;
