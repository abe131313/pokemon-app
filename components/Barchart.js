import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';
export function BarChart({ chartData }) {
    console.log(parseFloat(chartData.height.minimum).toFixed(2))
  return (
    <Bar
      data={{
        labels: [
          "HP",
          "CP",
          "Min - Height",
          "Max - Height",
          "Weight - Maximum",
          "Weight - Minimum"
        ],
        datasets: [
          {
            label: "Pokemons quantitative analysis",
            data: [
              chartData.maxHP,
              chartData.maxCP,
              parseFloat(chartData.height.minimum).toFixed(2),
              parseFloat(chartData.height.maximum).toFixed(2),
              parseFloat(chartData.weight.maximum).toFixed(2),
              parseFloat(chartData.height.minimum).toFixed(2),
            ],
          },
        ],
      }}
    />
  );
}
