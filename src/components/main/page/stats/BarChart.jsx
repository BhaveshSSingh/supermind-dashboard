// import { barData as data } from "../../../../config";
// import { ResponsiveBar } from "@nivo/bar";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const BarChart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0, 0, 0, 0.59)",
      borderWidth: 0,
    },
    xAxis: {
      data: ["1Mar", "", "", "", "", "", "", "", "", "", "", "", "", "14Mar"],
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
        name: "Price",
        min: 0,
        max: 100,
        interval: 25,
        axisLabel: {
          formatter: "{value} USD",
        },
      },
    ],
    series: [
      // {
      //   value: 43,
      //   // Specify the style for single bar
      //   itemStyle: {
      //     color: "#91cc75",
      //     shadowColor: "#91cc75",
      //     borderType: "dashed",
      //     barBorderRadius: 30,
      //     opacity: 0.5,
      //   },
      // },
      {
        data: [40, 30, 38, 43, 49, 10, 22, 28, 43, 49, 10, 22, 28, 43],
        type: "bar",
        stack: "x",
      },
      {
        data: [5, 4, 3, 5, 10, 5, 4, 3, 5, 10, 5, 4, 3, 5],
        type: "bar",
        stack: "x",
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
