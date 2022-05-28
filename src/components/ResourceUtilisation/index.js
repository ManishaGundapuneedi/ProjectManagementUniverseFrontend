import Table from "../../common/Table/Table";
import React, { useEffect, useState } from "react";
import "./index.scss";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { ToastContainer, toast } from 'react-toastify';
import { getApiData } from "../../utils/apiServices";
import { BASE_URL, RESOURCES_UTILISATION_URL } from "../../utils/constants";

export default function ResourceUtilisation() {
  const rowData = [
    {
      resourceName: "Manisha",
      availableHrs: 150,
      billableHrs: 120,
      targetUtilisation: 70,
      utilisationPerc: 0.8
    },
    {
      resourceName: "Nikhil",
      availableHrs: 150,
      billableHrs: 20,
      targetUtilisation: 70,
      utilisationPerc: 0.3
    },
    {
      resourceName: "Dhanunjay",
      availableHrs: 150,
      billableHrs: 130,
      targetUtilisation: 70,
      utilisationPerc: 0.2
    },
    {
      resourceName: "Vinay",
      availableHrs: 150,
      billableHrs: 100,
      targetUtilisation: 70,
      utilisationPerc: 0.6
    },
    {
      resourceName: "Sajida",
      availableHrs: 150,
      billableHrs: 80,
      targetUtilisation: 70,
      utilisationPerc: 0.7
    },
  ];

  const [filterResult, setFilterResult] = useState(rowData);
  const notify = (msg) => toast(msg);

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
        key: "utilizationPerc",
        label: "Utilisation Percentage",
        value: (row) => row.utilizationPerc,
        renderCell: (row) => <div>{row.utilizationPerc ? row.utilizationPerc : '--'}</div>,
      },

      {
        key: "targetUtilisation",
        label: "Target Utilisation Percentage",
        value: (row) => row.targetUtilisation,
        renderCell: (row) => <div>{row.targetUtilisation ? row.targetUtilisation : '--'}</div>,
      },

      {
        key: "percGraph",
        label: "",
        value: (row) => row.utilizationPerc,
        renderCell: (row) => <div>{row.utilizationPerc ? 
            <div className="semi-circular-graph-section">
                <SemiCircleProgressBar diameter="100" percentage={row.utilizationPerc*100} showPercentValue={false} background="#F5F5F5" />
                <div className="semi-circular-graph">{row.utilizationPerc*100}</div>
            </div>
            : '--'}</div>,
      },
    ];
  };

  useEffect(() => {
    getResourceDataList();
  }, []);

  const getResourceDataList = () => {
    getApiData(`${BASE_URL}${RESOURCES_UTILISATION_URL}`, undefined, "GET")
    .then((res) => {
      if (res.data && res.data.status === 200) {
        let list = res?.data?.data?.listData;
        let finalList = list.map(eachItem => {
          return {
            firstName: eachItem.resource?.firstName,
            availableHrs: eachItem.availableHrs,
            billableHrs: eachItem.billableHrs,
            projectType: eachItem.masterProjectType?.projectType,
            utilizationPerc: eachItem.utilizationPerc,
            targetUtilisation: eachItem.targetUtilisation,
          }
        });
        setFilterResult(finalList);
      }
    })
    .catch((err) => {
      notify(err);
    });
  }

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
