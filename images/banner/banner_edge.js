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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'panorama',
                            symbolName: 'panorama',
                            type: 'rect',
                            rect: ['-2106', '-9', '3190', '417', 'auto', 'auto']
                        },
                        {
                            id: 'logo2',
                            symbolName: 'logo',
                            type: 'rect',
                            rect: ['0', '-366', '1028', '400', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1028px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 9055,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '1028px',
                            '1028px'
                        ],
                            [ "eid16", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${panorama}', [] ] ],
                            [ "eid17", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${logo2}', [] ] ],
                            [ "eid18", "trigger", 9055, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${logo2}', [] ] ],
                            [ "eid19", "trigger", 9055, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${panorama}', [] ] ]
                    ]
                }
            },
            "panorama": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '3190px', '417px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0.32, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'panorama-2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorama-2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '3190px', '417px']
                        }
                    }
                },
                timeline: {
                    duration: 9055,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "left",
                            0,
                            9055,
                            "easeInSine",
                            "${panorama-2}",
                            '0px',
                            '3156px'
                        ]
                    ]
                }
            },
            "logo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1028px', '400px', 'auto', 'auto'],
                            id: 'logo',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logo.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1028px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 9055,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "top",
                            0,
                            9055,
                            "linear",
                            "${logo}",
                            '0px',
                            '366px'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            9055,
                            "linear",
                            "${logo}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner_edgeActions.js");
})("EDGE-29794441");
