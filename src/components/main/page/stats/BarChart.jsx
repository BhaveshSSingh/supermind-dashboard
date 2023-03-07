import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const BarChart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "white",
      borderWidth: 0,
    },
    xAxis: {
      data: [
        "1Mar",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "14Mar",
      ],
    },
    yAxis: [
      {
        type: "value",
        name: "",
        axisLabel: {
          formatter: "",
        },
      },
      {
        type: "value",
        name: "",
        min: 0,
        max: 100,
        interval: 25,
        axisLabel: {
          formatter: "{value} USD",
        },
      },
    ],
    series: [
      {
        data: [
          10,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          9,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          9,

          ,
          0,
          11,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          0,
          12,
          0,
          0,
          0,
          13,
          0,
          0,
          0,
          9,
          0,
          0,
          0,
          8,
          0,
          0,
          0,
          10,
        ],
        type: "bar",
        stack: "x",
        itemStyle: {
          color: "#4424a7",
          borderWidth: 11,
          barBorderRadius: 20,
        },
      },
      {
        data: [
          10,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          9,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          9,
          ,
          0,
          10,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          9,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          9,
        ],
        type: "bar",
        stack: "x",
        itemStyle: {
          color: "#09c0d6",
          width: 10,
          barBorderRadius: 20,
        },
      },
    ],
  };

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
};

export default BarChart;
