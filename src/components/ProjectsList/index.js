import Table from "../../common/Table/Table";
import React, { useState } from "react";
import "./index.scss";
import arrow from "../../assets/images/svgs/arrow.svg";
import newi from "../../assets/images/svgs/new.svg";
import activei from "../../assets/images/svgs/active.svg";
import inactivei from "../../assets/images/svgs/inactive.svg";
import AddIcon from "../../assets/images/svgs/add-white.svg";

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

  const columns = (classes) => {
    return [
      {
        key: "userName",
        label: "User Name",
        value: (row) => row.userName,
        renderCell: (row) => <div>{row.userName}</div>,
      },
      {
        key: "company",
        label: "Company Name",
        value: (row) => row.company,
        renderCell: (row) => <div>{row.company}</div>,
      },

      {
        key: "location",
        label: "Location",
        value: (row) => row.location,
        renderCell: (row) => <div>{row.location}</div>,
      },

      {
        key: "location",
        label: "Location",
        value: (row) => row.location,
        renderCell: (row) => <div>{row.location}</div>,
      },

      {
        key: "location",
        label: "Location",
        value: (row) => row.location,
        renderCell: (row) => <div>{row.location}</div>,
      },

      {
        key: "location",
        label: "Location",
        value: (row) => row.location,
        renderCell: (row) => <div>{row.location}</div>,
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
                <div className="kpn1">123</div>
                <div className="lbl1">Active</div>
              </div>
            </div>

            <div className="kpic">
              <div className="kpii">
                <img src={activei} alt="" />
              </div>
              <div className="kpi1">
                <div className="kpn1">456</div>
                <div className="lbl1">Completed</div>
              </div>
            </div>

            <div className="kpic">
              <div className="kpii">
                <img src={inactivei} alt="" />
              </div>
              <div className="kpi1">
                <div className="kpn1">789</div>
                <div className="lbl1">Upcoming</div>
              </div>
            </div>
          </div>

          <div className="rlist">
            <button className="request-button">Resource List</button>
          </div>
        </div>

        <Table className="list-table" columns={columns()} rows={filterResult} />
      </div>
    </div>
  );
}
