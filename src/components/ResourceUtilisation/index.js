import Table from "../../common/Table/Table";
import React, { useState } from "react";
import "./index.scss";
import SemiCircleProgressBar from "react-progressbar-semicircle";

export default function ResourceUtilisation() {
  const rowData = [
    {
      resourceName: "Manisha",
      availableHrs: 150,
      billableHrs: 120,
      targetUtilisationPerc: 70,
      utilisationPerc: 0.8
    },
    {
      resourceName: "Nikhil",
      availableHrs: 150,
      billableHrs: 20,
      targetUtilisationPerc: 70,
      utilisationPerc: 0.3
    },
    {
      resourceName: "Dhanunjay",
      availableHrs: 150,
      billableHrs: 130,
      targetUtilisationPerc: 70,
      utilisationPerc: 0.2
    },
    {
      resourceName: "Vinay",
      availableHrs: 150,
      billableHrs: 100,
      targetUtilisationPerc: 70,
      utilisationPerc: 0.6
    },
    {
      resourceName: "Sajida",
      availableHrs: 150,
      billableHrs: 80,
      targetUtilisationPerc: 70,
      utilisationPerc: 0.7
    },
  ];

  const [filterResult, setFilterResult] = useState(rowData);

  const columns = (classes) => {
    return [
      {
        key: "resourceName",
        label: "Resource Name",
        value: (row) => row.resourceName,
        renderCell: (row) => <div>{row.resourceName ? row.resourceName : '--'}</div>,
      },
      {
        key: "availableHrs",
        label: "Available Hours",
        value: (row) => row.availableHrs,
        renderCell: (row) => <div>{row.availableHrs ? row.availableHrs : '--'}</div>,
      },

      {
        key: "billableHrs",
        label: "Billable Hours",
        value: (row) => row.billableHrs,
        renderCell: (row) => <div>{row.billableHrs ? row.billableHrs : '--'}</div>,
      },

      {
        key: "utilisationPerc",
        label: "Utilisation Percentage",
        value: (row) => row.utilisationPerc,
        renderCell: (row) => <div>{row.utilisationPerc ? row.utilisationPerc : '--'}</div>,
      },

      {
        key: "targetUtilisationPerc",
        label: "Target Utilisation Percentage",
        value: (row) => row.targetUtilisationPerc,
        renderCell: (row) => <div>{row.targetUtilisationPerc ? row.targetUtilisationPerc : '--'}</div>,
      },

      {
        key: "percGraph",
        label: "",
        value: (row) => row.utilisationPerc,
        renderCell: (row) => <div>{row.utilisationPerc ? 
            <div className="semi-circular-graph-section">
                <SemiCircleProgressBar diameter="100" percentage={row.utilisationPerc*100} showPercentValue={false} background="#F5F5F5" />
                <div className="semi-circular-graph">{row.utilisationPerc*100}</div>
            </div>
            : '--'}</div>,
      },
    ];
  };
  return (
    <div>
      <div className="report">
        <div className="bread">
          <div className="arrhome">
            <div className="home">Resource Utilisation</div>
          </div>
        </div>
        <Table className="list-table" columns={columns()} rows={filterResult} />
      </div>
    </div>
  );
}
