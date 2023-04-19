import { HTMLClip, CSSEffect, setCSSCore } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {
  lineGraph,
  scaleOne,
  heightMove,
  widthMove,
  moveTop,
  moveBottom,
  moveRight,
  moveLeft,
  riple,
  opacity,
  opacity1,
} from "./incidents";
import { initParams } from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
// setCSSCore(AnimePluginDefinition.CSSEffect);

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=${initParams[0].value.styles.font}:wght@100;300;400;600;700&display=swap`,
    },
  ],
});

const rootBlur = new CSSEffect(
  {
    animatedAttrs: {
      filter: "blur(0px)",
    },
    initialValues: {
      filter: "blur(20px)",
    },
  },
  {
    selector: ".root",
    duration: 400,
    easing: "linear",
  }
);

clip.addIncident(rootBlur, 0);
clip.addIncident(scaleOne(".root", 400), 0);
clip.addIncident(moveTop("0px", ".intro > .rb", 500), 1400);
clip.addIncident(heightMove("0px", ".intro > .rb", 500), 1900);
clip.addIncident(riple(4, 4, 2, 2, 0, 125, { opacity: 0 }, ".grid-dot"), 1800);
clip.addIncident(
  moveLeft(
    "-100%",
    ".comp-info > .comp-name,.comp-info > .slogan,.intro > .lt",
    500
  ),
  1400
);
clip.addIncident(opacity(".intro", 1), 2400);
clip.addIncident(heightMove("30%", ".problem > .rb", 500), 2400);
clip.addIncident(
  moveLeft("0%", ".problem-info > .title", 500, 0, { left: "-100%" }),
  2400
);
clip.addIncident(
  moveLeft("0%", ".problem-info > .subtitle ", 500, 0, { left: "-100%" }),
  2600
);
clip.addIncident(
  moveTop("0px", ".problem-title", 500, "@stagger(0, 400)", {
    top: "-100%",
  }),
  2400
);
clip.addIncident(
  moveTop("0px", ".problem-description", 500, "@stagger(0, 400)", {
    top: "-100%",
  }),
  2800
);
//remove problem slide
clip.addIncident(moveBottom("100%", ".problem > .rb", 500), 6700);
clip.addIncident(
  moveTop("-100%", ".problem-info", 500, 0, { top: "13%" }),
  6700
);
clip.addIncident(
  moveLeft("100%", ".problem-list-root", 500, 0, { left: "50%" }),
  6700
);
clip.addIncident(
  moveLeft("100%", ".problem > .lt", 500, 0, { left: "97%" }),
  6700
);
clip.addIncident(opacity(".problem", 1), 7200);
//appear solution slide
clip.addIncident(
  moveRight("0%", ".solution-info > .title", 500, 0, { right: "-100%" }),
  7200
);
clip.addIncident(
  moveRight("0%", ".solution-info > .subtitle ", 500, 0, { right: "-100%" }),
  7400
);
clip.addIncident(
  moveTop("0px", ".solution-title", 500, "@stagger(0, 400)", { top: "-100%" }),
  7200
);
clip.addIncident(
  moveTop("0px", ".solution-description", 500, "@stagger(0, 400)", {
    top: "-100%",
  }),
  7600
);
clip.addIncident(heightMove("60%", ".solution > .rb", 500), 7200); //??
clip.addIncident(widthMove("8%", ".solution > .lt", 500), 7200); //??
//remove solution slide
clip.addIncident(moveBottom("-100%", ".solution > .rb", 500), 11500);
clip.addIncident(
  moveTop("-100%", ".solution-info", 500, 0, { top: "13%" }),
  11500
);
clip.addIncident(
  moveRight("100%", ".solution-list-root", 500, 0, { right: "50%" }),
  11500
);
clip.addIncident(moveLeft("-100%", ".solution > .lt", 500), 11500);
clip.addIncident(opacity(".solution", 1), 12000);
//appear product slide
clip.addIncident(moveLeft("5%", ".product-info > .title", 500), 12000);
clip.addIncident(moveLeft("20%", ".product-info > .description", 500), 12000);
clip.addIncident(heightMove("45%", ".product > .lt", 500), 12000);
clip.addIncident(opacity1(".product .img", 500), 12000);
//remove product slide
clip.addIncident(moveLeft("-100%", ".product-info > .title", 500), 13500);
clip.addIncident(moveLeft("100%", ".product-info > .description", 500), 13500);
clip.addIncident(moveTop("100%", ".product > .lt", 500), 13900);
clip.addIncident(
  moveTop("140%", ".product .img", 500, 0, { top: "40%" }),
  13900
);
clip.addIncident(opacity(".product", 1), 14400);
//appear timeline slide
clip.addIncident(heightMove("100%", ".timeline > .lt", 1100), 14400);
clip.addIncident(
  widthMove("50%", ".timeline > .rb", 500, { width: "12%" }),
  14400
);
clip.addIncident(
  moveRight("0%", ".timeline-info > .title", 500, 0, { right: "-100%" }),
  14400
);
clip.addIncident(
  moveRight("0%", ".timeline-info > .description ", 500, 0, { right: "-100%" }),
  14600
);
clip.addIncident(
  moveTop("0px", ".step-title", 500, "@stagger(0, 400)", { top: "-100%" }),
  14400
);
clip.addIncident(
  moveTop("0px", ".step-date", 500, "@stagger(0, 400)", { top: "-100%" }),
  14800
);
//remove timeline slide
clip.addIncident(moveTop("100%", ".timeline > .lt", 400), 17700);
clip.addIncident(moveLeft("-50%", ".calendar", 500, 0, { left: "10%" }), 18100);
clip.addIncident(
  moveTop("-100%", ".timeline-info", 500, 0, { top: "15%" }),
  17800
);
clip.addIncident(widthMove("0%", ".timeline > .rb", 500), 17800);
clip.addIncident(opacity(".timeline", 1), 18600);
//appear timing slide
clip.addIncident(
  moveTop("13%", ".timing > .title", 700, 0, { top: "-50%" }),
  18600
);
clip.addIncident(moveTop("0%", ".timing .img", 800), 18600);
clip.addIncident(
  moveLeft("5%", ".timing-title", 500, "@stagger(0, 400)", { left: "-100%" }),
  18600
);
clip.addIncident(
  moveLeft("5%", ".timing-description", 500, "@stagger(0, 400)", {
    left: "-100%",
  }),
  19000
);
clip.addIncident(widthMove("15%", ".timing > .lt", 500), 18600);
clip.addIncident(heightMove("80%", ".timing > .rb", 800), 18600);
//remove timing slide
clip.addIncident(widthMove("0%", ".timing > .lt", 500), 21900);
clip.addIncident(
  moveLeft("-50%", ".timing > .title", 900, 0, { left: "5%" }),
  21900
);
clip.addIncident(
  moveLeft("-50%", ".timing > .timing-info", 900, 0, { left: "5%" }),
  22000
);
clip.addIncident(moveTop("100%", ".timing .img", 500), 22000);
clip.addIncident(moveBottom("100%", ".timing > .rb", 500), 22000);
clip.addIncident(opacity(".timing", 1), 22900);
//appear traction slide
clip.addIncident(moveBottom("10%", ".traction-info", 700), 22900);
clip.addIncident(
  widthMove("6%", ".traction > .lt,.traction > .rb", 700),
  22900
);
clip.addIncident(lineGraph(initParams[0].value.traction.graphData), 22900);

//remove traction slide
clip.addIncident(
  widthMove("100%", ".traction > .lt,.traction > .rb", 400),
  25900
);
clip.addIncident(moveBottom("100%", ".traction-info", 1), 26299);
clip.addIncident(opacity(".chart", 1), 26400);
clip.addIncident(moveLeft("100%", ".traction > .lt", 400), 26300);
clip.addIncident(moveRight("100%", ".traction > .rb", 400), 26300);
clip.addIncident(opacity(".traction", 1), 26700);
//appear target-market slide
clip.addIncident(moveRight("5%", ".target-market .img", 500), 26700);
clip.addIncident(moveLeft("0%", ".target-market-info > .title", 500), 26700);
clip.addIncident(moveLeft("0%", ".target-market-info > .subtitle", 500), 27000);
clip.addIncident(
  moveLeft("0%", ".target-market-title", 500, "@stagger(0, 400)"),
  27000
);
clip.addIncident(
  moveLeft("0%", ".target-market-description", 500, "@stagger(0, 400)"),
  27400
);
clip.addIncident(widthMove("130%", ".target-market  .lt", 500), 26700);
clip.addIncident(heightMove("50%", ".target-market > .rb", 500), 26700);
//remove target-market slide
clip.addIncident(heightMove("0%", ".target-market > .rb", 500), 29300);
clip.addIncident(
  moveLeft("-100%", ".target-market > .text, .target-market  .lt", 500),
  29300
);
clip.addIncident(moveRight("100%", ".target-market .img", 500), 29800);
clip.addIncident(opacity(".target-market", 1), 30300);
//appear market-size slide
clip.addIncident(
  moveLeft("5%", ".market-size-info > .title", 500, 0, { left: "50%" }),
  30300
);
clip.addIncident(
  moveLeft("15%", ".market-size-info > .subtitle", 500, 0, { left: "100%" }),
  30300
);
clip.addIncident(
  moveBottom("30%", ".market-size-list-root > .flex-column", 500),
  30300
);
clip.addIncident(
  opacity1(".market-size-number", 500, "@stagger(0, 600)"),
  30600
);
clip.addIncident(opacity1(".market-size-tag", 500, "@stagger(0, 600)"), 30800);
//remove market-size slide
clip.addIncident(
  moveBottom("100%", ".market-size-info", 400, 0, { bottom: "75%" }),
  33900
);
clip.addIncident(
  moveBottom("-40%", ".market-size-list-root", 400, 0, { bottom: "30%" }),
  33900
);
clip.addIncident(opacity(".market-size", 1), 34300);
//appear competitors slide
clip.addIncident(widthMove("100%", ".competitors > .rb", 400), 34300);
clip.addIncident(opacity1(".competitors .title", 500), 34700);
clip.addIncident(
  opacity1(".direct-competitors-list-root > .item", 100, "@stagger(0, 500)"),
  35500
);
clip.addIncident(
  opacity1(".indirect-competitors-list-root > .item", 100, "@stagger(0, 500)"),
  35500
);
//remove competitors slide
clip.addIncident(
  moveRight("100%", ".competitors > .rb", 400, 0, { right: "0%" }),
  38100
);
clip.addIncident(moveLeft("100%", ".direct", 400, 0, { left: "0%" }), 38100);
clip.addIncident(moveLeft("-100%", ".indirect", 400, 0, { left: "5%" }), 38100);
clip.addIncident(opacity(".competitors", 1), 38500);
//appear competive-advantages slide
clip.addIncident(
  moveTop("0px", ".competive-advantages-title", 500, "@stagger(0, 400)"),
  38700
);
clip.addIncident(
  moveTop("0px", ".competive-advantages-description", 500, "@stagger(0, 400)"),
  38900
);
clip.addIncident(
  moveBottom("8%", ".competive-advantages > .title", 400, 0, { bottom: "0%" }),
  38500
);
clip.addIncident(widthMove("33%", ".competive-advantages > .lt", 400), 38500);
//remove competive-advantages slide
clip.addIncident(
  moveTop(
    "-100px",
    ".competive-advantages-title,.competive-advantages-description",
    400
  ),
  41800
);
clip.addIncident(
  moveLeft("-30%", ".competive-advantages > .title", 400, 0, { left: "8%" }),
  41800
);
clip.addIncident(widthMove("0%", ".competive-advantages > .lt", 400), 41800);
clip.addIncident(opacity(".competive-advantages", 1), 42200);
//appear competitor-approach slide
clip.addIncident(
  moveTop("8%", ".competitor-approach > .title", 500, 0, { top: "-50%" }),
  42200
);
clip.addIncident(
  moveLeft("0%", ".competitor-approach-title", 400, "@stagger(0, 400)", {
    left: "-100%",
  }),
  42500
);
clip.addIncident(
  opacity1(".competitor-approach-icon-wrapper", 100, "@stagger(0, 400)"),
  42500
);
clip.addIncident(
  moveTop("0px", ".competitor-approach-description", 500, "@stagger(0, 400)"),
  42700
);
//remove competitor-approach slide
clip.addIncident(
  moveTop(
    "-100px",
    ".competitor-approach-title,.competitor-approach-description",
    400
  ),
  45600
);
clip.addIncident(
  moveLeft("100%", ".competitor-approach-list-root", 500, 0, { left: "45%" }),
  46000
);
clip.addIncident(
  moveLeft("-50%", ".competitor-approach > .title", 500, 0, { left: "8%" }),
  46000
);
clip.addIncident(opacity(".competitor-approach", 1), 46500);
//appear model slide
clip.addIncident(
  moveLeft("0%", ".model-info > .title", 400, 0, { left: "-100%" }),
  46500
);
clip.addIncident(
  moveLeft("0%", ".model-info > .subtitle", 400, 0, { left: "-100%" }),
  46800
);
clip.addIncident(
  moveRight("0%", ".model .item", 400, "@stagger(0, 600)"),
  46500
);
clip.addIncident(
  opacity1(".model-description-wrapper", 300, "@stagger(0, 600)"),
  46900
);
//remove model slide
clip.addIncident(
  opacity(".model-description-wrapper", 300, "@stagger(0, 600)"),
  49800
);
clip.addIncident(
  moveRight("-150%", ".model .item", 400, "@stagger(0, 600)"),
  50100
);
clip.addIncident(
  moveLeft("-100%", ".model-info", 500, 0, { left: "5%" }),
  51100
);
clip.addIncident(opacity(".model", 1), 51600);
//appear team slide
clip.addIncident(
  moveLeft("5%", ".team > .title", 400, 0, { left: "-100%" }),
  51600
);
clip.addIncident(opacity1(".member .img", 200, "@stagger(0, 1000)"), 51800);
clip.addIncident(
  moveTop("0px", ".member-title", 400, "@stagger(0, 1000)"),
  53000
);
clip.addIncident(
  moveTop("0px", ".member-subtitle", 400, "@stagger(0, 1000)"),
  53200
);
clip.addIncident(widthMove("110%", ".team .lt", 500, { width: "0%" }), 53100);
//remove team slide
clip.addIncident(
  moveLeft("100%", ".team-list-root", 500, 0, { left: "5%" }),
  56600
);
clip.addIncident(moveLeft("-60%", ".team > .title", 400), 56700);
clip.addIncident(opacity(".team", 1), 57100);
//appear future slide
clip.addIncident(
  moveLeft("0%", ".future-info > .title", 400, 0, { left: "-100%" }),
  57100
);
clip.addIncident(
  moveLeft("0%", ".future-info > .subtitle", 400, 0, { left: "-100%" }),
  57400
);
clip.addIncident(opacity1(".future-id", 100, "@stagger(0, 1000)"), 57800);
clip.addIncident(
  moveTop("0px", ".future-title", 400, "@stagger(0, 1000)"),
  57900
);
clip.addIncident(
  moveTop("0px", ".future-description", 400, "@stagger(0, 1000)"),
  58000
);
clip.addIncident(heightMove("100%", ".future > .lt", 2000), 57800);
//remove future slide
clip.addIncident(
  moveLeft("-100%", ".future-info", 400, 0, { left: "5%" }),
  60800
);
clip.addIncident(
  moveTop("-100px", ".future-title,.future-description", 400),
  60800
);
clip.addIncident(moveTop("100%", ".future > .lt", 400), 60800);
clip.addIncident(opacity(".future-id", 100, "@stagger(0, 100)"), 60800);
clip.addIncident(opacity(".future", 1), 61200);
//arrear contact slide
clip.addIncident(moveBottom("8%", ".contact > .title", 400), 61200);
clip.addIncident(widthMove("35%", ".contact > .rb", 400), 61200);
clip.addIncident(
  moveLeft("0px", ".contact-info", 400, "@stagger(0,1000)"),
  61600
);
clip.addIncident(
  opacity1(".contact .icon-wrapper", 100, "@stagger(0, 1000)"),
  61500
);
