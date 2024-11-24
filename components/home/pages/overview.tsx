import { cardData } from "@/utils/dummydata";
import { Grid, Title } from "@ui5/webcomponents-react";
import OverViewCard from "../overViewCard";
type Props = {};

const Overview = (props: Props) => {
  return (
    <div className="sap-content-paddings-container">
      <div style={{ marginTop: "2rem" }}>
        <Title level="H1" style={{ fontSize: "24px" }}>
          Overview
        </Title>
      </div>
      <Grid
        defaultSpan="XL3 L3 M6 S12"
        hSpacing="5rem"
        vSpacing="0rem"
        style={{ marginTop: "2rem" }}
      >
        {cardData.map((item, index) => (
          <OverViewCard key={index} title={item.title} icon={item.icon} />
        ))}
      </Grid>
    </div>
  );
};

export default Overview;
