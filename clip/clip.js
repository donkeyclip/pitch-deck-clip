import { HTMLClip,CSSEffect } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { scaleOne, heightMove, widthMove, moveTop,moveBottom,moveRight,moveLeft,riple,opacity } from "./incidents";
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
//remove problem slide
clip.addIncident(moveBottom("100%",".problem > .rb",500),2700)
clip.addIncident(moveTop("-100%",".problem-info",500),2700)
clip.addIncident(moveLeft("100%",".problem-list-root,.problem > .lt",500),2700)
clip.addIncident(opacity(".problem",1),3200)
//appear solution slide
clip.addIncident(moveRight("0%",".solution-info > .title",500),3200)
clip.addIncident(moveRight("0%",".solution-info > .subtitle ",500),3400)
clip.addIncident(moveTop("0px",".solution-title",500,"@stagger(0, 400)"),3200)
clip.addIncident(moveTop("0px",".solution-description",500,"@stagger(0, 400)"),3600)
clip.addIncident(heightMove("60%",".solution > .rb",500),3200)
clip.addIncident(widthMove("8%",".solution > .lt",500),3200)
//remove solution slide
clip.addIncident(moveBottom("-100%",".solution > .rb",500),4500)
clip.addIncident(moveTop("-100%",".solution-info",500),4500)
clip.addIncident(moveRight("100%",".solution-list-root",500),4500)
clip.addIncident(moveLeft("-100%",".solution > .lt",500),4500)
clip.addIncident(opacity(".solution",1),5000)
//appear product slide
clip.addIncident(moveLeft("10%",".product > .title",500),5000)
clip.addIncident(moveBottom("15%",".product > .description",500),5000)
clip.addIncident(heightMove("45%",".product > .lt",500),5000)
clip.addIncident(widthMove("25%",".product img",500),5000)
//remove product slide
clip.addIncident(moveLeft("-100%",".product > .title",500),5500)
clip.addIncident(moveLeft("100%",".product > .description",500),5500)
clip.addIncident(moveTop("100%",".product > .lt",500),5900)
clip.addIncident(moveTop("140%",".product img",500),5900)
clip.addIncident(opacity(".product",1),6400)


//scroll-stops 400,2700,4500,5500