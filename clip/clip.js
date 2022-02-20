import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
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
clip.addIncident(moveTop("0px", ".intro > .rb", 500), 400);
clip.addIncident(heightMove("0px", ".intro > .rb", 500), 900);
clip.addIncident(riple(4, 4, 2, 2, 0, 125, { opacity: 0 }, ".grid-dot"), 800);
clip.addIncident(
  moveLeft(
    "-100%",
    ".comp-info > .comp-name,.comp-info > .slogan,.intro > .lt",
    500
  ),
  400
);
clip.addIncident(opacity(".intro", 1), 1400);
clip.addIncident(heightMove("30%", ".problem > .rb", 500), 1400);
clip.addIncident(moveLeft("0%", ".problem-info > .title", 500), 1400);
clip.addIncident(moveLeft("0%", ".problem-info > .subtitle ", 500), 1600);
clip.addIncident(
  moveTop("0px", ".problem-title", 500, "@stagger(0, 400)"),
  1400
);
clip.addIncident(
  moveTop("0px", ".problem-description", 500, "@stagger(0, 400)"),
  1800
);
//remove problem slide
clip.addIncident(moveBottom("100%", ".problem > .rb", 500), 2700);
clip.addIncident(moveTop("-100%", ".problem-info", 500), 2700);
clip.addIncident(
  moveLeft("100%", ".problem-list-root,.problem > .lt", 500),
  2700
);
clip.addIncident(opacity(".problem", 1), 3200);
//appear solution slide
clip.addIncident(moveRight("0%", ".solution-info > .title", 500), 3200);
clip.addIncident(moveRight("0%", ".solution-info > .subtitle ", 500), 3400);
clip.addIncident(
  moveTop("0px", ".solution-title", 500, "@stagger(0, 400)"),
  3200
);
clip.addIncident(
  moveTop("0px", ".solution-description", 500, "@stagger(0, 400)"),
  3600
);
clip.addIncident(heightMove("60%", ".solution > .rb", 500), 3200);
clip.addIncident(widthMove("8%", ".solution > .lt", 500), 3200);
//remove solution slide
clip.addIncident(moveBottom("-100%", ".solution > .rb", 500), 4500);
clip.addIncident(moveTop("-100%", ".solution-info", 500), 4500);
clip.addIncident(moveRight("100%", ".solution-list-root", 500), 4500);
clip.addIncident(moveLeft("-100%", ".solution > .lt", 500), 4500);
clip.addIncident(opacity(".solution", 1), 5000);
//appear product slide
clip.addIncident(moveLeft("5%", ".product-info > .title", 500), 5000);
clip.addIncident(moveLeft("20%", ".product-info > .description", 500), 5000);
clip.addIncident(heightMove("45%", ".product > .lt", 500), 5000);
clip.addIncident(opacity1(".product .img", 500), 5000);
//remove product slide
clip.addIncident(moveLeft("-100%", ".product-info > .title", 500), 5500);
clip.addIncident(moveLeft("100%", ".product-info > .description", 500), 5500);
clip.addIncident(moveTop("100%", ".product > .lt", 500), 5900);
clip.addIncident(moveTop("140%", ".product .img", 500), 5900);
clip.addIncident(opacity(".product", 1), 6400);
//appear timeline slide
clip.addIncident(heightMove("100%", ".timeline > .lt", 1100), 6400);
clip.addIncident(widthMove("50%", ".timeline > .rb", 500), 6400);
clip.addIncident(moveRight("0%", ".timeline-info > .title", 500), 6400);
clip.addIncident(moveRight("0%", ".timeline-info > .description ", 500), 6600);
clip.addIncident(moveTop("0px", ".step-title", 500, "@stagger(0, 400)"), 6400);
clip.addIncident(moveTop("0px", ".step-date", 500, "@stagger(0, 400)"), 6800);
//remove timeline slide
clip.addIncident(moveTop("100%", ".timeline > .lt", 400), 7700);
clip.addIncident(moveLeft("-50%", ".calendar", 500), 8100);
clip.addIncident(moveTop("-100%", ".timeline-info", 500), 7800);
clip.addIncident(widthMove("0%", ".timeline > .rb", 500), 7800);
clip.addIncident(opacity(".timeline", 1), 8600);
//appear timing slide
clip.addIncident(moveTop("13%", ".timing > .title", 700), 8600);
clip.addIncident(moveTop("0%", ".timing .img", 800), 8600);
clip.addIncident(
  moveLeft("5%", ".timing-title", 500, "@stagger(0, 400)"),
  8600
);
clip.addIncident(
  moveLeft("5%", ".timing-description", 500, "@stagger(0, 400)"),
  9000
);
clip.addIncident(widthMove("15%", ".timing > .lt", 500), 8600);
clip.addIncident(heightMove("80%", ".timing > .rb", 800), 8600);
//remove timing slide
clip.addIncident(widthMove("0%", ".timing > .lt", 500), 9900);
clip.addIncident(moveLeft("-50%", ".timing > .title", 900), 9900);
clip.addIncident(moveLeft("-50%", ".timing > .timing-info", 900), 10000);
clip.addIncident(moveTop("100%", ".timing .img", 500), 10000);
clip.addIncident(moveBottom("100%", ".timing > .rb", 500), 10000);
clip.addIncident(opacity(".timing", 1), 10900);
//appear traction slide
clip.addIncident(moveBottom("10%", ".traction-info", 700), 10900);
clip.addIncident(
  widthMove("6%", ".traction > .lt,.traction > .rb", 700),
  10900
);
clip.addIncident(lineGraph,10900)
/////// duration:5000 timings: {intro: 2000,static: 1000,outro: 2000},starttime:10900
//remove traction slide
clip.addIncident(
  widthMove("100%", ".traction > .lt,.traction > .rb", 400),
  15900
);
clip.addIncident(moveBottom("100%", ".traction-info", 1), 16299);
clip.addIncident(moveLeft("100%", ".traction > .lt", 400), 16300);
clip.addIncident(moveRight("100%", ".traction > .rb", 400), 16300);
clip.addIncident(opacity(".traction", 1), 16700);
//appear target-market slide
clip.addIncident(moveRight("5%", ".target-market .img", 500), 16700);
clip.addIncident(moveLeft("0%", ".target-market-info > .title", 500), 16700);
clip.addIncident(moveLeft("0%", ".target-market-info > .subtitle", 500), 17000);
clip.addIncident(
  moveLeft("0%", ".target-market-title", 500, "@stagger(0, 400)"),
  17000
);
clip.addIncident(
  moveLeft("0%", ".target-market-description", 500, "@stagger(0, 400)"),
  17400
);
clip.addIncident(widthMove("130%", ".target-market  .lt", 500), 16700);
clip.addIncident(heightMove("50%", ".target-market > .rb", 500), 16700);
//remove target-market slide
clip.addIncident(heightMove("0%", ".target-market > .rb", 500), 18300);
clip.addIncident(
  moveLeft("-100%", ".target-market > .text, .target-market  .lt", 500),
  18300
);
clip.addIncident(moveRight("100%", ".target-market .img", 500), 18800);
clip.addIncident(opacity(".target-market", 1), 19300);
//appear market-size slide
clip.addIncident(moveLeft("5%", ".market-size-info > .title", 500), 19300);
clip.addIncident(moveLeft("15%", ".market-size-info > .subtitle", 500), 19300);
clip.addIncident(
  moveBottom("30%", ".market-size-list-root > .flex-column", 500),
  19300
);
clip.addIncident(
  opacity1(".market-size-number", 500, "@stagger(0, 600)"),19600);
