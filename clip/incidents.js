import { CSSEffect, loadPlugin } from "@donkeyclip/motorcortex";
import MCGraphsDef from "@donkeyclip/motorcortex-graphs";
const Graph = loadPlugin(MCGraphsDef);

export const scaleOne = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale: 1,
        },
      },
      initialValues: {
        transform: {
          scale: 5,
        },
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const opacity = (selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 0,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );

export const opacity1 = (selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );

export const moveTop = (
  top,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const moveBottom = (
  bottom,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        bottom,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const moveLeft = (
  left,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const moveRight = (
  right,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        right,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const heightMove = (height, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const widthMove = (width, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const riple = (
  rows,
  columns,
  startRow,
  startCol,
  minDelay,
  maxDelay,
  attrs,
  selector
) => {
  const maxY =
    (startCol + 1) * 2 <= columns ? columns - 1 - startCol : startCol;
  const maxX = (startRow + 1) * 2 <= rows ? rows - 1 - startRow : startRow;
  const maxDistance = Math.pow(maxX, 2) + Math.pow(maxY, 2);
  return new CSSEffect(
    {
      animatedAttrs: { ...attrs },
    },
    {
      selector,
      duration: 125,
      easing: "linear",
      delay: `@expression(${minDelay}+(pow(floor(index/${columns})-${startRow},2)+pow(index % ${columns}-${startCol},2))*${
        maxDelay - minDelay
      }/${maxDistance})`,
    }
  );
};
export const lineGraph = (graphdata)=>  
new Graph.LineGraph(
  {
    data: graphdata,
    trace: {
      toggle: false,
      scale: 1.45,
    },
    legend: true,
    timings: {
      intro: 2000,
      static: 1000,
      outro: 2000,
    },
    palette: {
            accent: "#fff",
            primary: "#ffffff42", //grames
            font: "#2d2d2d",
            secondary: "#2d2d2d", //background color
            quinary: "#fff",
            senary: "#fff",
          },
    font: {
      size: "1.7rem",
    },
  },
  {
    selector: ".chart",
    containerParams: {
      width: "1280px",
      height: "780px",
    },
  }
);
// export const lineGraph =  (title,maxValue,dataSets,data)=> 
// new Graph.LineGraph(
//   {
//     data: {
//     "title": title,
//     "maxValue": maxValue,
//     "hover": false,
//     "showGrid":false,
//     "dataSets": dataSets,
//     "data": data
//   },
//     trace: {
//       toggle: false,
//       scale: 1.45,
//     },
//     legend: true,
//     timings: {
//       intro: 2000,
//       static: 1000,
//       outro: 2000,
//     },
//     palette: {
//             accent: "#fff",
//             primary: "#ffffff42", //grames
//             font: "#2d2d2d",
//             secondary: "#2d2d2d", //background color
//             quinary: "#fff",
//             senary: "#fff",
//           },
//     font: {
//       size: "1.7rem",
//     },
//   },
//   {
//     selector: ".chart",
//     containerParams: {
//       width: "1280px",
//       height: "780px",
//     },
//   }
// );