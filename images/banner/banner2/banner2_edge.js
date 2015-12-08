/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['0px', '0px', '1200px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px']
                        },
                        {
                            id: 'carousel-2',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '-169px', '1200px', '800px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"carousel-2.jpg",'0px','0px']
                        },
                        {
                            id: 'carousel-1',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '-26px', '1200px', '800px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"carousel-1.jpg",'0px','0px']
                        },
                        {
                            id: 'banner1',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '-149px', '1294px', '623px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"banner1.jpg",'0px','0px']
                        },
                        {
                            id: 'panorama-2',
                            type: 'image',
                            rect: ['-161px', '0px', '1616px', '400px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"panorama-2.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(18,3,98,0.83)",[269,[['rgba(0,0,0,1.00)',0],['rgba(10,14,75,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 13500,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "display",
                            3500,
                            0,
                            "easeInOutQuad",
                            "${carousel-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            6500,
                            0,
                            "easeInOutQuad",
                            "${carousel-1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${carousel-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            7000,
                            0,
                            "easeInOutQuad",
                            "${carousel-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "display",
                            10000,
                            0,
                            "easeInOutQuad",
                            "${carousel-2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${carousel-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "background-image",
                            13500,
                            0,
                            "linear",
                            "${Stage}",
                            [269,[['rgba(0,0,0,1.00)',0],['rgba(10,14,75,1.00)',100]]],
                            [269,[['rgba(0,0,0,1.00)',0],['rgba(10,14,75,1.00)',100]]]
                        ],
                        [
                            "eid20",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${banner1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1500,
                            1500,
                            "easeInOutQuad",
                            "${banner1}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid33",
                            "background-color",
                            0,
                            13500,
                            "linear",
                            "${Stage}",
                            'rgba(18,3,98,0.83)',
                            'rgba(40,7,213,0.83)'
                        ],
                        [
                            "eid39",
                            "opacity",
                            10500,
                            1500,
                            "linear",
                            "${panorama-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            12000,
                            1500,
                            "linear",
                            "${panorama-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid19",
                            "opacity",
                            3500,
                            1500,
                            "easeInOutQuad",
                            "${carousel-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            5000,
                            1500,
                            "easeInOutQuad",
                            "${carousel-1}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid22",
                            "opacity",
                            7000,
                            1500,
                            "easeInOutQuad",
                            "${carousel-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            8500,
                            1500,
                            "easeInOutQuad",
                            "${carousel-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "width",
                            13500,
                            0,
                            "linear",
                            "${Stage}",
                            '1200px',
                            '1200px'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${banner1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            3000,
                            0,
                            "easeInOutQuad",
                            "${banner1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${banner1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner2_edgeActions.js");
})("EDGE-5134983");
