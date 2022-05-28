import Table from "../../common/Table/Table";
import React, { useEffect, useState } from "react";
import "./index.scss";
import arrow from "../../assets/images/svgs/arrow.svg";
import newi from "../../assets/images/svgs/new.svg";
import activei from "../../assets/images/svgs/active.svg";
import inactivei from "../../assets/images/svgs/inactive.svg";
import AddIcon from "../../assets/images/svgs/add-white.svg";
import { getApiData } from "../../utils/apiServices";
import { BASE_URL, PROJECTS_URL } from "../../utils/constants";
import { ToastContainer, toast } from 'react-toastify';

export default function ProjectList() {
  const rowData = [
    {
      userName: "Manisha",
      company: "Divami",
      location: "Hyderabad",
    },
    {
      userName: "Vinay",
      company: "Divami",
      location: "Hyderabad",
    },
    {
      userName: "Krishna",
      company: "Divami",
      location: "Hyderabad",
    },
    {
      userName: "Dhanunjay",
      company: "Divami",
      location: "Hyderabad",
    },
    {
      userName: "Sajida",
      company: "Divami",
      location: "Hyderabad",
    },
    {
      userName: "Nikhil",
      company: "Divami",
      location: "Hyderabad",
    },
  ];

  const [filterResult, setFilterResult] = useState(rowData);
  const [kpisData, setKpisData] = useState({});
  const notify = (msg) => toast(msg);

  const columns = (classes) => {
    return [
      {
        key: "projectName",
        label: "Project Name",
        value: (row) => row.projectName,
        renderCell: (row) => <div>{row.projectName ? row.projectName : '--'}</div>,
      },
      {
        key: "projectStatus",
        label: "Project Status",
        value: (row) => row.projectStatus,
        renderCell: (row) => <div>{row.projectStatus ? row.projectStatus : '--'}</div>,
      },

      {
        key: "projectType",
        label: "Project Type",
        value: (row) => row.projectType,
        renderCell: (row) => <div>{row.projectType ? row.projectType : '--'}</div>,
      },

      {
        key: "estimatedEod",
        label: "Estimated EOD",
        value: (row) => row.estimatedEod,
        renderCell: (row) => <div>{row.estimatedEod ? (row.estimatedEod) : '--'}</div>,
      },

      {
        key: "resourceRequestCount",
        label: "Resource Requests",
        value: (row) => row.resourceRequestCount,
        renderCell: (row) => <div>{row.resourceRequestCount ? row.resourceRequestCount : '--'}</div>,
      },

      {
        key: "resourcesCount",
        label: "Resources Count",
        value: (row) => row.resourcesCount,
        renderCell: (row) => <div>{row.resourcesCount ? row.resourcesCount : '--'}</div>,
      },

      {
        key: "requestResource",
        label: "",
        renderCell: (row) => 
            <div>
                <button className="request-button">Request resource</button>
            </div>,
      },
    ];
  };

  useEffect(() => {
    getProjectsList();
  }, []);

  const getProjectsList = () => {
    getApiData(`${BASE_URL}${PROJECTS_URL}`, undefined, "GET")
    .then((res) => {
      if (res.data && res.data.status === 200) {
        let list = res?.data?.data?.listData;
        setKpisData({
            activeCount: res?.data?.data?.activeCount,
            completed: res?.data?.data?.completed,
            upcoming: res?.data?.data?.upcoming
        })
        let finalList = list.map(eachItem => {
          return {
            projectId: eachItem.projectId,
            projectName: eachItem.projectName,
            projectStatus: eachItem.masterProjectStatus?.status,
            projectType: eachItem.masterProjectType?.projectType,
            estimatedEod: eachItem.endDate,
            resourceRequestCount: eachItem.resourceRequests?.length,
            resourcesCount: eachItem.resourceProjects?.length
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
            <div className="home">Home</div>
          </div>
          <div className="add-project-wrapper">
              <div className="add-project">
                  <img src={AddIcon} alt="Add icon" />
                  <div className="add-project-text">Add Project</div>
              </div>
            <div action="" className="search">
                <input
                type="text"
                class="searchinp"
                placeholder="username"
                onChange={(e) => {
                    if (e.target.value.length > 0) {
                    setFilterResult([]);
                    rowData.forEach((each) => {
                        if (each.userName.includes(e.target.value)) {
                        if (filterResult.length > 0) {
                            setFilterResult((prev) => {
                            return { ...prev, each };
                            });
                        } else {
                            setFilterResult([each]);
                        }
                        }
                    });
                    } else {
                    setFilterResult(rowData);
                    }
                    console.log(filterResult);
                }}
                />
                <input type="submit" class="search_submitButton" value=""></input>
            </div>
          </div>
        </div>
        <div className="kpi">
          <div className="half">
            <div className="kpic">
              <div className="kpii">
                <img src={newi} alt="" />
              </div>
              <div className="kpi1">
                <div className="kpn1">{kpisData.activeCount}</div>
                <div className="lbl1">Active</div>
              </div>
            </div>

            <div className="kpic">
              <div className="kpii">
                <img src={activei} alt="" />
              </div>
              <div className="kpi1">
                <div className="kpn1">{kpisData.completed}</div>
                <div className="lbl1">Completed</div>
              </div>
            </div>

            <div className="kpic">
              <div className="kpii">
                <img src={inactivei} alt="" />
              </div>
              <div className="kpi1">
                <div className="kpn1">{kpisData.upcoming}</div>
                <div className="lbl1">Upcoming</div>
              </div>
            </div>
          </div>

          <div className="rlist">
            <button className="request-button">Requests List</button>
          </div>
        </div>

        <Table className="list-table" columns={columns()} rows={filterResult} />
      </div>
    </div>
  );
}
