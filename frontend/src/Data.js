export const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];


// const range = (len) => {
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// const newPerson = () => {
//   return {
//     progress: makeHighchartData()
//   };
// };

// export default function data(...lens) {
//   const makeDataLevel = (depth = 0) => {
//     const len = lens[depth];
//     return range(len).map((d) => {
//       return {
//         ...newPerson(),
//         subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
//       };
//     });
//   };

//   return makeDataLevel();
// }

// function makeHighchartData() {
//   let highchartsData = {
//     chart: {
//       type: "bar"
//     },
//     title: {
//       text: "Randomly generated highchart"
//     },
//     xAxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May"]
//     },
//     legend: {
//       enabled: true
//     },
//     series: []
//   };

//   for (let i = 0; i < 2; i++) {
//     let seriesData = {
//       data: [
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100)
//       ]
//     };
//     highchartsData.series.push(seriesData);
//   }

//   return highchartsData;
// }