clip.addIncident(opacity1(".market-size-tag", 500, "@stagger(0, 600)"), 19800);
//remove market-size slide
clip.addIncident(moveBottom("100%", ".market-size-info", 400), 20900);
clip.addIncident(moveBottom("-40%", ".market-size-list-root", 400), 20900);
clip.addIncident(opacity(".market-size", 1), 21300);
//appear competitors slide
clip.addIncident(widthMove("100%",".competitors > .rb",400),21300)
clip.addIncident(opacity1(".competitors .title",500),21700)
clip.addIncident(opacity1(".direct-competitors-list-root > .item",100,"@stagger(0, 500)"),22500)
clip.addIncident(opacity1(".indirect-competitors-list-root > .item",100,"@stagger(0, 500)"),22500)
//remove competitors slide
clip.addIncident(moveRight("100%",".competitors > .rb",400),23100)
clip.addIncident(moveLeft("100%",".direct",400),23100)
clip.addIncident(moveLeft("-100%",".indirect",400),23100)
clip.addIncident(opacity(".competitors", 1), 23500);
//appear competive-advantages slide
clip.addIncident(
  moveTop("0px", ".competive-advantages-title", 500, "@stagger(0, 400)"),
  23700
);
clip.addIncident(
  moveTop("0px", ".competive-advantages-description", 500, "@stagger(0, 400)"),
  23900
);
clip.addIncident(moveBottom("8%",".competive-advantages > .title",400), 23500)
clip.addIncident(widthMove("33%",".competive-advantages > .lt",400),23500)
//remove competive-advantages slide
clip.addIncident(moveTop("-100px",".competive-advantages-title,.competive-advantages-description",400),24800)
clip.addIncident(moveLeft("-30%",".competive-advantages > .title",400),24800)
clip.addIncident(widthMove("0%",".competive-advantages > .lt",400),24800)
clip.addIncident(opacity(".competive-advantages",1),25200)
//appear competitor-approach slide
clip.addIncident(moveTop("8%",".competitor-approach > .title",500),25200)
clip.addIncident(
  moveLeft("0px", ".competitor-approach-title", 400, "@stagger(0, 400)"),
  25500
);
clip.addIncident(
  opacity1(".competitor-approach-icon-wrapper", 100, "@stagger(0, 400)"),
  25500
);
clip.addIncident(
  moveTop("0px", ".competitor-approach-description", 500, "@stagger(0, 400)"),
  25700
);
//remove competitor-approach slide
clip.addIncident(moveTop("-100px",".competitor-approach-title,.competitor-approach-description",400),26600)
clip.addIncident(moveLeft("100%",".competitor-approach-list-root",500),27000)
clip.addIncident(moveLeft("-50%",".competitor-approach > .title",500),27000)
clip.addIncident(opacity(".competitor-approach",1),27500)
//appear model slide
clip.addIncident(moveLeft("0%",".model-info > .title",400),27500)
clip.addIncident(moveLeft("0%",".model-info > .subtitle",400),27800)
clip.addIncident(moveRight("0%",".model .item",400, "@stagger(0, 600)"),27500)
clip.addIncident(opacity1(".model-description-wrapper",300,"@stagger(0, 600)"),27900)
//remove model slide
clip.addIncident(opacity(".model-description-wrapper",300,"@stagger(0, 600)"),28800)
clip.addIncident(moveRight("-150%",".model .item",400, "@stagger(0, 600)"),29100)
clip.addIncident(moveLeft("-100%",".model-info",500),30100)
clip.addIncident(opacity(".model",1),30600)
//appear team slide
clip.addIncident(moveLeft("5%",".team > .title",400),30600)
clip.addIncident(opacity1(".member .img",200,"@stagger(0, 1000)"),30800)
clip.addIncident(
  moveTop("0px", ".member-title", 400, "@stagger(0, 1000)"),
  31000
);
clip.addIncident(
  moveTop("0px", ".member-subtitle", 400, "@stagger(0, 1000)"),
  31200
);
clip.addIncident(widthMove("110%",".team .lt",500),32100)
//remove team slide
clip.addIncident(moveLeft("100%",".team-list-root",500),32600)
clip.addIncident(moveLeft("-60%",".team > .title",400),32700)
clip.addIncident(opacity(".team",1),33100)
//appear future slide
clip.addIncident(moveLeft("0%",".future-info > .title",400),33100)
clip.addIncident(moveLeft("0%",".future-info > .subtitle",400),33400)
clip.addIncident(opacity1(".future-id",100,"@stagger(0, 1000)"),33800)
clip.addIncident(
  moveTop("0px", ".future-title", 400, "@stagger(0, 1000)"),
  33900
);
clip.addIncident(
  moveTop("0px", ".future-description", 400, "@stagger(0, 1000)"),
  34000
);
clip.addIncident(heightMove("100%",".future > .lt",2000),33800)
//remove future slide
clip.addIncident(moveLeft("-100%",".future-info",400),35800)
clip.addIncident(moveTop("-100px",".future-title,.future-description",400),35800)
clip.addIncident(moveTop("100%",".future > .lt",400),35800)
clip.addIncident(opacity(".future-id",100,"@stagger(0, 100)"),35800)
clip.addIncident(opacity(".future",1),36200)
//arrear contact slide
clip.addIncident(moveBottom("8%",".contact > .title",400),36200)
clip.addIncident(widthMove("35%",".contact > .rb",400),36200)
clip.addIncident(moveLeft("0px",".contact-info",400,"@stagger(0,1000)"),36600)
clip.addIncident(opacity1(".contact .icon-wrapper",100,"@stagger(0, 1000)"),36500)

//scroll-stops 400,2700,4500,5500,7700,9900,12900,18300,20900,23100,24800,26600,28800,32600,35800,36500
