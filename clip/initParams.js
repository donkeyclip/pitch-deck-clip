// export const initParamsValidationRules = {

// };

export const initParams = [
  {
    name: "Default",
    value: {
      assets:{
        logo:"https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg",
        introImg:"https://unsplash.com/photos/n--CMLApjfI/download?force=true"
      },
      test:230,
      styles:{
        accent:"#f4f4f4",
        secondary:"#ff4343",
        primary:"#202020",
        font:"Outfit"
      },
      intro: {
        slogan:"Write your company name above and an intriguing summary of what your company does here.",
        name:"Pitch Deck",
      },
      probleml:{
        subtitle:"List 1-3 problems your company observes and wants to solve.",
        list:[
          { 
            title:"Problem 1",
            description:"Give a striking overview of the problem and explain it briefly."
          },
          { 
            title:"Problem 2",
            description:"Give a striking overview of the problem and explain it briefly."
          },
          { 
            title:"Problem 3",
            description:"Give a striking overview of the problem and explain it briefly."
          },  
        ]
      },
      dots:Array(16).fill({})
    },
  },
 
];
