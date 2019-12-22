import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CONST } from "../constants";
import { toLocalTime } from "../../../utils/generalUtils";

import LineChart from "../../../components/LineChart";

import { red_alert } from "../../../utils/configConst";
import ProjectApi from "../../../utils/api/apifetcher/project";

import * as actions from "../actions";

const ReportTab = ({ projectDetail }) => {
  const [day, setDay] = useState(7);
  const [lables, setLables] = useState([]);
  const [dataset, setDataset] = useState([]);
  const LastDays = daysCount => {
    var result = [];
    for (var i = 0; i < daysCount; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(d.getDate());
    }

    return result;
  };
  const days = LastDays(day).reverse();
  const getReport = closed => {
    return ProjectApi.getProjectReport({
      projectId: projectDetail.id,
      day,
      priority: -1,
      closed
    }).then(res => {
      const tempDataSet = [];
      days.forEach(e => {
        const index = res.data.day.indexOf(e);
        if (index != -1) {
          tempDataSet.push(res.data.count[index]);
        } else {
          tempDataSet.push(0);
        }
      });
      return tempDataSet;
    });
  };

  useEffect(() => {
    const getData = async () => {
      const newDataSet = [];
      newDataSet.push({
        name: "New Issue",
        data: await getReport(false),
        color: "rgba(75, 192, 192, 1)"
      });
      newDataSet.push({
        name: "Closed Issue",
        data: await getReport(true),
        color: "rgba(192, 192, 192, 1)"
      });
      setDataset(newDataSet);
    };
    setLables(days);
    getData();
  }, []);
  return (
    <div className="w-full">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        <LineChart labels={lables} dataset={dataset} />
      </div>
    </div>
  );
};

export default ReportTab;
