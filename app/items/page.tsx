"use client";

import { tableData } from "@/utils/dummydata";
import { AnalyticalTable, FlexBox } from "@ui5/webcomponents-react";

const TableHeader = ({ columnsTitle }: { columnsTitle: string }) => {
  return <h3>{columnsTitle}</h3>;
};

const TableCell = ({ instance }: { instance: any }) => {
  return (
    <FlexBox
      justifyContent={"Center"}
      alignItems={"Center"}
      style={{ width: "100%" }}
    >
      <b style={{ textAlign: "center" }}>{instance.row.original.ID}</b>
    </FlexBox>
  );
};

const page = () => {
  return (
    <div>
      <AnalyticalTable
        headerRowHeight={64}
        isTreeTable
        columns={[
          {
            accessor: "ID",
            hAlign: "center",
            Header: () => <TableHeader columnsTitle={"ID"} />,
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"BA"} />,
            accessor: "BA",
            hAlign: "center",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"QT"} />,
            hAlign: "center",
            accessor: "QT",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"IN"} />,
            hAlign: "center",
            accessor: "IN",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"BEG"} />,
            accessor: "BEG",
            hAlign: "center",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"PQT"} />,
            accessor: "PQT",
            hAlign: "center",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"%"} />,
            accessor: "%",
            hAlign: "center",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"10 JUN 2024"} />,
            accessor: "10 JUN 2024",
            hAlign: "center",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"17 JUN 2024"} />,
            accessor: "17 JUN 2024",
            hAlign: "center",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"24 JUN 2024"} />,
            accessor: "24 JUN 2024",
            hAlign: "center",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
          {
            Header: () => <TableHeader columnsTitle={"31 JUN 2024"} />,
            accessor: "31 JUN 2024",
            hAlign: "center",
            Cell: (instance: any) => <TableCell instance={instance} />,
          },
        ]}
        data={tableData}
      />
    </div>
  );
};

export default page;
