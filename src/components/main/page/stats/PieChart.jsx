import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const PieChart = () => {
  const option = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 1,
          color: "#09c0d6",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 1,
          color: "#4424a7",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 1,
          color: "rgb(170, 170, 170)",
        },
      ]),
    ],
    series: [
      {
        name: "Item",
        type: "pie",
        radius: ["80%", "100%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderWidth: 0,
        },
        label: {
          show: true,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        data: [
          { value: 1872, name: "Spent" },
          { value: 987, name: "Referral" },
          { value: 300, name: "" },
        ],
      },
    ],
  };
  return (
    <>
      <ReactECharts style={{ height: 240, width: 240 }} option={option} />
    </>
  );
};

export default PieChart;
