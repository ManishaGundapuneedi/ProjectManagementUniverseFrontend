import Table from "../../common/Table/Table";
import React, { useEffect, useState } from "react";
import "./index.scss";
import arrow from "../../assets/images/svgs/arrow.svg";
import newi from "../../assets/images/svgs/new.svg";
import activei from "../../assets/images/svgs/active.svg";
import inactivei from "../../assets/images/svgs/inactive.svg";
import AddIcon from "../../assets/images/svgs/add-white.svg";
import { getApiData } from "../../utils/apiServices";
import { BASE_URL, PROJECTS_URL, RESOURCES_URL } from "../../utils/constants";
import { ToastContainer, toast } from 'react-toastify';

export default function ResourcesList() {
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
        key: "firstName",
        label: "Resource Name",
        value: (row) => row.firstName,
        renderCell: (row) => <div>{row.firstName ? row.firstName : '--'}</div>,
      },
      {
        key: "experience",
        label: "Experience",
        value: (row) => row.experience,
        renderCell: (row) => <div>{row.experience ? row.experience : '--'}</div>,
      },
      {
        key: "status",
        label: "Status",
        value: (row) => row.status,
        renderCell: (row) => <div>{row.status ? row.status : '--'}</div>,
      },

      {
        key: "timelyCompletion",
        label: "Timely completion",
        value: (row) => row.timelyCompletion,
        renderCell: (row) => <div>{row.timelyCompletion ? row.timelyCompletion : '--'}</div>,
      },

      {
        key: "pastProjectsCount",
        label: "Past Projects Count",
        value: (row) => row.pastProjectsCount,
        renderCell: (row) => <div>{row.pastProjectsCount ? row.pastProjectsCount : '--'}</div>,
      },

      {
        key: "resourceSkills",
        label: "Resource skills",
        value: (row) => row.resourceSkills,
        renderCell: (row) => <div>{row.resourceSkills ? getSkillset(row.resourceSkills) : '--'}</div>,
      },

      {
        key: "resourceProjects",
        label: "Projects Count",
        value: (row) => row.resourceProjects,
        renderCell: (row) => <div>{row.resourceProjects ? row.resourceProjects : '--'}</div>,
      },
    ];
  };

  const getSkillset = (data) => {
    if(data.length) {
        return data.map(eachItem => eachItem.masterSkill?.skillName)?.join(',');
    } else {
        return '--';
    }
  }

  useEffect(() => {
    getResourcesList();
  }, []);

  const getResourcesList = () => {
    getApiData(`${BASE_URL}${RESOURCES_URL}`, undefined, "GET")
    .then((res) => {
      if (res.data && res.data.status === 200) {
        let list = res?.data?.data?.listData;
        setKpisData({
            available: res?.data?.data?.available,
            occupied: res?.data?.data?.occupied,
            inActive: res?.data?.data?.inActive
        })
        let finalList = list.map(eachItem => {
          return {
            id: eachItem.id,
            firstName: eachItem.firstName,
            experience: eachItem.experience,
            status: eachItem.status,
            pastProjectsCount: eachItem.pastProjectsCount,
            timelyCompletion: eachItem.timelyCompletion,
            resourceSkills: eachItem.resourceSkills,
            resourceProjects: eachItem.resourceProjects?.length
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
                  <div className="add-project-text">Add Resource</div>
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
                <div className="kpn1">{kpisData.available}</div>
                <div className="lbl1">Available</div>
              </div>
            </div>

            <div className="kpic">
              <div className="kpii">
                <img src={activei} alt="" />
              </div>
              <div className="kpi1">
                <div className="kpn1">{kpisData.occupied}</div>
                <div className="lbl1">Occupied</div>
              </div>
            </div>

            <div className="kpic">
              <div className="kpii">
                <img src={inactivei} alt="" />
              </div>
              <div className="kpi1">
                <div className="kpn1">{kpisData.inActive}</div>
                <div className="lbl1">inactive</div>
              </div>
            </div>
          </div>
        </div>

        <Table className="list-table" columns={columns()} rows={filterResult} />
      </div>
    </div>
  );
}
