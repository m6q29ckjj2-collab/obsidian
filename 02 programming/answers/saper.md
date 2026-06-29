---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
Saper ^Ie7PyKid

Mina ^pYGkOVfD

Пример 1 ^qt4om5wY

3 2 2 ^DeWJnVCS

1 1 ^r04Frj2U

2 2 ^5N8HnTtr

3 строки
2 столбца ^GtgQSzyl

2 мины ^AhN3kTpI

номер строки - 1 ^zgmeA7Jk

Номер столбца - 1 ^c9Aty5Ed

Идея 1 ^B0oMuLMA

Поместить все мины в объект
Далее считывать из объекта 
за O(1) ^mz7g0DI2

2 ^ZepOk15D

2 ^XSgkTmCO

1 ^4xs4qtQc

1 ^W9DsM7x2

Пример 2 ^uVxln6qQ

2 2 0 ^FT4uYmJu

2 строки
2 столбца ^XU3YMzoH

0 мины ^Bqvx5dCe

0 ^uWzZhww7

0 ^hVsdfJOe

0
 ^qZwpfaBx

0 ^D8mWvHZy

Пример 3 ^DhNopTOQ

4 4 4 ^WS6MuMAe

4 строки
4 столбца ^dfabaMUg

4 мины ^TUE2nOCE

1 3
2 1
4 2
4 4 ^xDSOcmoJ

1 ^csXLcIs9

2 ^Ll85tINM

2 ^FyMNXOLI

1 ^MQIwj7fO

1 ^2RRoLRoN

1 ^gbtR2cxc

2 ^tJ0AnOEA

2 ^yCTp0T7R

2 ^qqS8tzK4

1 ^1FmIhktg

1 ^Y4jjWnVk

2 ^fQ9znx9x

Что делаем? ^uJeqsqLi

Нужно пройтись по каждой
клетке и проверить для неё
8 клеток около него.
Продумать красивое услоие
проверки ^zFB2IUXV

