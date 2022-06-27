export default {
    styles:{
        label:"Styles",
        type:"object",
        props:{
            accent:{ type: "color" },
            secondary:{ type: "color" },
            primary:{ type: "color" },
        }
    },
    intro:{
        label:"Intro Slide",
        type:"object",
        props:{
            slogan:{ type: "string" },
            name:{ type: "string" },
        }
    },
    problem:{
        label:"Problem Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            subtitle : { type: "string" },
            list: {
                type:"array",
                items:{
                    type:"object",
                    props:{
                        title: { type: "string" },
                        description: { type: "string" },
                    }
                }
            }
        }
    },
    solution:{
        label:"Solution Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            subtitle : { type: "string" },
            list: {
                type:"array",
                items:{
                    type:"object",
                    props:{
                        title: { type: "string" },
                        description: { type: "string" },
                    }
                }
            }
        }
    },
    product:{
        label:"Product Slide",
        type:"object",
        props:{
            title: { type: "string" },
            description: { type: "string" },
            img: { type: "string" },
        }
    },
    timeline:{
        label:"Timeline Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            subtitle : { type: "string" },
            steps: {
                type:"array",
                items:{
                    type:"object",
                    props:{
                        title: { type: "string" },
                        date: { type: "string" },
                    }
                }
            }
        }
    },
    timing:{
        label:"Timing Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            reasons: {
                type:"array",
                items:{
                    type:"object",
                    props:{
                        title: { type: "string" },
                        description: { type: "string" },
                    }
                }
            },
            img:{ type: "string" },
        }
    },
    traction:{
        label:"Traction Slide",
        type:"object",
        props:{
            title: { type: "string" },
            subtitle: { type: "string" },
            graphData:{ 
                type:"object",
                props:{
                    title:{ type: "string" },
                    maxValue:{ type: "number"},
                    dataSets: { 
                        type: "array",
                        items:{
                            type: "object",
                            props:{
                                title: { type: "string" },
                                color: { type: "color" },
                            }
                        }
                    },
                    data: { 
                        type: "array",
                        items:{
                            type: "object",
                            props:{
                                name: { type: "string" },
                                values: { 
                                    type: "array",
                                    items:{
                                        type:"number"
                                    }
                                },
                            }
                        }
                    }
                }
            }
        }
    },
    targetMarket:{
        label:"Target Market Slide",
        type: "object",
        props:{
            title:{ type: "string" },
            subtitle:{ type: "string" },
            img:{ type: "string" },
            list: {
                type:"array",
                items:{
                    type:"object",
                    props:{
                        title: { type: "string" },
                        description: { type: "string" },
                    }
                }
            },
        }
    },
    marketSize:{
        label:"Market Size Slide",
        type: "object",
        props:{
            title:{ type: "string" },
            subtitle:{ type: "string" },
            list: {
                type:"array",
                items:{
                    type:"object",
                    props:{
                        number: { type: "string" },
                        tag: { type: "string" },
                    }
                }
            },
        }
    },
    competitors:{
        label:"Competitors Slide",
        type:"object",
        props:{
            dCompetitors:{
                type: "object",
                props:{
                    title:{ type:"string"},
                    list:{
                        type:"array",
                        items:{
                            type:"string"
                        }
                    }
                }
            },
            iCompetitors:{
                type: "object",
                props:{
                    title:{ type:"string"},
                    list:{
                        type:"array",
                        items:{
                            type:"string"
                        }
                    }
                }
            }
        }
    },
    competiveAdvantages:{
        label:"Competive Advantages Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            list: {
                type:"array",
                items:{
                    type:"object",
                    props:{
                        title: { type: "string" },
                        description: { type: "string" },
                    }
                }
            },
        }
    },
    cApproach:{
        label:"Competitor Approach Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            list: {
                type:"array",
                items:{
                    type:"object",
                    props:{
                        icon: { type: "string" },
                        title: { type: "string" },
                        description: { type: "string" },
                    }
                }
            },
        }
    },
    model:{
        label:"Model Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            list: {
                type:"array",
                items:{
                    type:"string",
                }
            },
        }
    },
    team:{
        label:"Team Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            list: {
                type:"array",
                list:{
                    type:"object",
                    props:{
                        img: { type: "string" },
                        title: { type: "string" },
                        subtitle: { type: "string" },
                    }
                }
            },
        }
    },
    future:{
        label:"Future Steps Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            subtitle:{ type: "string" },
            steps: {
                type:"array",
                list:{
                    type:"object",
                    props:{
                        title: { type: "string" },
                        description: { type: "string" },
                    }
                }
            },
        }
    },
    contact:{
        label:"Contact Slide",
        type:"object",
        props:{
            title:{ type: "string" },
            list: {
                type:"array",
                list:{
                    type:"object",
                    props:{
                        icon: { type: "string" },
                        info: { type: "string" },
                    }
                }
            },
        }
    }
};