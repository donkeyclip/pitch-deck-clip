import { HTMLClip,CSSEffect } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { scaleOne, heightMove, moveTop,moveLeft,riple,opacity } from "./incidents";
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
      filter:"blur(0px)"
    },
    initialValues: {
      filter:"blur(20px)"
    }
  },
  {
    selector: ".root",
    duration: 400,
    easing: "linear"
  }
);


clip.addIncident(rootBlur,0)
clip.addIncident(scaleOne(".root", 400), 0);
clip.addIncident(moveTop("0px",".intro > .rb",500),400)
clip.addIncident(heightMove("0px",".intro > .rb",500),900)
clip.addIncident(riple(4,4,2,2,0,125,{opacity:0},".grid-dot"),800)
clip.addIncident(moveLeft("-100%",".comp-info > .comp-name,.comp-info > .slogan,.intro > .lt",500),400)
clip.addIncident(opacity(".intro",1),1400)
clip.addIncident(heightMove("30%",".problem > .rb",500),1400)
clip.addIncident(moveLeft("0%",".problem-info > .title",500),1400)
clip.addIncident(moveLeft("0%",".problem-info > .subtitle ",500),1600)
clip.addIncident(moveTop("0px",".problem-title",500,"@stagger(0, 400)"),1400)
clip.addIncident(moveTop("0px",".problem-description",500,"@stagger(0, 400)"),1800)




//scroll-stops 400,2700,