function doSaperField(line, column, mines) {
  let res = "";
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < column; j++) {
      if (mines.has([i + 1, j + 1].join("-"))) {
        res += "* ";
        continue;
      }
      //current = i , j
      let firstlineLeftTop = mines.has([i - 1 + 1, j - 1 + 1].join("-"));
      let firstlineLeftLeft = mines.has([i + 1, j - 1 + 1].join("-"));
      let firstlineDownLeft = mines.has([i + 1 + 1, j - 1 + 1].join("-"));
      //
      let twelwelineRightTop = mines.has([i - 1 + 1, j + 1 + 1].join("-"));
      let twelwelineLeftLeft = mines.has([i + 1, j + 1 + 1].join("-"));
      let twelwelineDownLeft = mines.has([i + 1 + 1, j + 1 + 1].join("-"));
      //
      let topTop = mines.has([i - 1 + 1, j + 1].join("-"));
      let downDown = mines.has([i + 1 + 1, j + 1].join("-"));
      let summ =
        firstlineLeftTop +
        firstlineLeftLeft +
        firstlineDownLeft +
        twelwelineRightTop +
        twelwelineLeftLeft +
        twelwelineDownLeft +
        topTop +
        downDown;
      res += summ + " ";
    }
    res += "\n";
  }
  console.log(res, mines);
  return res;
} ^1oi26j4C

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.0.17",
	"elements": [
		{
			"type": "rectangle",
			"version": 107,
			"versionNonce": 1819482693,
			"isDeleted": false,
			"id": "3LFKK0c2elAlFVvkhQah_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -507.98708149271556,
			"y": 32.070836110056575,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 291.9234581639204,
			"height": 571.7402163573082,
			"seed": 634631653,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604303370,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 21,
			"versionNonce": 462837899,
			"isDeleted": false,
			"id": "Ie7PyKid",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -73.53515625,
			"y": -272.1328125,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 54.89994812011719,
			"height": 25,
			"seed": 1854201061,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303370,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Saper",
			"rawText": "Saper",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Saper",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 106,
			"versionNonce": 1375832485,
			"isDeleted": false,
			"id": "G4WEupqnhzfyYoTBVjciL",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -114.28515625,
			"y": -292.5859375,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 140.6015625,
			"height": 68.79296875,
			"seed": 1760755147,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604303370,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 85,
			"versionNonce": 1878069035,
			"isDeleted": false,
			"id": "pYGkOVfD",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -335.07961309523813,
			"y": -176.02938988095235,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 42.379974365234375,
			"height": 25,
			"seed": 1629528709,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303370,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Mina",
			"rawText": "Mina",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Mina",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "line",
			"version": 1463,
			"versionNonce": 854602437,
			"isDeleted": false,
			"id": "YO94-BSiS5b2KXgAs0wqL",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -401.0508409068561,
			"y": -170.52669948983797,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.56404461683327,
			"height": 46.21687449304775,
			"seed": 1141737797,
			"groupIds": [
				"AyAWrNE6ci3QsUg4KYIop"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604328775,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					6.916019890896706,
					2.4015235748687265
				],
				[
					10.242481190494946,
					-12.906365323018493
				],
				[
					13.438553623218153,
					2.3464398252453473
				],
				[
					20.359439760997116,
					0.015315072134048226
				],
				[
					18.06416284279987,
					6.997000844431968
				],
				[
					30.83117885434832,
					10.223149509492066
				],
				[
					18.10106027551565,
					13.441978779923048
				],
				[
					20.53377633378625,
					20.48783362576315
				],
				[
					13.446453534429725,
					18.057234940545875
				],
				[
					10.245190015712073,
					33.310509170029256
				],
				[
					6.923797431164077,
					18.065984489770976
				],
				[
					0.10364202494948126,
					20.277678331090733
				],
				[
					2.348349996642252,
					13.49487850323028
				],
				[
					-10.732865762484952,
					10.227099465097915
				],
				[
					2.3127093633847826,
					6.978518801442535
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 464,
			"versionNonce": 1783075365,
			"isDeleted": false,
			"id": "_-SIQCJ1KdNeUf6m1CEy7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -390.8134959863865,
			"y": -183.37833435082973,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 0,
			"height": 46.121191305531326,
			"seed": 1249253541,
			"groupIds": [
				"AyAWrNE6ci3QsUg4KYIop"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604328775,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					46.121191305531326
				]
			]
		},
		{
			"type": "line",
			"version": 440,
			"versionNonce": 842794373,
			"isDeleted": false,
			"id": "ApLi9Qhgg80URdBH2nzdj",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -411.467390786904,
			"y": -160.30890962415128,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.21095040608312,
			"height": 0,
			"seed": 1205189637,
			"groupIds": [
				"AyAWrNE6ci3QsUg4KYIop"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604328775,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					41.21095040608312,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 496,
			"versionNonce": 504040677,
			"isDeleted": false,
			"id": "lAylwXvYpIGvz57kN65Gy",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -400.8875286360457,
			"y": -150.29717407648133,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 1948906341,
			"groupIds": [
				"AyAWrNE6ci3QsUg4KYIop"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604328775,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 548,
			"versionNonce": 2101487685,
			"isDeleted": false,
			"id": "mTgAwbR42tA34I3qjIKJ7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -380.74406708732886,
			"y": -150.2638205966752,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 734019269,
			"groupIds": [
				"AyAWrNE6ci3QsUg4KYIop"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604328775,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "text",
			"version": 57,
			"versionNonce": 1446787851,
			"isDeleted": false,
			"id": "qt4om5wY",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -410.2838338287533,
			"y": -48.05948839055674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 84.4599609375,
			"height": 25,
			"seed": 2011738149,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303370,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Пример 1",
			"rawText": "Пример 1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Пример 1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "ellipse",
			"version": 136,
			"versionNonce": 1728122661,
			"isDeleted": false,
			"id": "0ZV40msMe5jXzwlLXp0PB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -431.51151240018186,
			"y": -81.74624434293759,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 126.8563988095238,
			"height": 93.54538690476193,
			"seed": 1881992171,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303370,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 12,
			"versionNonce": 1354146219,
			"isDeleted": false,
			"id": "DeWJnVCS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -461.46315692948025,
			"y": 72.23354990826294,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 62.0999755859375,
			"height": 25,
			"seed": 1998070949,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "3 2 2",
			"rawText": "3 2 2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "3 2 2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 89,
			"versionNonce": 884859525,
			"isDeleted": false,
			"id": "r04Frj2U",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -458.9375882971001,
			"y": 198.51726514365765,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 20.839996337890625,
			"height": 25,
			"seed": 735932325,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1 1",
			"rawText": "1 1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1 1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 103,
			"versionNonce": 1751856203,
			"isDeleted": false,
			"id": "5N8HnTtr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -466.25011337495397,
			"y": 243.22722699972695,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 38.47998046875,
			"height": 25,
			"seed": 125874149,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2 2",
			"rawText": "2 2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2 2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 122,
			"versionNonce": 239684069,
			"isDeleted": false,
			"id": "GtgQSzyl",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -344.5593730530181,
			"y": 69.64145500405957,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 102.97993469238281,
			"height": 50,
			"seed": 2082579051,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "3 строки\n2 столбца",
			"rawText": "3 строки\n2 столбца",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "3 строки\n2 столбца",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "text",
			"version": 134,
			"versionNonce": 1295282923,
			"isDeleted": false,
			"id": "AhN3kTpI",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -343.3864102153854,
			"y": 129.43926451658962,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 70.95997619628906,
			"height": 25,
			"seed": 832155173,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2 мины",
			"rawText": "2 мины",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2 мины",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 87,
			"versionNonce": 615564613,
			"isDeleted": false,
			"id": "hvqrGxmpIGP_LrI7nyVrP",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -484.9382645312902,
			"y": 53.34365919526573,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 250.63362687361126,
			"height": 267.66272248482744,
			"seed": 439251531,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 76,
			"versionNonce": 1335680395,
			"isDeleted": false,
			"id": "1mCUhNyuN8kYiki-Gg7Jy",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -484.0664678276443,
			"y": 171.92482387426554,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 252.30853326788855,
			"height": 0.8823639364173914,
			"seed": 180771301,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					252.30853326788855,
					-0.8823639364173914
				]
			]
		},
		{
			"type": "text",
			"version": 101,
			"versionNonce": 726783141,
			"isDeleted": false,
			"id": "zgmeA7Jk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -410.9908955224218,
			"y": 196.70414816324,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 161.71990966796875,
			"height": 25,
			"seed": 2106408133,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "номер строки - 1",
			"rawText": "номер строки - 1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "номер строки - 1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 91,
			"versionNonce": 1256125483,
			"isDeleted": false,
			"id": "c9Aty5Ed",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -415.9350960081254,
			"y": 244.20378854375036,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 176.4198760986328,
			"height": 25,
			"seed": 1600481195,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Номер столбца - 1",
			"rawText": "Номер столбца - 1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Номер столбца - 1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 171,
			"versionNonce": 232388613,
			"isDeleted": false,
			"id": "IgWdCKtuke_IR6kHuaDay",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -185.15601385430995,
			"y": 53.264489367717005,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 323.3397517146834,
			"height": 165.4542803386439,
			"seed": 133938571,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 34,
			"versionNonce": 1323644619,
			"isDeleted": false,
			"id": "B0oMuLMA",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -158.7209813313019,
			"y": 79.72083309971524,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 60.25996398925781,
			"height": 25,
			"seed": 1557917573,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Идея 1",
			"rawText": "Идея 1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Идея 1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 119,
			"versionNonce": 1715908453,
			"isDeleted": false,
			"id": "mz7g0DI2",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -168.71289388923265,
			"y": 118.041431322346,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 305.03985595703125,
			"height": 75,
			"seed": 769932869,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Поместить все мины в объект\nДалее считывать из объекта \nза O(1)",
			"rawText": "Поместить все мины в объект\nДалее считывать из объекта \nза O(1)",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Поместить все мины в объект\nДалее считывать из объекта \nза O(1)",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "rectangle",
			"version": 622,
			"versionNonce": 172631403,
			"isDeleted": false,
			"id": "mpH2mxjCBfPxr-4O5ubvX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -477.8836087388146,
			"y": 336.9677742956798,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 186.44640477429692,
			"height": 225.35071869891806,
			"seed": 688714251,
			"groupIds": [
				"v1xVPaUYlGrZ6Siv376a0",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 648,
			"versionNonce": 853899973,
			"isDeleted": false,
			"id": "Ktiru2fAb0nuVCmifOS5k",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -476.15811170671736,
			"y": 400.4039794359821,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 183.92266378809836,
			"height": 3.12443971933493,
			"seed": 774656843,
			"groupIds": [
				"v1xVPaUYlGrZ6Siv376a0",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					183.92266378809836,
					-3.12443971933493
				]
			]
		},
		{
			"type": "line",
			"version": 650,
			"versionNonce": 1951940619,
			"isDeleted": false,
			"id": "wz_2YR0rhl8hOMls1ngK4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -474.4447092799853,
			"y": 486.8279978403456,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 182.46324807403488,
			"height": 2.2213758520689453,
			"seed": 233105803,
			"groupIds": [
				"v1xVPaUYlGrZ6Siv376a0",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					182.46324807403488,
					-2.2213758520689453
				]
			]
		},
		{
			"type": "line",
			"version": 531,
			"versionNonce": 1280563749,
			"isDeleted": false,
			"id": "bbCM_umQo5zhPP-h6bLU0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -388.7947456189925,
			"y": 338.2054555780487,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.13707219413851135,
			"height": 226.25378256618382,
			"seed": 1207376645,
			"groupIds": [
				"v1xVPaUYlGrZ6Siv376a0",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0.13707219413851135,
					226.25378256618382
				]
			]
		},
		{
			"type": "line",
			"version": 1740,
			"versionNonce": 923403947,
			"isDeleted": false,
			"id": "90vh34MH3m8dBL2ghGvZj",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -443.0013063531497,
			"y": 363.779226324708,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.56404461683327,
			"height": 46.21687449304775,
			"seed": 1215279269,
			"groupIds": [
				"RB4yZocEc8dtTXxzqib_K",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					6.916019890896706,
					2.4015235748687265
				],
				[
					10.242481190494946,
					-12.906365323018493
				],
				[
					13.438553623218153,
					2.3464398252453473
				],
				[
					20.359439760997116,
					0.015315072134048226
				],
				[
					18.06416284279987,
					6.997000844431968
				],
				[
					30.83117885434832,
					10.223149509492066
				],
				[
					18.10106027551565,
					13.441978779923048
				],
				[
					20.53377633378625,
					20.48783362576315
				],
				[
					13.446453534429725,
					18.057234940545875
				],
				[
					10.245190015712073,
					33.310509170029256
				],
				[
					6.923797431164077,
					18.065984489770976
				],
				[
					0.10364202494948126,
					20.277678331090733
				],
				[
					2.348349996642252,
					13.49487850323028
				],
				[
					-10.732865762484952,
					10.227099465097915
				],
				[
					2.3127093633847826,
					6.978518801442535
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 741,
			"versionNonce": 461327749,
			"isDeleted": false,
			"id": "UQvS17Nxuw33QRPmht-Ib",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -432.76396143268,
			"y": 350.9275914637162,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 0,
			"height": 46.121191305531326,
			"seed": 47993861,
			"groupIds": [
				"RB4yZocEc8dtTXxzqib_K",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					46.121191305531326
				]
			]
		},
		{
			"type": "line",
			"version": 717,
			"versionNonce": 1493825867,
			"isDeleted": false,
			"id": "hYJ4pqQGIVdoZRSbNfnlS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -453.4178562331975,
			"y": 373.9970161903947,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.21095040608312,
			"height": 0,
			"seed": 1117621093,
			"groupIds": [
				"RB4yZocEc8dtTXxzqib_K",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					41.21095040608312,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 773,
			"versionNonce": 262493413,
			"isDeleted": false,
			"id": "WJQmBMT0vVGYm_RtzUwoh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -442.8379940823393,
			"y": 384.00875173806463,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 402708165,
			"groupIds": [
				"RB4yZocEc8dtTXxzqib_K",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 825,
			"versionNonce": 666015723,
			"isDeleted": false,
			"id": "8QwjHWmnqcKLXRLZRB7Ub",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -422.6945325336224,
			"y": 384.04210521787076,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 765703717,
			"groupIds": [
				"RB4yZocEc8dtTXxzqib_K",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 1699,
			"versionNonce": 1414754373,
			"isDeleted": false,
			"id": "3xyw_oxqQ9VPfJqxYvamh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -356.2426705336833,
			"y": 437.8989995375747,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.56404461683327,
			"height": 46.21687449304775,
			"seed": 2044981669,
			"groupIds": [
				"3RkFmBoGFKyNZLh-5hwo9",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					6.916019890896706,
					2.4015235748687265
				],
				[
					10.242481190494946,
					-12.906365323018493
				],
				[
					13.438553623218153,
					2.3464398252453473
				],
				[
					20.359439760997116,
					0.015315072134048226
				],
				[
					18.06416284279987,
					6.997000844431968
				],
				[
					30.83117885434832,
					10.223149509492066
				],
				[
					18.10106027551565,
					13.441978779923048
				],
				[
					20.53377633378625,
					20.48783362576315
				],
				[
					13.446453534429725,
					18.057234940545875
				],
				[
					10.245190015712073,
					33.310509170029256
				],
				[
					6.923797431164077,
					18.065984489770976
				],
				[
					0.10364202494948126,
					20.277678331090733
				],
				[
					2.348349996642252,
					13.49487850323028
				],
				[
					-10.732865762484952,
					10.227099465097915
				],
				[
					2.3127093633847826,
					6.978518801442535
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 700,
			"versionNonce": 1628332683,
			"isDeleted": false,
			"id": "PzHr85QH_YIYT56PNVLb4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -346.0053256132136,
			"y": 425.0473646765829,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 0,
			"height": 46.121191305531326,
			"seed": 1579185413,
			"groupIds": [
				"3RkFmBoGFKyNZLh-5hwo9",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					46.121191305531326
				]
			]
		},
		{
			"type": "line",
			"version": 676,
			"versionNonce": 1197940645,
			"isDeleted": false,
			"id": "BlRF_RsoWka2BhX_LvclE",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -366.6592204137311,
			"y": 448.11678940326135,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.21095040608312,
			"height": 0,
			"seed": 1119194213,
			"groupIds": [
				"3RkFmBoGFKyNZLh-5hwo9",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					41.21095040608312,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 732,
			"versionNonce": 500685099,
			"isDeleted": false,
			"id": "t6TVBI5gQcgoTWv0QRJvX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -356.0793582628729,
			"y": 458.1285249509313,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 930133957,
			"groupIds": [
				"3RkFmBoGFKyNZLh-5hwo9",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 784,
			"versionNonce": 789439237,
			"isDeleted": false,
			"id": "bLhDNtWYGzXM5ocPPTutG",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -335.935896714156,
			"y": 458.16187843073743,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 1987016485,
			"groupIds": [
				"3RkFmBoGFKyNZLh-5hwo9",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "text",
			"version": 399,
			"versionNonce": 2071559115,
			"isDeleted": false,
			"id": "ZepOk15D",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -354.5468547599603,
			"y": 358.3066896949565,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 14.239990234375,
			"height": 25,
			"seed": 1358433669,
			"groupIds": [
				"v1xVPaUYlGrZ6Siv376a0",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 326,
			"versionNonce": 801454693,
			"isDeleted": false,
			"id": "XSgkTmCO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -436.5764998816464,
			"y": 439.4252078791334,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 14.239990234375,
			"height": 25,
			"seed": 528445893,
			"groupIds": [
				"v1xVPaUYlGrZ6Siv376a0",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303371,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 326,
			"versionNonce": 101567083,
			"isDeleted": false,
			"id": "4xs4qtQc",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -439.67271885512923,
			"y": 517.8627552073647,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 1958340421,
			"groupIds": [
				"v1xVPaUYlGrZ6Siv376a0",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 326,
			"versionNonce": 39495109,
			"isDeleted": false,
			"id": "W9DsM7x2",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -349.8823686241275,
			"y": 519.9269011896865,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 932074987,
			"groupIds": [
				"v1xVPaUYlGrZ6Siv376a0",
				"26BZwNG6iB-s61S07N7uG"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 93,
			"versionNonce": 1650410763,
			"isDeleted": false,
			"id": "uVxln6qQ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 243.52431682249681,
			"y": -33.220322715396605,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 93.27995300292969,
			"height": 25,
			"seed": 1398498763,
			"groupIds": [
				"yvfwfd6wsCfYP4tzZrT3C"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Пример 2",
			"rawText": "Пример 2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Пример 2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "ellipse",
			"version": 170,
			"versionNonce": 1777050917,
			"isDeleted": false,
			"id": "w51lbWqyNTVOqxvR8JpC7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 222.29663825106826,
			"y": -66.90707866777745,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 126.8563988095238,
			"height": 93.54538690476193,
			"seed": 505574507,
			"groupIds": [
				"yvfwfd6wsCfYP4tzZrT3C"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 202,
			"versionNonce": 937978795,
			"isDeleted": false,
			"id": "l-tRi2-5mQdbSZFWb6xm-",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 154.98905469000567,
			"y": 42.97540830751723,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 291.9234581639204,
			"height": 571.7402163573082,
			"seed": 54883051,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 82,
			"versionNonce": 1776662661,
			"isDeleted": false,
			"id": "FT4uYmJu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 201.83892277736481,
			"y": 83.12894059800186,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 62.23997497558594,
			"height": 25,
			"seed": 462282123,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2 2 0",
			"rawText": "2 2 0",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2 2 0",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 187,
			"versionNonce": 1523826251,
			"isDeleted": false,
			"id": "XU3YMzoH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 318.89879228509756,
			"y": 80.53684569379848,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 102.97993469238281,
			"height": 50,
			"seed": 802891115,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2 строки\n2 столбца",
			"rawText": "2 строки\n2 столбца",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2 строки\n2 столбца",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "text",
			"version": 199,
			"versionNonce": 1007050725,
			"isDeleted": false,
			"id": "Bqvx5dCe",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 320.0717551227302,
			"y": 140.33465520632853,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 70.47998046875,
			"height": 25,
			"seed": 1070153739,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "0 мины",
			"rawText": "0 мины",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "0 мины",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 150,
			"versionNonce": 905690347,
			"isDeleted": false,
			"id": "OCIQWTvrc76BWOh_syin-",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 178.51990080682543,
			"y": 64.23904988500465,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 250.63362687361126,
			"height": 267.66272248482744,
			"seed": 1817904811,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 139,
			"versionNonce": 106634053,
			"isDeleted": false,
			"id": "4hrh1tejvTZWIjKodkF4w",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 179.39169751047132,
			"y": 182.82021456400446,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 252.30853326788855,
			"height": 0.8823639364173914,
			"seed": 1010497867,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					252.30853326788855,
					-0.8823639364173914
				]
			]
		},
		{
			"type": "line",
			"version": 115,
			"versionNonce": 1961551755,
			"isDeleted": false,
			"id": "tCvls2eCEizgYg9pH2MZM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 315.4419957592346,
			"y": 374.37766759058553,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 0.09181507721797288,
			"height": 172.67661572384196,
			"seed": 47115019,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0.09181507721797288,
					172.67661572384196
				]
			]
		},
		{
			"type": "line",
			"version": 164,
			"versionNonce": 1363241637,
			"isDeleted": false,
			"id": "-jdVgxAuiY5KysL1rLqRy",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 250.90517798272134,
			"y": 458.45273379908343,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 123.00465894891846,
			"height": 0.6059795096385869,
			"seed": 1800657765,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					123.00465894891846,
					-0.6059795096385869
				]
			]
		},
		{
			"type": "text",
			"version": 25,
			"versionNonce": 1843117611,
			"isDeleted": false,
			"id": "uWzZhww7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 262.0515283569833,
			"y": 408.17938826838235,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 13.759994506835938,
			"height": 25,
			"seed": 144015269,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "0",
			"rawText": "0",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "0",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 42,
			"versionNonce": 1030147589,
			"isDeleted": false,
			"id": "hVsdfJOe",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 338.6895733108254,
			"y": 412.499287651488,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 13.759994506835938,
			"height": 25,
			"seed": 494362187,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "0",
			"rawText": "0",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "0",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 31,
			"versionNonce": 1270399179,
			"isDeleted": false,
			"id": "qZwpfaBx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 266.821321618457,
			"y": 487.38825538432764,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 13.759994506835938,
			"height": 50,
			"seed": 963194373,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "0\n",
			"rawText": "0\n",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "0\n",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "text",
			"version": 25,
			"versionNonce": 2043200869,
			"isDeleted": false,
			"id": "D8mWvHZy",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 336.61914331956007,
			"y": 492.74107438613544,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 13.759994506835938,
			"height": 25,
			"seed": 2144084811,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "0",
			"rawText": "0",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "0",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 173,
			"versionNonce": 2015129451,
			"isDeleted": false,
			"id": "DhNopTOQ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 601.2891487584621,
			"y": -31.585858748482906,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 92.65995788574219,
			"height": 25,
			"seed": 2049088331,
			"groupIds": [
				"eBiKZSAD88Zo08mY0V6l6"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Пример 3",
			"rawText": "Пример 3",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Пример 3",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "ellipse",
			"version": 248,
			"versionNonce": 2041893061,
			"isDeleted": false,
			"id": "D4ERWpW1Q-Ba90VYRd_3v",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 580.0614701870336,
			"y": -65.27261470086376,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 126.8563988095238,
			"height": 93.54538690476193,
			"seed": 560396779,
			"groupIds": [
				"eBiKZSAD88Zo08mY0V6l6"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 284,
			"versionNonce": 1212808427,
			"isDeleted": false,
			"id": "uACBqnoUWLJEf77-WtMQH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 512.753886625971,
			"y": 44.453786643160356,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 291.9234581639204,
			"height": 571.7402163573082,
			"seed": 702973067,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604410671,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 167,
			"versionNonce": 1791520805,
			"isDeleted": false,
			"id": "WS6MuMAe",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 559.6037547133302,
			"y": 84.60731893364499,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 58.39996337890625,
			"height": 25,
			"seed": 458996523,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "4 4 4",
			"rawText": "4 4 4",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "4 4 4",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 270,
			"versionNonce": 1481756843,
			"isDeleted": false,
			"id": "dfabaMUg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 676.5075385897924,
			"y": 82.17130966071215,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 101.53993225097656,
			"height": 50,
			"seed": 573644235,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "4 строки\n4 столбца",
			"rawText": "4 строки\n4 столбца",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "4 строки\n4 столбца",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "text",
			"version": 279,
			"versionNonce": 1794188165,
			"isDeleted": false,
			"id": "TUE2nOCE",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 677.8365870586955,
			"y": 141.96911917324223,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 69.51997375488281,
			"height": 25,
			"seed": 2038508651,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "4 мины",
			"rawText": "4 мины",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "4 мины",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 228,
			"versionNonce": 1388872523,
			"isDeleted": false,
			"id": "jVgplX3RHiXO_Hj35Tben",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 536.2847327427908,
			"y": 65.87351385191835,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 250.63362687361126,
			"height": 267.66272248482744,
			"seed": 353789707,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 217,
			"versionNonce": 2121034469,
			"isDeleted": false,
			"id": "-k1xMSFr61spp8tVuktha",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 537.1565294464366,
			"y": 184.45467853091816,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 252.30853326788855,
			"height": 0.8823639364173914,
			"seed": 191581611,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					252.30853326788855,
					-0.8823639364173914
				]
			]
		},
		{
			"type": "line",
			"version": 313,
			"versionNonce": 693110213,
			"isDeleted": false,
			"id": "Jw4H_3F7mnfli3QcWNeJi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 594.3376763649611,
			"y": 380.7360172803639,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 0.8309264488225381,
			"height": 193.62422559112252,
			"seed": 1068130379,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604318446,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-0.8309264488225381,
					193.62422559112252
				]
			]
		},
		{
			"type": "line",
			"version": 342,
			"versionNonce": 685034821,
			"isDeleted": false,
			"id": "G_vY_On-4iT5rX8KoP-ua",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 545.4369662386687,
			"y": 430.3161589780694,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 198.8714572541295,
			"height": 0.6059795096385869,
			"seed": 1269702379,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604313430,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					198.8714572541295,
					-0.6059795096385869
				]
			]
		},
		{
			"type": "text",
			"version": 37,
			"versionNonce": 808610955,
			"isDeleted": false,
			"id": "xDSOcmoJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 562.5071870450781,
			"y": 208.6101364273965,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 37.03997802734375,
			"height": 100,
			"seed": 1026725067,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604303372,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1 3\n2 1\n4 2\n4 4",
			"rawText": "1 3\n2 1\n4 2\n4 4",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1 3\n2 1\n4 2\n4 4",
			"lineHeight": 1.25,
			"baseline": 93
		},
		{
			"type": "line",
			"version": 374,
			"versionNonce": 220094629,
			"isDeleted": false,
			"id": "OJIFrRBT5ieV3_QaDa7zW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 650.4050817533579,
			"y": 377.0219874982798,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 0.09181507721802973,
			"height": 189.20332962307714,
			"seed": 1127258597,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604320215,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0.09181507721802973,
					189.20332962307714
				]
			]
		},
		{
			"type": "line",
			"version": 437,
			"versionNonce": 1387442181,
			"isDeleted": false,
			"id": "KOL9m1b7NZPnVfrqTVeqR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 707.5902971955917,
			"y": 376.6236858648361,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 0.45907538608992127,
			"height": 191.16358152168078,
			"seed": 1889782827,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604322482,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0.45907538608992127,
					191.16358152168078
				]
			]
		},
		{
			"type": "line",
			"version": 414,
			"versionNonce": 1418966187,
			"isDeleted": false,
			"id": "4pou00NgRvtLkfU5Nc1BD",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 546.7880771301792,
			"y": 482.35902685631714,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 198.0634845746115,
			"height": 0.9548768030668953,
			"seed": 1025593797,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604311763,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					198.0634845746115,
					-0.9548768030668953
				]
			]
		},
		{
			"type": "line",
			"version": 499,
			"versionNonce": 1494874469,
			"isDeleted": false,
			"id": "N1ygVHj6HX7nUnW6bLWTp",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 545.8195229027971,
			"y": 526.873213057827,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 200.07882551954594,
			"height": 1.6297176206190898,
			"seed": 1947436651,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604316299,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					200.07882551954594,
					-1.6297176206190898
				]
			]
		},
		{
			"type": "line",
			"version": 1605,
			"versionNonce": 446712427,
			"isDeleted": false,
			"id": "FY3-c-q_R_hU-ZCjpVIDa",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 664.2796130429159,
			"y": 391.0865947996682,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.56404461683327,
			"height": 46.21687449304775,
			"seed": 1110269381,
			"groupIds": [
				"R_CU8b6M0X5qp3eQ5x2Pa"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604336149,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					6.916019890896706,
					2.4015235748687265
				],
				[
					10.242481190494946,
					-12.906365323018493
				],
				[
					13.438553623218153,
					2.3464398252453473
				],
				[
					20.359439760997116,
					0.015315072134048226
				],
				[
					18.06416284279987,
					6.997000844431968
				],
				[
					30.83117885434832,
					10.223149509492066
				],
				[
					18.10106027551565,
					13.441978779923048
				],
				[
					20.53377633378625,
					20.48783362576315
				],
				[
					13.446453534429725,
					18.057234940545875
				],
				[
					10.245190015712073,
					33.310509170029256
				],
				[
					6.923797431164077,
					18.065984489770976
				],
				[
					0.10364202494948126,
					20.277678331090733
				],
				[
					2.348349996642252,
					13.49487850323028
				],
				[
					-10.732865762484952,
					10.227099465097915
				],
				[
					2.3127093633847826,
					6.978518801442535
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 606,
			"versionNonce": 1084343563,
			"isDeleted": false,
			"id": "YDk6Ofcz9PlsHLmPBenyi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 674.5169579633854,
			"y": 378.23495993867647,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 0,
			"height": 46.121191305531326,
			"seed": 245849381,
			"groupIds": [
				"R_CU8b6M0X5qp3eQ5x2Pa"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604336149,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					46.121191305531326
				]
			]
		},
		{
			"type": "line",
			"version": 582,
			"versionNonce": 702213035,
			"isDeleted": false,
			"id": "bueIEZoDS0WrHgne43_Jt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 653.8630631628679,
			"y": 401.3043846653549,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.21095040608312,
			"height": 0,
			"seed": 1852469381,
			"groupIds": [
				"R_CU8b6M0X5qp3eQ5x2Pa"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604336149,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					41.21095040608312,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 638,
			"versionNonce": 1786134091,
			"isDeleted": false,
			"id": "iykpMQPanaEF-pT3WC_cn",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 664.4429253137263,
			"y": 411.3161202130249,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 1060378597,
			"groupIds": [
				"R_CU8b6M0X5qp3eQ5x2Pa"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604336149,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 690,
			"versionNonce": 760102123,
			"isDeleted": false,
			"id": "2dJDhF83vP3Zg3Gn1EuOn",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 684.5863868624432,
			"y": 411.349473692831,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 1259459397,
			"groupIds": [
				"R_CU8b6M0X5qp3eQ5x2Pa"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604336149,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 1719,
			"versionNonce": 1437525381,
			"isDeleted": false,
			"id": "gU-JvwfUefZxZ9AQ-71id",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 560.6341631254072,
			"y": 446.18941339203474,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.56404461683327,
			"height": 46.21687449304775,
			"seed": 1915678571,
			"groupIds": [
				"1LaSO-80OhvU98Difrthr"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604342465,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					6.916019890896706,
					2.4015235748687265
				],
				[
					10.242481190494946,
					-12.906365323018493
				],
				[
					13.438553623218153,
					2.3464398252453473
				],
				[
					20.359439760997116,
					0.015315072134048226
				],
				[
					18.06416284279987,
					6.997000844431968
				],
				[
					30.83117885434832,
					10.223149509492066
				],
				[
					18.10106027551565,
					13.441978779923048
				],
				[
					20.53377633378625,
					20.48783362576315
				],
				[
					13.446453534429725,
					18.057234940545875
				],
				[
					10.245190015712073,
					33.310509170029256
				],
				[
					6.923797431164077,
					18.065984489770976
				],
				[
					0.10364202494948126,
					20.277678331090733
				],
				[
					2.348349996642252,
					13.49487850323028
				],
				[
					-10.732865762484952,
					10.227099465097915
				],
				[
					2.3127093633847826,
					6.978518801442535
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 720,
			"versionNonce": 270658789,
			"isDeleted": false,
			"id": "qioMQZ1bVgEJRCURB5TMv",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 570.8715080458765,
			"y": 433.33777853104294,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 0,
			"height": 46.121191305531326,
			"seed": 1494469131,
			"groupIds": [
				"1LaSO-80OhvU98Difrthr"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604342465,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					46.121191305531326
				]
			]
		},
		{
			"type": "line",
			"version": 696,
			"versionNonce": 1232930885,
			"isDeleted": false,
			"id": "0aUwhfZaB8MS8fe0nm0gm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 550.2176132453592,
			"y": 456.4072032577215,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.21095040608312,
			"height": 0,
			"seed": 1338265771,
			"groupIds": [
				"1LaSO-80OhvU98Difrthr"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604342465,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					41.21095040608312,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 752,
			"versionNonce": 329103269,
			"isDeleted": false,
			"id": "8Cd8j5VRbheC4Segj_mMg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 560.7974753962176,
			"y": 466.4189388053914,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 938148683,
			"groupIds": [
				"1LaSO-80OhvU98Difrthr"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604342465,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 804,
			"versionNonce": 1756461829,
			"isDeleted": false,
			"id": "iri-vp2znrvA1qUKMoaoY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 580.9409369449345,
			"y": 466.45229228519753,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 1508008427,
			"groupIds": [
				"1LaSO-80OhvU98Difrthr"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604342465,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 1846,
			"versionNonce": 1503810955,
			"isDeleted": false,
			"id": "_sMieLSda_ohjqcML9kYu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 616.260327657916,
			"y": 539.069545505736,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.56404461683327,
			"height": 46.21687449304775,
			"seed": 1224560773,
			"groupIds": [
				"F-BDhYho_tNxKr84pmQF1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604346167,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					6.916019890896706,
					2.4015235748687265
				],
				[
					10.242481190494946,
					-12.906365323018493
				],
				[
					13.438553623218153,
					2.3464398252453473
				],
				[
					20.359439760997116,
					0.015315072134048226
				],
				[
					18.06416284279987,
					6.997000844431968
				],
				[
					30.83117885434832,
					10.223149509492066
				],
				[
					18.10106027551565,
					13.441978779923048
				],
				[
					20.53377633378625,
					20.48783362576315
				],
				[
					13.446453534429725,
					18.057234940545875
				],
				[
					10.245190015712073,
					33.310509170029256
				],
				[
					6.923797431164077,
					18.065984489770976
				],
				[
					0.10364202494948126,
					20.277678331090733
				],
				[
					2.348349996642252,
					13.49487850323028
				],
				[
					-10.732865762484952,
					10.227099465097915
				],
				[
					2.3127093633847826,
					6.978518801442535
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 847,
			"versionNonce": 1702194219,
			"isDeleted": false,
			"id": "6Tfh40nqbkr08ITNUwxjh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 626.4976725783853,
			"y": 526.2179106447443,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 0,
			"height": 46.121191305531326,
			"seed": 74119141,
			"groupIds": [
				"F-BDhYho_tNxKr84pmQF1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604346167,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					46.121191305531326
				]
			]
		},
		{
			"type": "line",
			"version": 823,
			"versionNonce": 1072475851,
			"isDeleted": false,
			"id": "kRFDKar9_dnezhy7Xz1RS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 605.843777777868,
			"y": 549.2873353714228,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.21095040608312,
			"height": 0,
			"seed": 107787077,
			"groupIds": [
				"F-BDhYho_tNxKr84pmQF1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604346167,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					41.21095040608312,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 879,
			"versionNonce": 1537383787,
			"isDeleted": false,
			"id": "M8QiDrk3sdaOmGVCBZ5DN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 616.4236399287264,
			"y": 559.2990709190926,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 190841509,
			"groupIds": [
				"F-BDhYho_tNxKr84pmQF1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604346167,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 931,
			"versionNonce": 1944172555,
			"isDeleted": false,
			"id": "0WZgvd2Gtkk7_Y3hhQhCS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 636.5671014774433,
			"y": 559.3324243988989,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 1743939077,
			"groupIds": [
				"F-BDhYho_tNxKr84pmQF1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604346167,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 1903,
			"versionNonce": 1942332197,
			"isDeleted": false,
			"id": "3ZfN1X-89mITM-gzfcaiQ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 721.4253171033824,
			"y": 538.6517869043942,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.56404461683327,
			"height": 46.21687449304775,
			"seed": 1947982475,
			"groupIds": [
				"vjosjWXyBe1kxpSTGdqX1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604348399,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					6.916019890896706,
					2.4015235748687265
				],
				[
					10.242481190494946,
					-12.906365323018493
				],
				[
					13.438553623218153,
					2.3464398252453473
				],
				[
					20.359439760997116,
					0.015315072134048226
				],
				[
					18.06416284279987,
					6.997000844431968
				],
				[
					30.83117885434832,
					10.223149509492066
				],
				[
					18.10106027551565,
					13.441978779923048
				],
				[
					20.53377633378625,
					20.48783362576315
				],
				[
					13.446453534429725,
					18.057234940545875
				],
				[
					10.245190015712073,
					33.310509170029256
				],
				[
					6.923797431164077,
					18.065984489770976
				],
				[
					0.10364202494948126,
					20.277678331090733
				],
				[
					2.348349996642252,
					13.49487850323028
				],
				[
					-10.732865762484952,
					10.227099465097915
				],
				[
					2.3127093633847826,
					6.978518801442535
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 904,
			"versionNonce": 1674573445,
			"isDeleted": false,
			"id": "cEWZ_gvWImtjwoNUSnM5N",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 731.6626620238517,
			"y": 525.8001520434025,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 0,
			"height": 46.121191305531326,
			"seed": 1618366763,
			"groupIds": [
				"vjosjWXyBe1kxpSTGdqX1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604348399,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					46.121191305531326
				]
			]
		},
		{
			"type": "line",
			"version": 880,
			"versionNonce": 972611045,
			"isDeleted": false,
			"id": "TIUyXHTM0muv83QXBfjMp",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 711.0087672233344,
			"y": 548.869576770081,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 41.21095040608312,
			"height": 0,
			"seed": 1401484235,
			"groupIds": [
				"vjosjWXyBe1kxpSTGdqX1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604348399,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					41.21095040608312,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 936,
			"versionNonce": 1565382981,
			"isDeleted": false,
			"id": "kPCR6_zpZAM9MeMjn8sx1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 721.5886293741928,
			"y": 558.8813123177508,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 493765227,
			"groupIds": [
				"vjosjWXyBe1kxpSTGdqX1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604348399,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "line",
			"version": 988,
			"versionNonce": 1999399077,
			"isDeleted": false,
			"id": "TuPKRSAefyhjXexlSi95D",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 741.7320909229097,
			"y": 558.9146657975571,
			"strokeColor": "#e03131",
			"backgroundColor": "#ffc9c9",
			"width": 20.1670608370194,
			"height": 20.16706083701936,
			"seed": 653311243,
			"groupIds": [
				"vjosjWXyBe1kxpSTGdqX1"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604348399,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-20.1670608370194,
					-20.16706083701936
				]
			]
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 978882245,
			"isDeleted": false,
			"id": "csXLcIs9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 561.1437331483914,
			"y": 403.99721150110366,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 213410507,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604353429,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 672747,
			"isDeleted": false,
			"id": "Ll85tINM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 615.1860875988904,
			"y": 402.34454011118015,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 14.239990234375,
			"height": 25,
			"seed": 1211982213,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604357178,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 1060556389,
			"isDeleted": false,
			"id": "FyMNXOLI",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 615.879291431886,
			"y": 455.00966840340953,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 14.239990234375,
			"height": 25,
			"seed": 1832158507,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604361146,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 516221515,
			"isDeleted": false,
			"id": "MQIwj7fO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 670.2751339296741,
			"y": 454.19710497003047,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 285751589,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604366880,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 2082923013,
			"isDeleted": false,
			"id": "2RRoLRoN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 724.04663390238,
			"y": 400.0721169500353,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 931206027,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604371083,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 1535933611,
			"isDeleted": false,
			"id": "gbtR2cxc",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 721.4758117402768,
			"y": 454.9637608648006,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 780133573,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604376484,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 1665092005,
			"isDeleted": false,
			"id": "tJ0AnOEA",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 565.2662301154784,
			"y": 502.4321557864926,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 14.239990234375,
			"height": 25,
			"seed": 445615595,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604382457,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 190762789,
			"isDeleted": false,
			"id": "yCTp0T7R",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 612.752988052614,
			"y": 504.1628699920514,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 14.239990234375,
			"height": 25,
			"seed": 1606402155,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604387350,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 1923292555,
			"isDeleted": false,
			"id": "qqS8tzK4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 677.7856072461043,
			"y": 504.30518336173924,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 14.239990234375,
			"height": 25,
			"seed": 104270309,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604391129,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 1044069061,
			"isDeleted": false,
			"id": "1FmIhktg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 724.4919370268872,
			"y": 503.10240585018374,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 358315723,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604394862,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 1547753451,
			"isDeleted": false,
			"id": "Y4jjWnVk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 565.7574407785945,
			"y": 546.2830366657965,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 476384645,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604399842,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 4,
			"versionNonce": 986277157,
			"isDeleted": false,
			"id": "fQ9znx9x",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 676.9822253204471,
			"y": 543.1888685635508,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ebfbee",
			"width": 14.239990234375,
			"height": 25,
			"seed": 869669163,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604403407,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 123,
			"versionNonce": 144081867,
			"isDeleted": false,
			"id": "23LfWvomxc6ehov2RXaUU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -185.7613593343679,
			"y": 245.9010638785852,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 303.3402117441127,
			"height": 225.57187769798853,
			"seed": 1902699307,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1705604579135,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 20,
			"versionNonce": 2094158469,
			"isDeleted": false,
			"id": "uJeqsqLi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -162.8940060299493,
			"y": 278.4432283035279,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 120.71992492675781,
			"height": 25,
			"seed": 129824715,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604528749,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Что делаем?",
			"rawText": "Что делаем?",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Что делаем?",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 196,
			"versionNonce": 1197688709,
			"isDeleted": false,
			"id": "zFB2IUXV",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -173.24966832402896,
			"y": 320.23992534679996,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 273.7198486328125,
			"height": 125,
			"seed": 2011393419,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604582106,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Нужно пройтись по каждой\nклетке и проверить для неё\n8 клеток около него.\nПродумать красивое услоие\nпроверки",
			"rawText": "Нужно пройтись по каждой\nклетке и проверить для неё\n8 клеток около него.\nПродумать красивое услоие\nпроверки",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Нужно пройтись по каждой\nклетке и проверить для неё\n8 клеток около него.\nПродумать красивое услоие\nпроверки",
			"lineHeight": 1.25,
			"baseline": 118
		},
		{
			"type": "line",
			"version": 902,
			"versionNonce": 1318569259,
			"isDeleted": false,
			"id": "pPkDuTXpTi-14iTF0egx1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 30.26478580106682,
			"y": -290.66585973169055,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#846358",
			"width": 14.880829994210984,
			"height": 17.597084387737116,
			"seed": 1548883851,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-2.9064121082443335,
					17.597084387737116
				],
				[
					11.974417885966652,
					17.597084387737116
				],
				[
					9.300518746381865,
					0.9642238020677872
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1255,
			"versionNonce": 1700521931,
			"isDeleted": false,
			"id": "by0Y-U2EUwfpyYgmh1mBC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 53.73096745628421,
			"y": -324.11480819330734,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 83.04308287062346,
			"height": 43.28331085711918,
			"seed": 1088220715,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-41.56911854932141,
					43.28331085711918
				],
				[
					41.473964321302056,
					43.28331085711918
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1035,
			"versionNonce": 1623373419,
			"isDeleted": false,
			"id": "73QWJMyR2sXE_IQpzcGra",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 68.42681514225049,
			"y": -336.62715981863744,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 65.44043919363499,
			"height": 39.05039407690099,
			"seed": 118747339,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-32.01482730418025,
					39.05039407690099
				],
				[
					33.42561188945473,
					39.05039407690099
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 787,
			"versionNonce": 1872146699,
			"isDeleted": false,
			"id": "ZRxFgPY3YND-TefzjupBh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 84.05936386281697,
			"y": -345.3797491595885,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 43.67641029989473,
			"height": 30.818971914477125,
			"seed": 9543531,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-21.82320708973778,
					30.521249862434956
				],
				[
					21.853203210156945,
					30.818971914477125
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "ellipse",
			"version": 590,
			"versionNonce": 55728043,
			"isDeleted": false,
			"id": "sMFKeqryf34eVEGexPJ2Z",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 29.96022787845746,
			"y": -314.4293059069674,
			"strokeColor": "#000000",
			"backgroundColor": "#c2255c",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1738570251,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 600,
			"versionNonce": 2048928331,
			"isDeleted": false,
			"id": "8PNVWgC38IVBMZkSYhVZi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 32.35312751095442,
			"y": -296.79682545606397,
			"strokeColor": "#000000",
			"backgroundColor": "#f08c00",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1228603563,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 596,
			"versionNonce": 148547819,
			"isDeleted": false,
			"id": "WTTyTrs8H02XTrkRC6sLH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 51.338143593862526,
			"y": -292.84158153773535,
			"strokeColor": "#000000",
			"backgroundColor": "#6741d9",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 789295947,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 604,
			"versionNonce": 1695306635,
			"isDeleted": false,
			"id": "6ng75QvsxxKKv9OjWXxlU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 57.12890784306663,
			"y": -274.7705509243475,
			"strokeColor": "#000000",
			"backgroundColor": "#e8590c",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 158142955,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 598,
			"versionNonce": 787458603,
			"isDeleted": false,
			"id": "7Q95cK6Kk9NG5uVdZGgZC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 53.43533775629876,
			"y": -324.32805610164996,
			"strokeColor": "#000000",
			"backgroundColor": "#228be6",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1500093579,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 598,
			"versionNonce": 460270795,
			"isDeleted": false,
			"id": "TZrQEFQM_I5JdCTEkgCpT",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 54.53363019809021,
			"y": -309.1200402283646,
			"strokeColor": "#000000",
			"backgroundColor": "#ffd43b",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 448516907,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 609,
			"versionNonce": 1579506539,
			"isDeleted": false,
			"id": "Du0OWD7nE3tPMEPEgKulg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 70.55858876264087,
			"y": -303.03294619545227,
			"strokeColor": "#000000",
			"backgroundColor": "#38d9a9",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1842230731,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 641,
			"versionNonce": 1398584843,
			"isDeleted": false,
			"id": "CGuLcm-cQzVvJ_jOzpXS1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 68.82914673012468,
			"y": -331.90087062523884,
			"strokeColor": "#000000",
			"backgroundColor": "#fa5252",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 29049963,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 645,
			"versionNonce": 1779416235,
			"isDeleted": false,
			"id": "EN6HIq86M6FvqJrRRxpoY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 83.70617686755429,
			"y": -333.34970597136385,
			"strokeColor": "#000000",
			"backgroundColor": "#9775fa",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1045266187,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 621,
			"versionNonce": 1307111243,
			"isDeleted": false,
			"id": "aE_rjpXC10CVjVCwrlQyN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 80.92968325733312,
			"y": -319.7875832572523,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 771712427,
			"groupIds": [
				"xOmd1QtH1MvrUTXp9pM_S",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 1899,
			"versionNonce": 1363332587,
			"isDeleted": false,
			"id": "ZaXSaKp3DwYQpEZDNU2k-",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 91.6070430925202,
			"y": -335.2292134728634,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 18.957727550708046,
			"height": 19.040918169565796,
			"seed": 670791755,
			"groupIds": [
				"OqRkOXiuQGMqDqFHyVjjO",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					4.512223011596915,
					-1.385024856481178
				],
				[
					6.831511320947442,
					2.767452383852125
				],
				[
					9.081769743457057,
					-1.382317789859547
				],
				[
					13.534510655726054,
					-0.06566439515092659
				],
				[
					12.232160756705431,
					-4.497919515908941
				],
				[
					16.287659543890253,
					-6.7944539171724285
				],
				[
					12.206480306973928,
					-9.113303276477376
				],
				[
					13.580237946922995,
					-13.525950505815567
				],
				[
					9.096512189190575,
					-12.192396286308758
				],
				[
					6.83725466672491,
					-16.273465785713668
				],
				[
					4.582060129417051,
					-12.194755728616116
				],
				[
					0.09472987077215801,
					-13.486534782152813
				],
				[
					1.3374393236527125,
					-8.982873042886023
				],
				[
					-2.6700680068177944,
					-6.795077738895692
				],
				[
					1.330627677862363,
					-4.526965457330457
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 2028,
			"versionNonce": 388487307,
			"isDeleted": false,
			"id": "5Z_BmoW8jFqaEdAzn4vnv",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.8140863237749238,
			"x": 93.46555363086189,
			"y": -337.0724959777034,
			"strokeColor": "#000000",
			"backgroundColor": "#ffd43b",
			"width": 13.78307734327848,
			"height": 13.843560475071811,
			"seed": 974927595,
			"groupIds": [
				"OqRkOXiuQGMqDqFHyVjjO",
				"z-yYCOBeaSsWyTHYb4l_x"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604608157,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					3.2805787820617986,
					-1.006972205301594
				],
				[
					4.966800406654457,
					2.012056041445201
				],
				[
					6.602834356232735,
					-1.0050040522874968
				],
				[
					9.840167112451809,
					-0.047740818863652314
				],
				[
					8.893303131091253,
					-3.2701795299985315
				],
				[
					11.841823901833775,
					-4.939858091917319
				],
				[
					8.874632347691039,
					-6.625760581085551
				],
				[
					9.873412805511814,
					-9.833943517985086
				],
				[
					6.613552743720405,
					-8.864392663339999
				],
				[
					4.970976064250985,
					-11.83150443362661
				],
				[
					3.331353348463385,
					-8.866108078635547
				],
				[
					0.06887266061182867,
					-9.805286603999381
				],
				[
					0.972375491236496,
					-6.530932232451309
				],
				[
					-1.9412534414447038,
					-4.940311636944654
				],
				[
					0.9674231339187596,
					-3.2912971695494875
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1031,
			"versionNonce": 1956272523,
			"isDeleted": false,
			"id": "AtGxj0zdfeFqR6l_fPoAx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -116.35442088231775,
			"y": -291.13863716679697,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#846358",
			"width": 14.880829994210984,
			"height": 17.597084387737116,
			"seed": 1657829381,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-2.9064121082443335,
					17.597084387737116
				],
				[
					11.974417885966652,
					17.597084387737116
				],
				[
					9.300518746381865,
					0.9642238020677872
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1384,
			"versionNonce": 1791815723,
			"isDeleted": false,
			"id": "Fg_lmLUcn9MgEkSXftNKW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -130.94896535018952,
			"y": -323.9273342701601,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 83.04308287062346,
			"height": 43.28331085711918,
			"seed": 1483550565,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-41.56911854932141,
					43.28331085711918
				],
				[
					41.473964321302056,
					43.28331085711918
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1164,
			"versionNonce": 934523595,
			"isDeleted": false,
			"id": "iOIixXgS8y_yhJEDPbGIX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -145.87243650078923,
			"y": -335.7850063584113,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 65.44043919363499,
			"height": 39.05039407690099,
			"seed": 473692869,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-32.01482730418025,
					39.05039407690099
				],
				[
					33.42561188945473,
					39.05039407690099
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 916,
			"versionNonce": 1273569643,
			"isDeleted": false,
			"id": "zW01JFILMejqCA8loc9I-",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -158.72708516487245,
			"y": -346.4968665417918,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 43.67641029989473,
			"height": 30.818971914477125,
			"seed": 1188715045,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-21.82320708973778,
					30.521249862434956
				],
				[
					21.853203210156945,
					30.818971914477125
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "ellipse",
			"version": 719,
			"versionNonce": 548912139,
			"isDeleted": false,
			"id": "l0NIrICwKxoOxrsigPAgm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -144.90185195891326,
			"y": -281.80581497524287,
			"strokeColor": "#000000",
			"backgroundColor": "#c2255c",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 20303237,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 729,
			"versionNonce": 572129963,
			"isDeleted": false,
			"id": "n6aoH7sDaRbRQ4c3PFWm_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -127.31498758828197,
			"y": -284.51368076063756,
			"strokeColor": "#000000",
			"backgroundColor": "#f08c00",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 2055984357,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 725,
			"versionNonce": 1488614731,
			"isDeleted": false,
			"id": "HSPVtuDWmhwW4sDU8fqeO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -123.6999146361898,
			"y": -303.5663980910557,
			"strokeColor": "#000000",
			"backgroundColor": "#6741d9",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 510259269,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 733,
			"versionNonce": 1408472043,
			"isDeleted": false,
			"id": "2Xc0BkdCzZoxEuNmeyJWg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -105.73533950531284,
			"y": -309.67942830421026,
			"strokeColor": "#000000",
			"backgroundColor": "#e8590c",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 179150757,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 727,
			"versionNonce": 1406131851,
			"isDeleted": false,
			"id": "0o5WF5m8lX1oSMAJxyuo8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -155.21886057568443,
			"y": -305.10013557909184,
			"strokeColor": "#000000",
			"backgroundColor": "#228be6",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1166304005,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 727,
			"versionNonce": 856282411,
			"isDeleted": false,
			"id": "PUPFIwiN3LayEofr923Dg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -140.03291955122796,
			"y": -306.47024079093757,
			"strokeColor": "#000000",
			"backgroundColor": "#ffd43b",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 862698085,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 738,
			"versionNonce": 285997003,
			"isDeleted": false,
			"id": "Jd814fd4suFHdyG15HYcJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -134.2333981757588,
			"y": -322.60150120593784,
			"strokeColor": "#000000",
			"backgroundColor": "#38d9a9",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1295066565,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 770,
			"versionNonce": 1005635179,
			"isDeleted": false,
			"id": "u8swTouf1K_IEWjt8OjnB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -163.06577515108432,
			"y": -320.3560461116593,
			"strokeColor": "#000000",
			"backgroundColor": "#fa5252",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 368190757,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 774,
			"versionNonce": 1518518539,
			"isDeleted": false,
			"id": "EMV11vwCxseUVZjqLpHTL",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -164.7804476719649,
			"y": -335.2047850384606,
			"strokeColor": "#000000",
			"backgroundColor": "#9775fa",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1360803973,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 750,
			"versionNonce": 1446799275,
			"isDeleted": false,
			"id": "vyKYNoNJgKyvMHUGkV9J0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -151.17083777799618,
			"y": -332.6712878874442,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 2020401125,
			"groupIds": [
				"8KBFts9zf9hyH7ud-pZx5",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 2028,
			"versionNonce": 88619595,
			"isDeleted": false,
			"id": "sG6lq3FLx0HSsodEsd0WF",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -180.43125578097883,
			"y": -337.1680848027479,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 18.957727550708046,
			"height": 19.040918169565796,
			"seed": 1911659333,
			"groupIds": [
				"MRPyYb1J6Yv3dRfAP71-A",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					4.512223011596915,
					-1.385024856481178
				],
				[
					6.831511320947442,
					2.767452383852125
				],
				[
					9.081769743457057,
					-1.382317789859547
				],
				[
					13.534510655726054,
					-0.06566439515092659
				],
				[
					12.232160756705431,
					-4.497919515908941
				],
				[
					16.287659543890253,
					-6.7944539171724285
				],
				[
					12.206480306973928,
					-9.113303276477376
				],
				[
					13.580237946922995,
					-13.525950505815567
				],
				[
					9.096512189190575,
					-12.192396286308758
				],
				[
					6.83725466672491,
					-16.273465785713668
				],
				[
					4.582060129417051,
					-12.194755728616116
				],
				[
					0.09472987077215801,
					-13.486534782152813
				],
				[
					1.3374393236527125,
					-8.982873042886023
				],
				[
					-2.6700680068177944,
					-6.795077738895692
				],
				[
					1.330627677862363,
					-4.526965457330457
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 2157,
			"versionNonce": 343980267,
			"isDeleted": false,
			"id": "E-sZWckEAo3tKnpEwz8hG",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.508589806390596,
			"x": -178.57274524263698,
			"y": -339.01136730758793,
			"strokeColor": "#000000",
			"backgroundColor": "#ffd43b",
			"width": 13.78307734327848,
			"height": 13.843560475071811,
			"seed": 101182117,
			"groupIds": [
				"MRPyYb1J6Yv3dRfAP71-A",
				"poTmqtSTi90NoZZSthjdR"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604615008,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					3.2805787820617986,
					-1.006972205301594
				],
				[
					4.966800406654457,
					2.012056041445201
				],
				[
					6.602834356232735,
					-1.0050040522874968
				],
				[
					9.840167112451809,
					-0.047740818863652314
				],
				[
					8.893303131091253,
					-3.2701795299985315
				],
				[
					11.841823901833775,
					-4.939858091917319
				],
				[
					8.874632347691039,
					-6.625760581085551
				],
				[
					9.873412805511814,
					-9.833943517985086
				],
				[
					6.613552743720405,
					-8.864392663339999
				],
				[
					4.970976064250985,
					-11.83150443362661
				],
				[
					3.331353348463385,
					-8.866108078635547
				],
				[
					0.06887266061182867,
					-9.805286603999381
				],
				[
					0.972375491236496,
					-6.530932232451309
				],
				[
					-1.9412534414447038,
					-4.940311636944654
				],
				[
					0.9674231339187596,
					-3.2912971695494875
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1020,
			"versionNonce": 865190091,
			"isDeleted": false,
			"id": "CwUawx4HKBM5ULtvQhgqJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 19.225260994725915,
			"y": -235.91051105795881,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#846358",
			"width": 14.880829994210984,
			"height": 17.597084387737116,
			"seed": 129860043,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-2.9064121082443335,
					17.597084387737116
				],
				[
					11.974417885966652,
					17.597084387737116
				],
				[
					9.300518746381865,
					0.9642238020677872
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1373,
			"versionNonce": 2094362475,
			"isDeleted": false,
			"id": "ScK4A0L5iCgmkLj2ss9PU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 42.90248878554776,
			"y": -232.28607816779555,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 83.04308287062346,
			"height": 43.28331085711918,
			"seed": 937496683,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-41.56911854932141,
					43.28331085711918
				],
				[
					41.473964321302056,
					43.28331085711918
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1153,
			"versionNonce": 1256868363,
			"isDeleted": false,
			"id": "Q4hp6_iMnp7M2a0n5Fk7Q",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 58.13363977233968,
			"y": -215.10844502770186,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 65.44043919363499,
			"height": 39.05039407690099,
			"seed": 1171901195,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-32.01482730418025,
					39.05039407690099
				],
				[
					33.42561188945473,
					39.05039407690099
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 905,
			"versionNonce": 1120587947,
			"isDeleted": false,
			"id": "2llP74np9qkUSZfNHhKUM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 73.20952872244922,
			"y": -196.69935603369464,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 43.67641029989473,
			"height": 30.818971914477125,
			"seed": 371339691,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-21.82320708973778,
					30.521249862434956
				],
				[
					21.853203210156945,
					30.818971914477125
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "ellipse",
			"version": 708,
			"versionNonce": 102859595,
			"isDeleted": false,
			"id": "_caFrT242uPKBH_w5l6dC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 51.645440125419,
			"y": -232.9766150827166,
			"strokeColor": "#000000",
			"backgroundColor": "#c2255c",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 434422859,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 718,
			"versionNonce": 491315691,
			"isDeleted": false,
			"id": "q0DbbA08vXigcvu-4KS6p",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 34.131132688573544,
			"y": -229.83346848887882,
			"strokeColor": "#000000",
			"backgroundColor": "#f08c00",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 956039915,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 714,
			"versionNonce": 558591115,
			"isDeleted": false,
			"id": "IgIQ72QVHiZVJ4BZ88ySi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 30.989634669207675,
			"y": -210.69696462019706,
			"strokeColor": "#000000",
			"backgroundColor": "#6741d9",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 2079485323,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 722,
			"versionNonce": 635675435,
			"isDeleted": false,
			"id": "KiHjBBpXcSXTZ-hKK2Pzu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 13.182172813073976,
			"y": -204.1403343681391,
			"strokeColor": "#000000",
			"backgroundColor": "#e8590c",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1979876395,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 716,
			"versionNonce": 1669072331,
			"isDeleted": false,
			"id": "c3HTuspDZ5QrRSKBUr3pl",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 62.53692135996589,
			"y": -209.94529563048008,
			"strokeColor": "#000000",
			"backgroundColor": "#228be6",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1863763659,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 716,
			"versionNonce": 556733547,
			"isDeleted": false,
			"id": "YwZe8_7teigwM999HxQuU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 47.3896255978637,
			"y": -208.1990355739032,
			"strokeColor": "#000000",
			"backgroundColor": "#ffd43b",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1305064811,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 727,
			"versionNonce": 1590120203,
			"isDeleted": false,
			"id": "qS84AARodoVQSVt7C1uPl",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 41.99190552933872,
			"y": -191.92892098232994,
			"strokeColor": "#000000",
			"backgroundColor": "#38d9a9",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1097191435,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 759,
			"versionNonce": 1052718507,
			"isDeleted": false,
			"id": "US0vUNds2djfseT3xO8FN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 70.75973417919951,
			"y": -194.888661747996,
			"strokeColor": "#000000",
			"backgroundColor": "#fa5252",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 736466603,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 763,
			"versionNonce": 809584715,
			"isDeleted": false,
			"id": "0k5cKapU92DyJZ2fg-9T6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 72.8420937559365,
			"y": -180.0870088618032,
			"strokeColor": "#000000",
			"backgroundColor": "#9775fa",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 1274251595,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 739,
			"versionNonce": 1495795435,
			"isDeleted": false,
			"id": "qy2U8jx86YvH3LQRrDet_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 59.17384408943144,
			"y": -182.28224013305942,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 5.785342812406724,
			"height": 5.785342812406724,
			"seed": 652879851,
			"groupIds": [
				"IZMrTEu1xQo1tJoUKBeC8",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 2017,
			"versionNonce": 1073607051,
			"isDeleted": false,
			"id": "xcGGA43dEbMABmAlo7Est",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 80.94492037340908,
			"y": -159.12691573670187,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 18.957727550708046,
			"height": 19.040918169565796,
			"seed": 852750987,
			"groupIds": [
				"l2uHaHa_0KVoKxQfU_urS",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					4.512223011596915,
					-1.385024856481178
				],
				[
					6.831511320947442,
					2.767452383852125
				],
				[
					9.081769743457057,
					-1.382317789859547
				],
				[
					13.534510655726054,
					-0.06566439515092659
				],
				[
					12.232160756705431,
					-4.497919515908941
				],
				[
					16.287659543890253,
					-6.7944539171724285
				],
				[
					12.206480306973928,
					-9.113303276477376
				],
				[
					13.580237946922995,
					-13.525950505815567
				],
				[
					9.096512189190575,
					-12.192396286308758
				],
				[
					6.83725466672491,
					-16.273465785713668
				],
				[
					4.582060129417051,
					-12.194755728616116
				],
				[
					0.09472987077215801,
					-13.486534782152813
				],
				[
					1.3374393236527125,
					-8.982873042886023
				],
				[
					-2.6700680068177944,
					-6.795077738895692
				],
				[
					1.330627677862363,
					-4.526965457330457
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 2146,
			"versionNonce": 905807915,
			"isDeleted": false,
			"id": "ILETlDyFBhG7OpeH4Tm1k",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 2.342196926722769,
			"x": 82.80343091175067,
			"y": -160.97019824154194,
			"strokeColor": "#000000",
			"backgroundColor": "#ffd43b",
			"width": 13.78307734327848,
			"height": 13.843560475071811,
			"seed": 1080781099,
			"groupIds": [
				"l2uHaHa_0KVoKxQfU_urS",
				"QxnjpTE7qjuYZkL8IgfXn"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604623119,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					3.2805787820617986,
					-1.006972205301594
				],
				[
					4.966800406654457,
					2.012056041445201
				],
				[
					6.602834356232735,
					-1.0050040522874968
				],
				[
					9.840167112451809,
					-0.047740818863652314
				],
				[
					8.893303131091253,
					-3.2701795299985315
				],
				[
					11.841823901833775,
					-4.939858091917319
				],
				[
					8.874632347691039,
					-6.625760581085551
				],
				[
					9.873412805511814,
					-9.833943517985086
				],
				[
					6.613552743720405,
					-8.864392663339999
				],
				[
					4.970976064250985,
					-11.83150443362661
				],
				[
					3.331353348463385,
					-8.866108078635547
				],
				[
					0.06887266061182867,
					-9.805286603999381
				],
				[
					0.972375491236496,
					-6.530932232451309
				],
				[
					-1.9412534414447038,
					-4.940311636944654
				],
				[
					0.9674231339187596,
					-3.2912971695494875
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1305,
			"versionNonce": 452449573,
			"isDeleted": false,
			"id": "B7rjN9HTKD0lO2-S5Lp5s",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -108.89323682095862,
			"y": -230.56431579342018,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#846358",
			"width": 14.474009329909688,
			"height": 17.116005203096865,
			"seed": 841508453,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-2.826954947247986,
					17.116005203096865
				],
				[
					11.647054382661702,
					17.116005203096865
				],
				[
					9.046255831193553,
					0.9378632987998283
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1658,
			"versionNonce": 166455429,
			"isDeleted": false,
			"id": "CVMPgbZ68NaJ3aOq1xu63",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -122.309305647819,
			"y": -228.01117833170898,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 80.77280344721781,
			"height": 42.10000688261622,
			"seed": 662196677,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-40.43267814719107,
					42.10000688261622
				],
				[
					40.34012530002675,
					42.10000688261622
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1437,
			"versionNonce": 1539739621,
			"isDeleted": false,
			"id": "CgOXZOWVI3ajoIrmcR0ev",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -140.5689462193407,
			"y": -210.81353511392214,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 63.65139093790731,
			"height": 37.982812008846146,
			"seed": 1987301669,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-31.1395875953438,
					37.982812008846146
				],
				[
					32.5118033425635,
					37.982812008846146
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1188,
			"versionNonce": 513100613,
			"isDeleted": false,
			"id": "vxQ8YYmjRoBrm38sN_0kz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -154.54240897665446,
			"y": -192.14544252497373,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#2f9e44",
			"width": 42.48235954738888,
			"height": 29.97642518608844,
			"seed": 210265221,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-21.22659173905602,
					29.68684243024387
				],
				[
					21.255767808332863,
					29.97642518608844
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "ellipse",
			"version": 991,
			"versionNonce": 1119197861,
			"isDeleted": false,
			"id": "1RHiVblggvMdfyI-EoNvY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -105.99348704238888,
			"y": -193.470071646624,
			"strokeColor": "#000000",
			"backgroundColor": "#c2255c",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 1299418085,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1001,
			"versionNonce": 1356135941,
			"isDeleted": false,
			"id": "cNnLqcpidQ_t27tgkJEOV",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -107.74759345460392,
			"y": -210.68859805167187,
			"strokeColor": "#000000",
			"backgroundColor": "#f08c00",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 1229113157,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 997,
			"versionNonce": 1609626981,
			"isDeleted": false,
			"id": "u7VGN_oSar3IH68OUXH0m",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -126.07498375089088,
			"y": -215.14953246885398,
			"strokeColor": "#000000",
			"backgroundColor": "#6741d9",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 844338853,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1005,
			"versionNonce": 1263993029,
			"isDeleted": false,
			"id": "tsC6y4MIy7k2Yn53MWB5M",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -131.1179942370364,
			"y": -232.90462483334494,
			"strokeColor": "#000000",
			"backgroundColor": "#e8590c",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 324237829,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 999,
			"versionNonce": 681877541,
			"isDeleted": false,
			"id": "of6Du6m674zYD-DMolW7y",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -129.13527592011596,
			"y": -184.60893865387789,
			"strokeColor": "#000000",
			"backgroundColor": "#228be6",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 1161818469,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 999,
			"versionNonce": 2110215045,
			"isDeleted": false,
			"id": "9QiJ7IGV3ZEo9nBSA-6f1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -129.70952947934558,
			"y": -199.42859110869577,
			"strokeColor": "#000000",
			"backgroundColor": "#ffd43b",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 627473605,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1010,
			"versionNonce": 922524389,
			"isDeleted": false,
			"id": "z5-eD9s9YJ25slQjabAwD",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -145.09022108431952,
			"y": -205.86590197753765,
			"strokeColor": "#000000",
			"backgroundColor": "#38d9a9",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 191142949,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1042,
			"versionNonce": 1557263941,
			"isDeleted": false,
			"id": "Bfk8nNIgTht29CCkjnhvq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -144.3456051560178,
			"y": -177.74669967607156,
			"strokeColor": "#000000",
			"backgroundColor": "#fa5252",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 2133315461,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1046,
			"versionNonce": 170190245,
			"isDeleted": false,
			"id": "e6hNYWHm47IxmCShV-Dxr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -158.85487294570416,
			"y": -176.8209375800176,
			"strokeColor": "#000000",
			"backgroundColor": "#9775fa",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 787322597,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1022,
			"versionNonce": 572713221,
			"isDeleted": false,
			"id": "503TBWnx00jwRNHb1o7-_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -155.71576930499936,
			"y": -189.91486806820083,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 5.62717979279897,
			"height": 5.62717979279897,
			"seed": 625177157,
			"groupIds": [
				"HFcVrtB1dGEu2wItyNf6X",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 2300,
			"versionNonce": 1179222117,
			"isDeleted": false,
			"id": "tGYW-_Za-5AnzIT1kbrUN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -174.52540131847937,
			"y": -156.61849138422977,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 18.43945032297126,
			"height": 18.52036662898218,
			"seed": 1057415589,
			"groupIds": [
				"rMY2cjfISjN7vTB4hKegU",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					4.388865271217677,
					-1.3471602526649475
				],
				[
					6.644747546692185,
					2.6917941834924064
				],
				[
					8.833487113959782,
					-1.3445271933830782
				],
				[
					13.164496441593005,
					-0.0638692242588033
				],
				[
					11.897750930988783,
					-4.374952812697649
				],
				[
					15.842378166565428,
					-6.608703239473407
				],
				[
					11.87277254811937,
					-8.864158565170413
				],
				[
					13.20897361387933,
					-13.156170313969884
				],
				[
					8.847826522257279,
					-11.85907356448811
				],
				[
					6.6503338775890715,
					-15.828572445489774
				],
				[
					4.456793141860368,
					-11.861368503008565
				],
				[
					0.09214009123891305,
					-13.117832159964914
				],
				[
					1.3008756404224933,
					-8.737294108104646
				],
				[
					-2.5970721564058326,
					-6.609310006800648
				],
				[
					1.2942502153111308,
					-4.403204679515198
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 2431,
			"versionNonce": 208022469,
			"isDeleted": false,
			"id": "7Wr21TJilutzwg-W6cub6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 3.9890417310209187,
			"x": -172.7176998070612,
			"y": -158.41138117485943,
			"strokeColor": "#000000",
			"backgroundColor": "#ffd43b",
			"width": 13.406267670492078,
			"height": 13.465097279742329,
			"seed": 1634034949,
			"groupIds": [
				"rMY2cjfISjN7vTB4hKegU",
				"a-355-pI_8cUELZbPS36K"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705604638317,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					3.190892437957988,
					-0.9794430216704991
				],
				[
					4.831015168756223,
					1.957049299502002
				],
				[
					6.422322283981456,
					-0.9775286751522059
				],
				[
					9.571150980752114,
					-0.04643565297895673
				],
				[
					8.650172909925441,
					-3.1807774866114316
				],
				[
					11.518085328907594,
					-4.8048094184703585
				],
				[
					8.63201255910922,
					-6.444621738551419
				],
				[
					9.603487783989369,
					-9.565097530480054
				],
				[
					6.432747646045162,
					-8.622052813121265
				],
				[
					4.835076669830704,
					-11.508047980240326
				],
				[
					3.2402789001448804,
					-8.6237213314097
				],
				[
					0.06698978031864597,
					-9.537224055643176
				],
				[
					0.9457921324151787,
					-6.352385861694691
				],
				[
					-1.888182341584485,
					-4.805250564223634
				],
				[
					0.9409751654818929,
					-3.2013178000217124
				],
				[
					0,
					0
				]
			]
		},
		{
			"id": "1oi26j4C",
			"type": "text",
			"x": 861.034901001675,
			"y": 44.96940766657697,
			"width": 878.90625,
			"height": 840,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"jgUa_BaXpjRXTdBDTWZZk"
			],
			"frameId": null,
			"roundness": null,
			"seed": 1841560555,
			"version": 107,
			"versionNonce": 777422603,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1705612998240,
			"link": null,
			"locked": false,
			"text": "function doSaperField(line, column, mines) {\n  let res = \"\";\n  for (let i = 0; i < line; i++) {\n    for (let j = 0; j < column; j++) {\n      if (mines.has([i + 1, j + 1].join(\"-\"))) {\n        res += \"* \";\n        continue;\n      }\n      //current = i , j\n      let firstlineLeftTop = mines.has([i - 1 + 1, j - 1 + 1].join(\"-\"));\n      let firstlineLeftLeft = mines.has([i + 1, j - 1 + 1].join(\"-\"));\n      let firstlineDownLeft = mines.has([i + 1 + 1, j - 1 + 1].join(\"-\"));\n      //\n      let twelwelineRightTop = mines.has([i - 1 + 1, j + 1 + 1].join(\"-\"));\n      let twelwelineLeftLeft = mines.has([i + 1, j + 1 + 1].join(\"-\"));\n      let twelwelineDownLeft = mines.has([i + 1 + 1, j + 1 + 1].join(\"-\"));\n      //\n      let topTop = mines.has([i - 1 + 1, j + 1].join(\"-\"));\n      let downDown = mines.has([i + 1 + 1, j + 1].join(\"-\"));\n      let summ =\n        firstlineLeftTop +\n        firstlineLeftLeft +\n        firstlineDownLeft +\n        twelwelineRightTop +\n        twelwelineLeftLeft +\n        twelwelineDownLeft +\n        topTop +\n        downDown;\n      res += summ + \" \";\n    }\n    res += \"\\n\";\n  }\n  console.log(res, mines);\n  return res;\n}",
			"rawText": "function doSaperField(line, column, mines) {\n  let res = \"\";\n  for (let i = 0; i < line; i++) {\n    for (let j = 0; j < column; j++) {\n      if (mines.has([i + 1, j + 1].join(\"-\"))) {\n        res += \"* \";\n        continue;\n      }\n      //current = i , j\n      let firstlineLeftTop = mines.has([i - 1 + 1, j - 1 + 1].join(\"-\"));\n      let firstlineLeftLeft = mines.has([i + 1, j - 1 + 1].join(\"-\"));\n      let firstlineDownLeft = mines.has([i + 1 + 1, j - 1 + 1].join(\"-\"));\n      //\n      let twelwelineRightTop = mines.has([i - 1 + 1, j + 1 + 1].join(\"-\"));\n      let twelwelineLeftLeft = mines.has([i + 1, j + 1 + 1].join(\"-\"));\n      let twelwelineDownLeft = mines.has([i + 1 + 1, j + 1 + 1].join(\"-\"));\n      //\n      let topTop = mines.has([i - 1 + 1, j + 1].join(\"-\"));\n      let downDown = mines.has([i + 1 + 1, j + 1].join(\"-\"));\n      let summ =\n        firstlineLeftTop +\n        firstlineLeftLeft +\n        firstlineDownLeft +\n        twelwelineRightTop +\n        twelwelineLeftLeft +\n        twelwelineDownLeft +\n        topTop +\n        downDown;\n      res += summ + \" \";\n    }\n    res += \"\\n\";\n  }\n  console.log(res, mines);\n  return res;\n}",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 836,
			"containerId": null,
			"originalText": "function doSaperField(line, column, mines) {\n  let res = \"\";\n  for (let i = 0; i < line; i++) {\n    for (let j = 0; j < column; j++) {\n      if (mines.has([i + 1, j + 1].join(\"-\"))) {\n        res += \"* \";\n        continue;\n      }\n      //current = i , j\n      let firstlineLeftTop = mines.has([i - 1 + 1, j - 1 + 1].join(\"-\"));\n      let firstlineLeftLeft = mines.has([i + 1, j - 1 + 1].join(\"-\"));\n      let firstlineDownLeft = mines.has([i + 1 + 1, j - 1 + 1].join(\"-\"));\n      //\n      let twelwelineRightTop = mines.has([i - 1 + 1, j + 1 + 1].join(\"-\"));\n      let twelwelineLeftLeft = mines.has([i + 1, j + 1 + 1].join(\"-\"));\n      let twelwelineDownLeft = mines.has([i + 1 + 1, j + 1 + 1].join(\"-\"));\n      //\n      let topTop = mines.has([i - 1 + 1, j + 1].join(\"-\"));\n      let downDown = mines.has([i + 1 + 1, j + 1].join(\"-\"));\n      let summ =\n        firstlineLeftTop +\n        firstlineLeftLeft +\n        firstlineDownLeft +\n        twelwelineRightTop +\n        twelwelineLeftLeft +\n        twelwelineDownLeft +\n        topTop +\n        downDown;\n      res += summ + \" \";\n    }\n    res += \"\\n\";\n  }\n  console.log(res, mines);\n  return res;\n}",
			"lineHeight": 1.2
		},
		{
			"id": "mF_URn4bqY1wObfLwLhrr",
			"type": "rectangle",
			"x": 826.7575572516752,
			"y": 28.296230583243727,
			"width": 962.1549479166664,
			"height": 916.4648437499999,
			"angle": 0,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"jgUa_BaXpjRXTdBDTWZZk"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 17545419,
			"version": 162,
			"versionNonce": 1837204261,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1705612998240,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 315,
			"versionNonce": 391005413,
			"isDeleted": false,
			"id": "nJnNgx6Mi2-8C5YqvDQ1P",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1273.192824638952,
			"y": 558.7006997171734,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 401.81133341856,
			"height": 26.25074475348157,
			"seed": 1026614661,
			"groupIds": [
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 419,
			"versionNonce": 1499357253,
			"isDeleted": false,
			"id": "6E9L31YTM_C-4bTF3TU5F",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1287.4990376819242,
			"y": 584.6564105695609,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 373.1989073326162,
			"height": 23.750742768121953,
			"seed": 929295589,
			"groupIds": [
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 292,
			"versionNonce": 1301548965,
			"isDeleted": false,
			"id": "1D_hNKLR5YUf2if4rdeAc",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.8454077172364,
			"y": 608.6151248828598,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 352.5002799357056,
			"height": 239.3822421140771,
			"seed": 947849285,
			"groupIds": [
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 358,
			"versionNonce": 1109185285,
			"isDeleted": false,
			"id": "es0jXrkgF2lw5yJtpfqWX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1273.192824638952,
			"y": 847.371413143386,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 401.81133341856,
			"height": 26.25074475348157,
			"seed": 1382004645,
			"groupIds": [
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 297,
			"versionNonce": 1668688485,
			"isDeleted": false,
			"id": "3STGekLMAyznQQbWjJuby",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.8905994785669,
			"y": 609.1126890399482,
			"strokeColor": "#000000",
			"backgroundColor": "#e03131",
			"width": 55.256599663184865,
			"height": 23.05671065082531,
			"seed": 2134080261,
			"groupIds": [
				"glN86LhAkc2HhE0_n6T6-",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 320,
			"versionNonce": 1919784389,
			"isDeleted": false,
			"id": "qDSB87Hp8WuohgDNDNFJv",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1353.7434933827208,
			"y": 609.1126890399482,
			"strokeColor": "#000000",
			"backgroundColor": "#fd7e14",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 393728613,
			"groupIds": [
				"glN86LhAkc2HhE0_n6T6-",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 317,
			"versionNonce": 975213861,
			"isDeleted": false,
			"id": "uf-dSFvLSmATUT1Bs2fW0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1414.5655059616229,
			"y": 609.1126890399482,
			"strokeColor": "#000000",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 133840325,
			"groupIds": [
				"glN86LhAkc2HhE0_n6T6-",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 304,
			"versionNonce": 1174186117,
			"isDeleted": false,
			"id": "QkqXs0Tvn5t33SZwPHQJo",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1474.9899890465445,
			"y": 609.1126890399482,
			"strokeColor": "#000000",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1205353765,
			"groupIds": [
				"glN86LhAkc2HhE0_n6T6-",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 309,
			"versionNonce": 1472155621,
			"isDeleted": false,
			"id": "0KS87DqB1CxKLKiEx5PDW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1536.6070606134058,
			"y": 609.1126890399482,
			"strokeColor": "#000000",
			"backgroundColor": "#fa5252",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 243224709,
			"groupIds": [
				"glN86LhAkc2HhE0_n6T6-",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 325,
			"versionNonce": 494275397,
			"isDeleted": false,
			"id": "v2m1ekumBgWDxvLpZ3axS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1597.429073192306,
			"y": 609.1126890399482,
			"strokeColor": "#000000",
			"backgroundColor": "#f08c00",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 1236072421,
			"groupIds": [
				"glN86LhAkc2HhE0_n6T6-",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 397,
			"versionNonce": 662592165,
			"isDeleted": false,
			"id": "qvYrhrE6EIVeJaxQG4vvs",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.9884649079795,
			"y": 633.0132523854068,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 25.536057141275386,
			"height": 23.05671065082531,
			"seed": 1399763781,
			"groupIds": [
				"A3tJ_mRL-7atTUxXwGg4j",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 381,
			"versionNonce": 512081413,
			"isDeleted": false,
			"id": "dro-7eXNkdmMLGQyomGAH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1324.1208162902258,
			"y": 633.0132523854068,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1747059365,
			"groupIds": [
				"A3tJ_mRL-7atTUxXwGg4j",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 375,
			"versionNonce": 965326181,
			"isDeleted": false,
			"id": "FarGCD5AAsuj51FxifAAu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1384.9428288691265,
			"y": 633.0132523854068,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1551132165,
			"groupIds": [
				"A3tJ_mRL-7atTUxXwGg4j",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 365,
			"versionNonce": 1943519429,
			"isDeleted": false,
			"id": "SgnLR49OVYQEz3X_ZZ3YM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1445.3673119540485,
			"y": 633.0132523854068,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f08c00",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 325279077,
			"groupIds": [
				"A3tJ_mRL-7atTUxXwGg4j",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 366,
			"versionNonce": 51208229,
			"isDeleted": false,
			"id": "UZKITffAM6L_4lAAnvvQa",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1506.98438352091,
			"y": 633.0132523854068,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fd7e14",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 876374213,
			"groupIds": [
				"A3tJ_mRL-7atTUxXwGg4j",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 389,
			"versionNonce": 219681669,
			"isDeleted": false,
			"id": "OPcEoYkuBuJzKv-z5fFrH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1567.8063960998093,
			"y": 633.0132523854068,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 547162149,
			"groupIds": [
				"A3tJ_mRL-7atTUxXwGg4j",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 415,
			"versionNonce": 506813157,
			"isDeleted": false,
			"id": "ooywdsLNmpu_7F_td0cAv",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1620.2306714519818,
			"y": 633.0132523854068,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffa94d",
			"width": 29.971959010216704,
			"height": 23.05671065082531,
			"seed": 712162181,
			"groupIds": [
				"A3tJ_mRL-7atTUxXwGg4j",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 349,
			"versionNonce": 1592964677,
			"isDeleted": false,
			"id": "VsFDBl5Hawmj5r-o-_l3U",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.8905994785669,
			"y": 656.993775851106,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffa94d",
			"width": 55.256599663184865,
			"height": 23.05671065082531,
			"seed": 167445221,
			"groupIds": [
				"o7JAXs9JHoMJRSOPiKLSa",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 369,
			"versionNonce": 170763685,
			"isDeleted": false,
			"id": "L9xzN7LPqkLHtDHm39ZIx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1353.743493382719,
			"y": 656.993775851106,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 331570757,
			"groupIds": [
				"o7JAXs9JHoMJRSOPiKLSa",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 363,
			"versionNonce": 588491013,
			"isDeleted": false,
			"id": "P1SBPG0J6n_PMcFGDq9I2",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1414.565505961622,
			"y": 656.993775851106,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 782847397,
			"groupIds": [
				"o7JAXs9JHoMJRSOPiKLSa",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 353,
			"versionNonce": 1797406821,
			"isDeleted": false,
			"id": "-3-3PsVVbQmFgieJgJ-TU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1474.9899890465426,
			"y": 656.993775851106,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 165302533,
			"groupIds": [
				"o7JAXs9JHoMJRSOPiKLSa",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 358,
			"versionNonce": 405203909,
			"isDeleted": false,
			"id": "ZDBJKvFU6zy00okmEzpvM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1536.6070606134053,
			"y": 656.993775851106,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 315877477,
			"groupIds": [
				"o7JAXs9JHoMJRSOPiKLSa",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 377,
			"versionNonce": 1245653797,
			"isDeleted": false,
			"id": "u-vfE8wDLXocIQagTPJ-W",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1597.4290731923052,
			"y": 656.993775851106,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fab005",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 727946181,
			"groupIds": [
				"o7JAXs9JHoMJRSOPiKLSa",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 450,
			"versionNonce": 1104707205,
			"isDeleted": false,
			"id": "SN7EjIcAKF_lvFaNWwO6x",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.9884649079809,
			"y": 680.8943391965645,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 25.536057141275386,
			"height": 23.05671065082531,
			"seed": 531026725,
			"groupIds": [
				"w99ITx3O393TSU68nsP4T",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 434,
			"versionNonce": 1437623781,
			"isDeleted": false,
			"id": "Hc_BfXsIe9IUi6scpuucD",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1324.1208162902262,
			"y": 680.8943391965645,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1544234629,
			"groupIds": [
				"w99ITx3O393TSU68nsP4T",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 431,
			"versionNonce": 685007173,
			"isDeleted": false,
			"id": "DFJXEIHPcLYrj6C-iLMZ4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1384.9428288691274,
			"y": 680.8943391965645,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fd7e14",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1666059749,
			"groupIds": [
				"w99ITx3O393TSU68nsP4T",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 418,
			"versionNonce": 547483813,
			"isDeleted": false,
			"id": "p1JuzTu9EoP04jvQXQeN4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1445.36731195405,
			"y": 680.8943391965645,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 75303237,
			"groupIds": [
				"w99ITx3O393TSU68nsP4T",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 422,
			"versionNonce": 449221637,
			"isDeleted": false,
			"id": "2AuxHMwGKItQMq1mnUtgM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1506.9843835209108,
			"y": 680.8943391965645,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fab005",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1358272677,
			"groupIds": [
				"w99ITx3O393TSU68nsP4T",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 442,
			"versionNonce": 1665125221,
			"isDeleted": false,
			"id": "6nPOxaYigIF7y2qh9cs6f",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1567.8063960998106,
			"y": 680.8943391965645,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 1382366213,
			"groupIds": [
				"w99ITx3O393TSU68nsP4T",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 468,
			"versionNonce": 1784354501,
			"isDeleted": false,
			"id": "x8Otk-ypOTAQtmkDExUHM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1620.2306714519818,
			"y": 680.8943391965645,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 29.971959010216704,
			"height": 23.05671065082531,
			"seed": 13202277,
			"groupIds": [
				"w99ITx3O393TSU68nsP4T",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 335,
			"versionNonce": 985003557,
			"isDeleted": false,
			"id": "nMvvz3eXxaMyVzgq4Vy35",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.8905994785669,
			"y": 704.9148427223838,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fab005",
			"width": 55.256599663184865,
			"height": 23.05671065082531,
			"seed": 2020589253,
			"groupIds": [
				"eAL1gL3At5C4zCcMPo72v",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 356,
			"versionNonce": 792586629,
			"isDeleted": false,
			"id": "O3oe1qSTFIQ4S-Zcc4wYe",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1353.743493382719,
			"y": 704.9148427223838,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1878367781,
			"groupIds": [
				"eAL1gL3At5C4zCcMPo72v",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 349,
			"versionNonce": 1764782309,
			"isDeleted": false,
			"id": "OXwHuABvXL23Ofr6CP6rR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1414.565505961622,
			"y": 704.9148427223838,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f08c00",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1850249605,
			"groupIds": [
				"eAL1gL3At5C4zCcMPo72v",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 339,
			"versionNonce": 102435909,
			"isDeleted": false,
			"id": "xjs_CM368y6K0WTyaW48M",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1474.9899890465426,
			"y": 704.9148427223838,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1084627173,
			"groupIds": [
				"eAL1gL3At5C4zCcMPo72v",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 344,
			"versionNonce": 366689189,
			"isDeleted": false,
			"id": "zMGh_bhOIVW-Uqt0q2X_e",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1536.6070606134053,
			"y": 704.9148427223838,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 815510597,
			"groupIds": [
				"eAL1gL3At5C4zCcMPo72v",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 363,
			"versionNonce": 1352564485,
			"isDeleted": false,
			"id": "5JTIbcSETelYSIrtwq5M0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1597.4290731923052,
			"y": 704.9148427223838,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffa94d",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 2047271845,
			"groupIds": [
				"eAL1gL3At5C4zCcMPo72v",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 436,
			"versionNonce": 216159845,
			"isDeleted": false,
			"id": "wza5ZqYTV3USI2x7PgpZZ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.9884649079795,
			"y": 728.8154060678426,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 25.536057141275386,
			"height": 23.05671065082531,
			"seed": 18163461,
			"groupIds": [
				"wVOkPCBIDlV6cPWwGbJII",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 420,
			"versionNonce": 1970553285,
			"isDeleted": false,
			"id": "hqYJP-KkX6kIrU9OwUEts",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1324.1208162902258,
			"y": 728.8154060678426,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1212415589,
			"groupIds": [
				"wVOkPCBIDlV6cPWwGbJII",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 414,
			"versionNonce": 2138161445,
			"isDeleted": false,
			"id": "MFLwLRNj-RMlzUdjJuBRp",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1384.9428288691252,
			"y": 728.8154060678426,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 643885509,
			"groupIds": [
				"wVOkPCBIDlV6cPWwGbJII",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 405,
			"versionNonce": 541611141,
			"isDeleted": false,
			"id": "SY-QL7Jhe6BvE4NGK0Ex3",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1445.3673119540485,
			"y": 728.8154060678426,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1015638309,
			"groupIds": [
				"wVOkPCBIDlV6cPWwGbJII",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 406,
			"versionNonce": 1135967205,
			"isDeleted": false,
			"id": "4vnTNLuAGprBo1M20uTEp",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1506.98438352091,
			"y": 728.8154060678426,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f08c00",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 741014661,
			"groupIds": [
				"wVOkPCBIDlV6cPWwGbJII",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 428,
			"versionNonce": 29800261,
			"isDeleted": false,
			"id": "GW3iEwlEcdvF3vWIS-32T",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1567.8063960998093,
			"y": 728.8154060678426,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 218309605,
			"groupIds": [
				"wVOkPCBIDlV6cPWwGbJII",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 454,
			"versionNonce": 349800101,
			"isDeleted": false,
			"id": "zUXhhmXXxzoTWo0G5LSDY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1620.2306714519818,
			"y": 728.8154060678426,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 29.971959010216704,
			"height": 23.05671065082531,
			"seed": 589258565,
			"groupIds": [
				"wVOkPCBIDlV6cPWwGbJII",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 388,
			"versionNonce": 261843461,
			"isDeleted": false,
			"id": "JYI-fzR2iqnSMw21P2Xe8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.8905994785682,
			"y": 752.7959295335415,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffa94d",
			"width": 55.256599663184865,
			"height": 23.05671065082531,
			"seed": 1423781541,
			"groupIds": [
				"gMbdIgMGL-y7UhKMJGKZF",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 408,
			"versionNonce": 1393156453,
			"isDeleted": false,
			"id": "WD32FLsTNMR15yVJehoVB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1353.7434933827203,
			"y": 752.7959295335415,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1625952773,
			"groupIds": [
				"gMbdIgMGL-y7UhKMJGKZF",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 402,
			"versionNonce": 1148349637,
			"isDeleted": false,
			"id": "_w3RtouhuoiIrHVFOHNlk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1414.5655059616229,
			"y": 752.7959295335415,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1413712229,
			"groupIds": [
				"gMbdIgMGL-y7UhKMJGKZF",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 392,
			"versionNonce": 1131580453,
			"isDeleted": false,
			"id": "ZeLhWM3xVlB20GdlA7KHC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1474.989989046543,
			"y": 752.7959295335415,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1077351621,
			"groupIds": [
				"gMbdIgMGL-y7UhKMJGKZF",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 397,
			"versionNonce": 1610071941,
			"isDeleted": false,
			"id": "C4h_OjJlGETwwVj5TQL_Z",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1536.6070606134044,
			"y": 752.7959295335415,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 811742245,
			"groupIds": [
				"gMbdIgMGL-y7UhKMJGKZF",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 419,
			"versionNonce": 1346340581,
			"isDeleted": false,
			"id": "Q3NZ1V_xo4Y-HAuNiN8p3",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1597.4290731923043,
			"y": 752.7959295335415,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f08c00",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 1622304645,
			"groupIds": [
				"gMbdIgMGL-y7UhKMJGKZF",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 489,
			"versionNonce": 651649605,
			"isDeleted": false,
			"id": "Ng5qPp8Bqu_97nTI6jC6S",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.9884649079795,
			"y": 776.6964928790001,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fab005",
			"width": 25.536057141275386,
			"height": 23.05671065082531,
			"seed": 862269157,
			"groupIds": [
				"VtxBHgjbHEjLHA1a_2_1s",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 473,
			"versionNonce": 1218236837,
			"isDeleted": false,
			"id": "2ZippZVvuB2aCUhW8No8m",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1324.1208162902258,
			"y": 776.6964928790001,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1728580165,
			"groupIds": [
				"VtxBHgjbHEjLHA1a_2_1s",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 467,
			"versionNonce": 582833413,
			"isDeleted": false,
			"id": "UKLdNPo1MKOOSZbeLmLNS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1384.9428288691265,
			"y": 776.6964928790001,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 209222053,
			"groupIds": [
				"VtxBHgjbHEjLHA1a_2_1s",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 457,
			"versionNonce": 548826213,
			"isDeleted": false,
			"id": "l-uqHggQupAyPTM81MdQl",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1445.3673119540485,
			"y": 776.6964928790001,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f08c00",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1021574405,
			"groupIds": [
				"VtxBHgjbHEjLHA1a_2_1s",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 458,
			"versionNonce": 1649776581,
			"isDeleted": false,
			"id": "yw4fI79UglGlKS4RwFwKx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1506.98438352091,
			"y": 776.6964928790001,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 264770661,
			"groupIds": [
				"VtxBHgjbHEjLHA1a_2_1s",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 481,
			"versionNonce": 834164517,
			"isDeleted": false,
			"id": "kKlS_NChJMvt8-jODXxJ_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1567.8063960998093,
			"y": 776.6964928790001,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffa94d",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 1358053317,
			"groupIds": [
				"VtxBHgjbHEjLHA1a_2_1s",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 507,
			"versionNonce": 961292933,
			"isDeleted": false,
			"id": "YtmFSkBjcee5O5csDnv3V",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1620.2306714519818,
			"y": 776.6964928790001,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 29.971959010216704,
			"height": 23.05671065082531,
			"seed": 1988099877,
			"groupIds": [
				"VtxBHgjbHEjLHA1a_2_1s",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 451,
			"versionNonce": 2043580901,
			"isDeleted": false,
			"id": "wJnCnMY3jHPsKP91Xlqcx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.8905994785682,
			"y": 800.2734062179256,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 55.256599663184865,
			"height": 23.05671065082531,
			"seed": 1457443461,
			"groupIds": [
				"a8UcwKuT5m9DUgWdbCTQX",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 471,
			"versionNonce": 5049669,
			"isDeleted": false,
			"id": "ARQWBoKJc58DYc5FMsFjz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1353.7434933827203,
			"y": 800.2734062179256,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 516700645,
			"groupIds": [
				"a8UcwKuT5m9DUgWdbCTQX",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 470,
			"versionNonce": 1545936037,
			"isDeleted": false,
			"id": "VudclXWRWk6LfR0GLk4HM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1414.5655059616229,
			"y": 800.2734062179256,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffa94d",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 123057477,
			"groupIds": [
				"a8UcwKuT5m9DUgWdbCTQX",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 456,
			"versionNonce": 1426341893,
			"isDeleted": false,
			"id": "w8e4Il3YpTfaXgdDIsSBO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1474.989989046543,
			"y": 800.2734062179256,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1272497317,
			"groupIds": [
				"a8UcwKuT5m9DUgWdbCTQX",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 460,
			"versionNonce": 1625814885,
			"isDeleted": false,
			"id": "tNcpmyYQzxTWJzGTp3k0x",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1536.6070606134044,
			"y": 800.2734062179256,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f08c00",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1610803205,
			"groupIds": [
				"a8UcwKuT5m9DUgWdbCTQX",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 479,
			"versionNonce": 1511899845,
			"isDeleted": false,
			"id": "eaQbizSaj4UEJVHaw2DMh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1597.4290731923043,
			"y": 800.2734062179256,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 1708236645,
			"groupIds": [
				"a8UcwKuT5m9DUgWdbCTQX",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 552,
			"versionNonce": 1967333925,
			"isDeleted": false,
			"id": "N0FL-0Nkfy-OmPCV6D1_k",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1297.9884649079809,
			"y": 824.1739695633842,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffa94d",
			"width": 25.536057141275386,
			"height": 23.05671065082531,
			"seed": 1670539973,
			"groupIds": [
				"1KRNV2XSHdadSvm78YMbo",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 536,
			"versionNonce": 2001048965,
			"isDeleted": false,
			"id": "XNmrJL2DriISLlQKkPZ6C",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1324.1208162902262,
			"y": 824.1739695633842,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 971164197,
			"groupIds": [
				"1KRNV2XSHdadSvm78YMbo",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 531,
			"versionNonce": 727882981,
			"isDeleted": false,
			"id": "PCIz_aLHH9aq_rvPcLjW6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1384.9428288691274,
			"y": 824.1739695633842,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fab005",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 1504722309,
			"groupIds": [
				"1KRNV2XSHdadSvm78YMbo",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 520,
			"versionNonce": 422033477,
			"isDeleted": false,
			"id": "LOLlcTf9p421U-4ZdGVnh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1445.36731195405,
			"y": 824.1739695633842,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 976766181,
			"groupIds": [
				"1KRNV2XSHdadSvm78YMbo",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 521,
			"versionNonce": 2054317989,
			"isDeleted": false,
			"id": "7PrkH31KgP5n0ntN7zXdm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1506.9843835209108,
			"y": 824.1739695633842,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e8590c",
			"width": 60.822012578901266,
			"height": 23.05671065082531,
			"seed": 252207173,
			"groupIds": [
				"1KRNV2XSHdadSvm78YMbo",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 544,
			"versionNonce": 1903176453,
			"isDeleted": false,
			"id": "ZcChQvqF79NbcclOnbE-I",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1567.8063960998106,
			"y": 824.1739695633842,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 52.87142269930662,
			"height": 23.05671065082531,
			"seed": 1040060325,
			"groupIds": [
				"1KRNV2XSHdadSvm78YMbo",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 570,
			"versionNonce": 2124317285,
			"isDeleted": false,
			"id": "9J_YtYtIyQNE05f0UVqVN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1620.2306714519818,
			"y": 824.1739695633842,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fa5252",
			"width": 29.971959010216704,
			"height": 23.05671065082531,
			"seed": 356963077,
			"groupIds": [
				"1KRNV2XSHdadSvm78YMbo",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 1061,
			"versionNonce": 919268805,
			"isDeleted": false,
			"id": "t96XXtJeJDQLOpKIWl5aa",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1363.396060332545,
			"y": 846.9977888245762,
			"strokeColor": "#000000",
			"backgroundColor": "#1e1e1e",
			"width": 217.36785846994138,
			"height": 170.47429641956305,
			"seed": 1096821349,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					-140.940322120606
				],
				[
					15.625022524542647,
					-158.74488269710804
				],
				[
					45.304860798872255,
					-169.95935923550292
				],
				[
					175.89873411830493,
					-170.47429641956305
				],
				[
					203.45160385531312,
					-157.87668687935636
				],
				[
					217.36785846994138,
					-140.0435723890472
				],
				[
					216.73807242379232,
					0
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1291,
			"versionNonce": 957541669,
			"isDeleted": false,
			"id": "KBbuOQD_uc1LB5BGhVsry",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1363.7205231954003,
			"y": 706.1885055570767,
			"strokeColor": "#000000",
			"backgroundColor": "#e03131",
			"width": 287.4493653818788,
			"height": 65.21015590149531,
			"seed": 51877317,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					14.990840437124763,
					-18.36377953547853
				],
				[
					43.344497568554395,
					-29.60690986332255
				],
				[
					175.73064826879096,
					-29.441014307710045
				],
				[
					203.1258879230479,
					-17.23946650269414
				],
				[
					216.99241532738912,
					1.4990840437125668
				],
				[
					251.4713483327776,
					-21.36194762290361
				],
				[
					229.73462969894686,
					-44.59775030044794
				],
				[
					191.50798658427536,
					-63.33630084685462
				],
				[
					26.23397076496974,
					-63.71107185778275
				],
				[
					-13.86652740434123,
					-45.3472923223042
				],
				[
					-35.9780170491012,
					-21.736718633831735
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 444,
			"versionNonce": 1692663941,
			"isDeleted": false,
			"id": "uW453VgjAOOmP555dh0zZ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1350.8732456562275,
			"y": 660.8832385018195,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 26.257522072902432,
			"height": 26.531037927828777,
			"seed": 629839141,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					26.257522072902432,
					26.531037927828777
				]
			]
		},
		{
			"type": "line",
			"version": 445,
			"versionNonce": 1341892581,
			"isDeleted": false,
			"id": "2BsQzUaPMQJQ56_bt0X74",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1390.2595287655809,
			"y": 642.8311920766987,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 17.048425078385193,
			"height": 33.387241679176284,
			"seed": 874948741,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					17.048425078385193,
					33.387241679176284
				]
			]
		},
		{
			"type": "line",
			"version": 465,
			"versionNonce": 2087150405,
			"isDeleted": false,
			"id": "7IUobchXYu21jIfX03eyz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1432.1429745076516,
			"y": 642.2841603668467,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 7.38492808300401,
			"height": 34.18948186575873,
			"seed": 1890144229,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					7.38492808300401,
					34.18948186575873
				]
			]
		},
		{
			"type": "line",
			"version": 438,
			"versionNonce": 1317319333,
			"isDeleted": false,
			"id": "RdhvmprqdN80aXjBCgnl2",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1471.4797551333536,
			"y": 642.0106445119206,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 0,
			"height": 34.4629977206848,
			"seed": 153094981,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					34.4629977206848
				]
			]
		},
		{
			"type": "line",
			"version": 456,
			"versionNonce": 1124144645,
			"isDeleted": false,
			"id": "t4ztYVVomNK2_Fc2mzclx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1554.9160734310758,
			"y": 642.5576762217727,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 15.279178301458003,
			"height": 34.18948186575873,
			"seed": 233331365,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-15.279178301458003,
					34.18948186575873
				]
			]
		},
		{
			"type": "line",
			"version": 437,
			"versionNonce": 1692011877,
			"isDeleted": false,
			"id": "PlqPihYciwuWJ_aM8IPlP",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1593.4818089756523,
			"y": 661.1567543567455,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 26.531037927829104,
			"height": 27.07806963768089,
			"seed": 665828869,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-26.531037927829104,
					27.07806963768089
				]
			]
		},
		{
			"type": "line",
			"version": 492,
			"versionNonce": 56432837,
			"isDeleted": false,
			"id": "rC68Ops8GvpPvAM4_Cgpp",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1511.1621429229967,
			"y": 643.2414658590881,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 7.38492808300401,
			"height": 34.18948186575873,
			"seed": 225686885,
			"groupIds": [
				"PoME-cxaLhhyyGPprWA0b",
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-7.38492808300401,
					34.18948186575873
				]
			]
		},
		{
			"type": "line",
			"version": 2431,
			"versionNonce": 673691685,
			"isDeleted": false,
			"id": "U6OQa_8ekAekniqm1orZq",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1463.2575879328156,
			"y": 845.9549481760018,
			"strokeColor": "#000000",
			"backgroundColor": "#e8590c",
			"width": 137.63945688061978,
			"height": 134.91777270501476,
			"seed": 981582021,
			"groupIds": [
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-23.717533530276143,
					4.736955333554939e-14
				],
				[
					-38.1035784584766,
					-10.886736702421885
				],
				[
					-46.268630985293015,
					-22.939909480103324
				],
				[
					-60.65467591349346,
					-35.770706307957774
				],
				[
					-48.21269111072614,
					-40.4364506089958
				],
				[
					-26.050405680795443,
					-30.71614998183328
				],
				[
					-38.1035784584766,
					-42.38051073442827
				],
				[
					-41.21407465916824,
					-54.43368351210971
				],
				[
					-50.934375286330855,
					-71.93022464100218
				],
				[
					-33.826646182524925,
					-67.26448033996415
				],
				[
					-20.21822530449757,
					-55.21130756228266
				],
				[
					-27.99446580622781,
					-74.65190881660762
				],
				[
					-40.825262634081305,
					-92.14844994549999
				],
				[
					-26.050405680794682,
					-91.75963792041344
				],
				[
					-10.497924677334955,
					-83.98339741868362
				],
				[
					-15.163668978373556,
					-97.98063032179748
				],
				[
					-17.10772910380517,
					-111.95635193473726
				],
				[
					-8.596887132251913,
					-124.41984802767924
				],
				[
					7.776240501729485,
					-133.75133662975526
				],
				[
					0.7776240501731001,
					-119.3652917015548
				],
				[
					8.985699157337326,
					-104.61194603844217
				],
				[
					7.776240501730242,
					-92.5372619705865
				],
				[
					19.0517892292383,
					-102.25756259774887
				],
				[
					24.495157580449238,
					-120.92053980190076
				],
				[
					30.71614998183404,
					-99.92469044722995
				],
				[
					27.216841756054713,
					-89.03795374480802
				],
				[
					24.883969605536166,
					-82.81696134342407
				],
				[
					38.88120250865045,
					-91.7596379204135
				],
				[
					52.100811361590885,
					-88.64914171972151
				],
				[
					35.77070630795805,
					-75.42953286678056
				],
				[
					34.993082257784955,
					-62.98754806401267
				],
				[
					31.49377403200638,
					-52.100811361590736
				],
				[
					41.991698709342096,
					-57.544179712801636
				],
				[
					50.93437528633161,
					-75.04072084169411
				],
				[
					50.934375286330855,
					-58.32180376297464
				],
				[
					50.54556326124544,
					-44.71338288494724
				],
				[
					42.38051073442827,
					-32.66021010726575
				],
				[
					57.54417971280259,
					-41.21407465916881
				],
				[
					76.9847809671263,
					-35.770706307957774
				],
				[
					63.37636008909894,
					-31.10496200691974
				],
				[
					54.43368351211018,
					-10.886736702421931
				],
				[
					34.60427023269878,
					0
				],
				[
					14.386044928200457,
					1.166436075259508
				],
				[
					0,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 720,
			"versionNonce": 1294429061,
			"isDeleted": false,
			"id": "vABRpTyhvjGTNyNsWCUOk",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1457.814219581605,
			"y": 844.3997000756558,
			"strokeColor": "#000000",
			"backgroundColor": "#fab005",
			"width": 55.988931612455616,
			"height": 65.7092322396181,
			"seed": 1685544997,
			"groupIds": [
				"U_TlwPlftDiMzuXWLV4Ox"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1705612984878,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					-9.720300627161855,
					-3.888120250865027
				],
				[
					-12.830796827854254,
					-18.27416517906539
				],
				[
					-5.0545563261247715,
					-27.21684175605486
				],
				[
					-5.83218037629787,
					-40.825262634082264
				],
				[
					3.8881202508655,
					-37.325954408303836
				],
				[
					8.553864551903343,
					-29.549713906573874
				],
				[
					10.886736702422642,
					-41.60288668425527
				],
				[
					16.330105053632828,
					-49.76793921107178
				],
				[
					12.441984802768083,
					-64.15398413927214
				],
				[
					24.10634555536307,
					-50.54556326124479
				],
				[
					28.38327783131474,
					-37.325954408303836
				],
				[
					26.050405680795443,
					-27.60565378114136
				],
				[
					33.43783415743876,
					-36.159518333044325
				],
				[
					43.158134784601366,
					-39.2700145337363
				],
				[
					38.1035784584766,
					-32.271398082179346
				],
				[
					36.93714238321733,
					-22.551097455016922
				],
				[
					39.27001453373662,
					-12.830796827854448
				],
				[
					37.325954408304256,
					-3.4993082257785244
				],
				[
					23.717533530276143,
					1.5552481003459635
				],
				[
					9.331488602076442,
					1.1664360752595082
				],
				[
					0,
					0
				]
			]
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1971c2",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 3,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 33.47918151362179,
		"scrollY": 283.69529970379034,
		"zoom": {
			"value": 0.5145620033144951
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"files": {}
}
```
%%