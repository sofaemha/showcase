(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist,this.mainPlayList])",
 "data": {
  "name": "Player435"
 },
 "children": [
  "this.MainViewer",
  "this.Container_88FE8582_9E60_9720_41D8_81FB17C65847",
  "this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A",
  "this.Container_FE72AFA3_F00D_0A52_41D3_23A5DF4F8056",
  "this.Container_E27CA9A8_F005_765D_41A3_FB896E1CA134",
  "this.Container_E1C69F30_F003_0A4E_41C5_2759C68BDF40",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "height": "100%",
 "class": "Player",
 "width": "100%",
 "layout": "absolute",
 "id": "rootPlayer",
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -126.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2A66DBE_F00F_09B2_41E3_5A9F23BCF261",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "easing": "linear",
 "id": "effect_E2ADC9A6_F007_1652_41C2_24C0DB1B62AA",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "items": [
  {
   "media": "this.panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27",
   "camera": "this.panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1",
   "camera": "this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97",
   "camera": "this.panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94",
   "camera": "this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4",
   "camera": "this.panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA",
   "camera": "this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7",
   "camera": "this.panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345",
   "camera": "this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA",
   "camera": "this.panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1",
   "camera": "this.panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -64.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E37D3139_F00F_16B1_41A8_AA1B8492EABA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "id": "ImageResource_8F969BDB_9EA1_B320_41C1_EB22E6B4F00B",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8E28FF0A_9E60_9320_41C2_81D7EC3489DA_0_0.jpeg",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_8E28FF0A_9E60_9320_41C2_81D7EC3489DA_0_1.jpeg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_8E28FF0A_9E60_9320_41C2_81D7EC3489DA_0_2.jpeg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E348BF72_F00F_0AB2_41E0_4D5FDD303484",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "yaw": 99.38,
 "popupDistance": 100,
 "hfov": 7.71,
 "hideEasing": "cubic_out",
 "id": "popup_8EA81C01_9EA0_B520_41E3_6810006A6DDC",
 "image": {
  "levels": [
   {
    "url": "media/popup_8EA81C01_9EA0_B520_41E3_6810006A6DDC_0_1.jpeg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.95,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -149.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E31F3269_F00F_1ADE_41EC_6FAAFD8A7851",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_t.jpg",
 "partial": false,
 "label": "Belakang Auditorium",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_92DA80AE_98EB_065F_41D4_4E7127498345",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1",
   "backwardYaw": 30.62,
   "yaw": 85.18,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7",
   "backwardYaw": -123.46,
   "yaw": 145.29,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 102.76,
 "overlays": [
  "this.overlay_95068B4A_98E9_1AC4_41D2_4152715C137B",
  "this.overlay_8FE083DF_9EA1_B320_41DC_A7AD40DE6B39"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 24.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2B67E37_F00F_0AB1_41E3_29AB89530A88",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E36AC0A2_F00F_1652_41D5_ECF6712B9061",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "id": "ImageResource_8F899BD8_9EA1_B320_41D8_C2016D42DAE8",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_91DCF201_9E60_6D20_41DD_F218C16554D2_0_0.jpeg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_91DCF201_9E60_6D20_41DD_F218C16554D2_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_91DCF201_9E60_6D20_41DD_F218C16554D2_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_t.jpg",
 "partial": false,
 "label": "Auditorium",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1",
   "backwardYaw": -120.11,
   "yaw": 91.46,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 109.27,
 "overlays": [
  "this.overlay_953FBE18_98FB_1A44_41E2_FDE907A8E0CE",
  "this.overlay_8F7D42A9_9EE0_AD60_41AA_7DA943A93AE2"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 56.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2CA8A7C_F00F_0AB6_41D7_CF11EF12827F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/photo_8C755A00_9EA3_FD20_41C2_27FFE2F4F052_t.jpg",
 "duration": 5000,
 "label": "kolase random",
 "class": "Photo",
 "width": 1280,
 "id": "photo_8C755A00_9EA3_FD20_41C2_27FFE2F4F052",
 "image": {
  "levels": [
   {
    "url": "media/photo_8C755A00_9EA3_FD20_41C2_27FFE2F4F052.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 984
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 41.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E30C91D2_F00F_19F2_41DB_811375842071",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -65.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E285BCD0_F00F_0FCE_41B6_158BB774FA7C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "yaw": -50.51,
 "popupDistance": 100,
 "hfov": 8.92,
 "hideEasing": "cubic_out",
 "id": "popup_8F6FB6ED_9EA0_92E0_41BC_F9F116AC01D5",
 "image": {
  "levels": [
   {
    "url": "media/popup_8F6FB6ED_9EA0_92E0_41BC_F9F116AC01D5_0_2.jpg",
    "width": 651,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.1,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -88.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2D95B6B_F00F_0AD2_41DB_F7522C3830DF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E3C1642E_F00F_1E52_41EC_81F40201015D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -112.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E3315398_F00F_1A7E_41A3_9A5A8BE73A01",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "easing": "linear",
 "id": "effect_E112A7CB_F007_39D2_41C1_660D40CADDA5",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_t.jpg",
 "partial": false,
 "label": "Klinik Pratama",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345",
   "backwardYaw": 145.29,
   "yaw": -123.46,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA",
   "backwardYaw": -35.85,
   "yaw": 120.32,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 108.81,
 "overlays": [
  "this.overlay_951B9572_98E7_0EC4_41DF_AB7866F93742",
  "this.overlay_969E7543_98E7_0EC4_41DE_AC81ADD5FD01",
  "this.overlay_8C849605_9EA0_9520_41D7_55986BC2D760"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_92D44C80_98E9_1E43_41E0_488248FACA94_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPaddingLeft": 0,
 "width": 400,
 "closeButtonBorderRadius": 11,
 "closeButtonPaddingBottom": 0,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "id": "window_8CFA966B_9EA3_B5E0_41D8_9F04A3DA5EFE",
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundOpacity": 1,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "modal": true,
 "closeButtonRollOverBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 1,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0,
 "closeButtonPressedBorderSize": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "titleTextDecoration": "none",
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "titlePaddingLeft": 5,
 "bodyPaddingTop": 5,
 "minWidth": 20,
 "bodyPaddingBottom": 5,
 "closeButtonPaddingTop": 0,
 "title": "Klinik Pratama - Universitas Pancasakti Tegal",
 "gap": 10,
 "closeButtonIconHeight": 12,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "height": 600,
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingTop": 0,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uidE22CE8E5_F00F_37D6_41EC_A0B2C6E9F180_0",
  "this.htmlText_8CF5566C_9EA3_B5E0_41B7_DC4A9C87E6CD"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "titleFontWeight": "bold",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 2,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 1,
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconLineWidth": 1,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingLeft": 0,
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "titleFontSize": "1.5vmin",
 "titleFontFamily": "Tahoma",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.48
 ],
 "data": {
  "name": "Window25460"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -149.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2C28A05_F00F_0A56_41C7_7EA7C228426A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 154.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2B87EB0_F00F_0A4E_41DF_CF10FF9D146E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "easing": "linear",
 "id": "effect_E1D791AF_F005_1652_41B0_548A50065D6C",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "ImageResource_8F83CBC7_9EA1_B320_41DF_112C002D0291",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8EA81C01_9EA0_B520_41E3_6810006A6DDC_0_0.jpeg",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_8EA81C01_9EA0_B520_41E3_6810006A6DDC_0_1.jpeg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_8EA81C01_9EA0_B520_41E3_6810006A6DDC_0_2.jpeg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_8F8D6BD3_9EA1_B320_41D9_E8E69DE91075",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8EE9D326_9EA3_B360_41C6_F1C08A41BA8C_0_0.jpeg",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_8EE9D326_9EA3_B360_41C6_F1C08A41BA8C_0_1.jpeg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_8EE9D326_9EA3_B360_41C6_F1C08A41BA8C_0_2.jpeg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27",
   "camera": "this.panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1",
   "camera": "this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97",
   "camera": "this.panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94",
   "camera": "this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4",
   "camera": "this.panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA",
   "camera": "this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7",
   "camera": "this.panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345",
   "camera": "this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA",
   "camera": "this.panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "easing": "linear",
 "id": "effect_E18D3A81_F005_0A4F_41E9_E00A58A55F72",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 82.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2ED6BE1_F00F_09CE_41E4_D948B33E7578",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_92DA80AE_98EB_065F_41D4_4E7127498345_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_t.jpg",
 "partial": false,
 "label": "Gerbang Auditorium",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94",
   "backwardYaw": -159.33,
   "yaw": 10.05,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1",
   "backwardYaw": 115.29,
   "yaw": -97.58,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 97.02,
 "overlays": [
  "this.overlay_959595A9_98E7_0E44_41E2_A7C4186794D6",
  "this.overlay_966D5BF4_98F9_39C3_41DE_7C0B57576B47"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "yaw": 66.28,
 "popupDistance": 100,
 "hfov": 14.62,
 "hideEasing": "cubic_out",
 "id": "popup_91DCF201_9E60_6D20_41DD_F218C16554D2",
 "image": {
  "levels": [
   {
    "url": "media/popup_91DCF201_9E60_6D20_41DD_F218C16554D2_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 11.11,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0.01
 },
 "id": "panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -34.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E3D364CA_F00F_1FD2_41E6_E5D618136A31",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_t.jpg",
 "partial": false,
 "label": "Pojok Depan Auditorium",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27",
   "backwardYaw": -97.58,
   "yaw": 115.29,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97",
   "backwardYaw": 91.46,
   "yaw": -120.11,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94",
   "backwardYaw": -97.13,
   "yaw": 53.15,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 98.39,
 "overlays": [
  "this.overlay_951C22FE_98F9_0BBF_41BA_0089D2E3697F",
  "this.overlay_96C3722D_98FF_0A5C_41D7_ACA0A25FE3A6",
  "this.overlay_96EC8C47_98F9_FECC_41B3_F1403A5B6596"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -59.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E358E009_F00F_165E_41EA_216442D23336",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "id": "ImageResource_8BB09466_9EE1_95E0_4192_3988E07EDA5E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8F6FB6ED_9EA0_92E0_41BC_F9F116AC01D5_0_0.jpg",
   "width": 1402,
   "class": "ImageResourceLevel",
   "height": 2205
  },
  {
   "url": "media/popup_8F6FB6ED_9EA0_92E0_41BC_F9F116AC01D5_0_1.jpg",
   "width": 1302,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_8F6FB6ED_9EA0_92E0_41BC_F9F116AC01D5_0_2.jpg",
   "width": 651,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_8F6FB6ED_9EA0_92E0_41BC_F9F116AC01D5_0_3.jpg",
   "width": 325,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "yaw": 123.62,
 "popupDistance": 100,
 "hfov": 8.37,
 "hideEasing": "cubic_out",
 "id": "popup_8E28FF0A_9E60_9320_41C2_81D7EC3489DA",
 "image": {
  "levels": [
   {
    "url": "media/popup_8E28FF0A_9E60_9320_41C2_81D7EC3489DA_0_1.jpeg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.99,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_t.jpg",
 "partial": false,
 "label": "Ruang Klinik 2",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345",
   "backwardYaw": 85.18,
   "yaw": 30.62,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA",
   "backwardYaw": 114.58,
   "yaw": -138.12,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 99.37,
 "overlays": [
  "this.overlay_901423B2_9E60_B361_41CC_419D60EACED0",
  "this.overlay_91DDB14E_9E60_6F20_41D7_A73AEC1F568D",
  "this.popup_91DCF201_9E60_6D20_41DD_F218C16554D2",
  "this.overlay_8E49FFB0_9E63_B360_41B7_26A7D3D64C56",
  "this.popup_8E28FF0A_9E60_9320_41C2_81D7EC3489DA",
  "this.overlay_8E42DB0A_9E60_9320_41D1_12F92F5DD3FC",
  "this.overlay_8F4AAE70_9EA3_95E0_41CF_927360BAAC19",
  "this.popup_8F2BFDC6_9EA3_9720_41BB_A29C22CC74DE",
  "this.overlay_E022BBB3_F03F_09B2_41E5_1BFD10375CAC"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_t.jpg",
 "partial": false,
 "label": "Pinggir Auditorium 2",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94",
   "backwardYaw": 67.2,
   "yaw": -155.7,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA",
   "backwardYaw": -157.06,
   "yaw": 85.36,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 107.25,
 "overlays": [
  "this.overlay_951760C0_98F9_07C4_41D5_4D1D52F82A8F",
  "this.overlay_96CF45BC_98F9_09BC_41DB_F3BCF0462A0A"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "id": "ImageResource_8F2BEDC6_9EA3_9720_41A5_9AF11EEA5A66",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8F2BFDC6_9EA3_9720_41BB_A29C22CC74DE_0_0.jpeg",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_8F2BFDC6_9EA3_9720_41BB_A29C22CC74DE_0_1.jpeg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_8F2BFDC6_9EA3_9720_41BB_A29C22CC74DE_0_2.jpeg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "yaw": -0.55,
 "popupDistance": 100,
 "hfov": 7.9,
 "hideEasing": "cubic_out",
 "id": "popup_8EE9D326_9EA3_B360_41C6_F1C08A41BA8C",
 "image": {
  "levels": [
   {
    "url": "media/popup_8EE9D326_9EA3_B360_41C6_F1C08A41BA8C_0_1.jpeg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.61,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "easing": "linear",
 "id": "effect_FFE780E4_F00F_77D6_41EA_87773433B16C",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2947D47_F00F_0ED2_41E7_1C85CA760468",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2F18C59_F00F_0EFE_41E5_BC7CA86F1CD9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 82.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E2D09AF3_F00F_0BB2_41D5_DABD5C674F1C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_t.jpg",
 "partial": false,
 "label": "Pinggir Auditorium 1",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_92D44C80_98E9_1E43_41E0_488248FACA94",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27",
   "backwardYaw": 10.05,
   "yaw": -159.33,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1",
   "backwardYaw": 53.15,
   "yaw": -97.13,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4",
   "backwardYaw": -155.7,
   "yaw": 67.2,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 111.28,
 "overlays": [
  "this.overlay_953787F9_98FB_09C4_41D7_D35469E00409",
  "this.overlay_96C2FB6E_98FB_3ADC_41DD_AD8D012EBBA7",
  "this.overlay_967080B8_98FB_0644_41DD_F63E5D6BA912"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E3E3A562_F00F_1ED2_41E2_2B8DCA6D7CDC",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_t.jpg",
 "partial": false,
 "label": "Pojok Belakang Auditorium",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA",
   "backwardYaw": -25.1,
   "yaw": 30.17,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4",
   "backwardYaw": 85.36,
   "yaw": -157.06,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7",
   "backwardYaw": 120.32,
   "yaw": -35.85,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 100.45,
 "overlays": [
  "this.overlay_96781BAE_98E7_7A5C_41A7_3F44464079D9",
  "this.overlay_96FC6E25_98E7_FA4C_41BD_0C7D29CDEF7A",
  "this.overlay_9062979F_9E61_B35F_41D3_B90711471868",
  "this.overlay_E20C73D2_F003_39F2_41C5_C55F9E60FCCF"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 59.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E3210300_F00F_1A4E_41DF_24D1C48EB257",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "id": "window_8CB61926_9EE0_7F60_41E3_26917334AB9A",
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundOpacity": 1,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "modal": true,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "shadowVerticalLength": 0,
 "bodyBorderSize": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "titlePaddingLeft": 5,
 "bodyPaddingTop": 5,
 "minWidth": 20,
 "bodyPaddingBottom": 5,
 "title": "Informatika - 1B",
 "gap": 0,
 "closeButtonIconHeight": 12,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingTop": 0,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_8CB5C927_9EE0_7F60_41D0_169BF652BB8B"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontWeight": "bold",
 "veilOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingLeft": 0,
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "titleFontSize": "1.29vmin",
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window27826"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_t.jpg",
 "partial": false,
 "label": "Ruang Klinik 1",
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1",
   "backwardYaw": -138.12,
   "yaw": 114.58,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA",
   "backwardYaw": 30.17,
   "yaw": -25.1,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 100.38,
 "overlays": [
  "this.overlay_904CD444_9E60_9521_41CF_0B53B70FD857",
  "this.overlay_8E6B6561_9E60_B7E0_41B0_23618349DFDC",
  "this.overlay_8EEE079F_9E60_7320_41C5_FDF7B07859D0",
  "this.overlay_8E20E712_9E60_9320_41D7_B5A12AE2D38D",
  "this.popup_8EA81C01_9EA0_B520_41E3_6810006A6DDC",
  "this.overlay_8EED5F57_9EA0_7320_41B9_EA20F0CFB74C",
  "this.popup_8EE9D326_9EA3_B360_41C6_F1C08A41BA8C",
  "this.overlay_8F06D7CE_9EA0_F320_41C8_DB1694FD1940",
  "this.overlay_8C9EA545_9EA1_9720_41DB_FF595C54F65E",
  "this.popup_8F6FB6ED_9EA0_92E0_41BC_F9F116AC01D5",
  "this.overlay_AA700F6B_A451_7301_41D4_3649A8340831"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "yaw": -43.55,
 "popupDistance": 100,
 "hfov": 6.77,
 "hideEasing": "cubic_out",
 "id": "popup_8F2BFDC6_9EA3_9720_41BB_A29C22CC74DE",
 "image": {
  "levels": [
   {
    "url": "media/popup_8F2BFDC6_9EA3_9720_41BB_A29C22CC74DE_0_1.jpeg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -31.06,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "class": "ViewerArea",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "id": "MainViewer",
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "minWidth": 100,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "transitionDuration": 500,
 "toolTipTextShadowColor": "#000000",
 "height": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "paddingLeft": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "transitionMode": "blending",
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Label_88FEA582_9E60_9720_41B9_682D02DB4890",
  "this.Label_88FE9582_9E60_9720_41AC_F9A3F8E9301D"
 ],
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "left": "2%",
 "backgroundOpacity": 0,
 "width": 478,
 "layout": "absolute",
 "id": "Container_88FE8582_9E60_9720_41D8_81FB17C65847",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "2%",
 "height": 91,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "minWidth": 1,
 "data": {
  "name": "Additional Text"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#FFFFFF",
 "class": "DropDown",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 0.84,
 "popUpFontColor": "#000000",
 "popUpBorderRadius": 0,
 "id": "DropDown_88FC9491_9E61_9520_41D1_1A560768885A",
 "right": "2%",
 "width": "18.116%",
 "borderRadius": 4,
 "paddingBottom": 0,
 "popUpShadowSpread": 1,
 "minHeight": 20,
 "playList": "this.DropDown_88FC9491_9E61_9520_41D1_1A560768885A_playlist",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "2%",
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#999999",
 "backgroundColor": [
  "#333333",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "popUpGap": 0,
 "selectedPopUpBackgroundColor": "#333333",
 "paddingRight": 5,
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "fontSize": 14,
 "popUpBackgroundOpacity": 0.84,
 "shadow": false,
 "popUpShadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "fontColor": "#FFFFFF",
 "selectedPopUpFontColor": "#FFFFFF",
 "minWidth": 200,
 "data": {
  "name": "Panorama List"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "height": "3.577%",
 "fontWeight": "normal"
},
{
 "children": [
  "this.Container_FF07DEF5_F003_0BB6_41EB_675978370B75"
 ],
 "height": "100%",
 "class": "Container",
 "left": "0%",
 "backgroundOpacity": 0.55,
 "width": "100%",
 "layout": "absolute",
 "id": "Container_FE72AFA3_F00D_0A52_41D3_23A5DF4F8056",
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Video Intro"
 }
},
{
 "children": [
  "this.Container_E1775E3B_F003_0AB3_41E8_7E9A8280A1DF"
 ],
 "height": "100%",
 "class": "Container",
 "left": "0%",
 "backgroundOpacity": 0.55,
 "width": "100%",
 "layout": "absolute",
 "id": "Container_E27CA9A8_F005_765D_41A3_FB896E1CA134",
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Video Lt 2"
 }
},
{
 "children": [
  "this.Container_E1C2AEBA_F003_0BB2_41D9_06AD5DE44B54"
 ],
 "height": "100%",
 "class": "Container",
 "left": "0%",
 "backgroundOpacity": 0.55,
 "width": "100%",
 "layout": "absolute",
 "id": "Container_E1C69F30_F003_0A4E_41C5_2759C68BDF40",
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Google Maps"
 }
},
{
 "class": "UIComponent",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "backgroundOpacity": 0.55,
 "id": "veilPopupPanorama",
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "visible": false,
 "data": {
  "name": "UIComponent18402"
 },
 "paddingTop": 0
},
{
 "class": "ZoomImage",
 "left": 0,
 "backgroundOpacity": 1,
 "id": "zoomImagePopupPanorama",
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage18403"
 },
 "paddingTop": 0,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton18404"
 },
 "class": "CloseButton",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "id": "closeButtonPopupPanorama",
 "iconLineWidth": 5,
 "right": 10,
 "borderRadius": 0,
 "paddingBottom": 5,
 "iconColor": "#000000",
 "iconHeight": 20,
 "minHeight": 0,
 "iconWidth": 20,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "rollOverIconColor": "#666666",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "paddingRight": 5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "minWidth": 0,
 "fontColor": "#FFFFFF",
 "visible": false,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "paddingTop": 5,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7, this.camera_E2CA8A7C_F00F_0AB6_41D7_CF11EF12827F); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88901C6F_98E9_FEDC_41C9_5E293926596D",
   "pitch": -30.99,
   "yaw": 145.29,
   "hfov": 27,
   "distance": 100
  }
 ],
 "id": "overlay_95068B4A_98E9_1AC4_41D2_4152715C137B",
 "data": {
  "label": "Ke-Klinik"
 },
 "maps": [
  {
   "yaw": 145.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.99,
   "hfov": 27
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1, this.camera_E2C28A05_F00F_0A56_41C7_7EA7C228426A); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8BA3143A_9EE1_9560_41D6_AE0AAFF98E72",
   "pitch": -11.48,
   "yaw": 85.18,
   "hfov": 17.24,
   "distance": 100
  }
 ],
 "id": "overlay_8FE083DF_9EA1_B320_41DC_A7AD40DE6B39",
 "data": {
  "label": "Masuk-Klinik"
 },
 "maps": [
  {
   "yaw": 85.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.48,
   "hfov": 17.24
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1, this.camera_E3210300_F00F_1A4E_41DF_24D1C48EB257); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8895EC68_98E9_FEC5_41DB_04E16EE24C9F",
   "pitch": -15.4,
   "yaw": 91.46,
   "hfov": 30.36,
   "distance": 100
  }
 ],
 "id": "overlay_953FBE18_98FB_1A44_41E2_FDE907A8E0CE",
 "data": {
  "label": "Kembali"
 },
 "maps": [
  {
   "yaw": 91.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.4,
   "hfov": 30.36
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_8CB61926_9EE0_7F60_41E3_26917334AB9A, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8B7DE538_9EE7_B760_41CB_E6E8E5C774CE",
   "pitch": -7.42,
   "yaw": -16.91,
   "hfov": 13.84,
   "distance": 100
  }
 ],
 "id": "overlay_8F7D42A9_9EE0_AD60_41AA_7DA943A93AE2",
 "data": {
  "label": "Info"
 },
 "maps": [
  {
   "yaw": -16.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.42,
   "hfov": 13.84
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA, this.camera_E3E3A562_F00F_1ED2_41E2_2B8DCA6D7CDC); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8893AC6D_98E9_FEDD_41D0_5A562E95C96F",
   "pitch": -44.08,
   "yaw": 120.32,
   "hfov": 22.63,
   "distance": 100
  }
 ],
 "id": "overlay_951B9572_98E7_0EC4_41DF_AB7866F93742",
 "data": {
  "label": "Kembali"
 },
 "maps": [
  {
   "yaw": 120.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.08,
   "hfov": 22.63
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345, this.camera_E3D364CA_F00F_1FD2_41E6_E5D618136A31); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88906C6E_98E9_FEDC_41DA_730924A9BFE3",
   "pitch": -43.17,
   "yaw": -123.46,
   "hfov": 22.97,
   "distance": 100
  }
 ],
 "id": "overlay_969E7543_98E7_0EC4_41DE_AC81ADD5FD01",
 "data": {
  "label": "Ke-Klinik"
 },
 "maps": [
  {
   "yaw": -123.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.17,
   "hfov": 22.97
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_8CFA966B_9EA3_B5E0_41D8_9F04A3DA5EFE, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8BA5D42F_9EE1_9560_41DB_96442CD7ECAF",
   "pitch": -9.61,
   "yaw": 18.27,
   "hfov": 12.11,
   "distance": 100
  }
 ],
 "id": "overlay_8C849605_9EA0_9520_41D7_55986BC2D760",
 "data": {
  "label": "Intermezo"
 },
 "maps": [
  {
   "yaw": 18.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.61,
   "hfov": 12.11
  }
 ],
 "rollOverDisplay": false
},
{
 "height": "50%",
 "class": "Image",
 "backgroundOpacity": 0,
 "width": "100%",
 "id": "image_uidE22CE8E5_F00F_37D6_41EC_A0B2C6E9F180_0",
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "media/photo_8C755A00_9EA3_FD20_41C2_27FFE2F4F052.jpeg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "shadow": false,
 "minWidth": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image18401"
 },
 "paddingTop": 0
},
{
 "height": "50%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "width": "100%",
 "id": "htmlText_8CF5566C_9EA3_B5E0_41B7_DC4A9C87E6CD",
 "borderRadius": 0,
 "paddingBottom": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Tempat ini merupakan poliklinik milik Universitas Pancasakti Tegal yang bersertifikat resmi dari pemerintah. Alasan kelompok kami memilih tempat ini, karena sejak pertama kali PKKMB tidak ada satupun kegiatan yang memperkenalkan unit kesehatan kampus, hal ini mungkin yang menjadi alasan utama dimana mayoritas mahasiswa tidak mengetahui bahwa UPS Tegal juga memiliki unit kesehatan.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Sosial Media</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">https://www.instagram.com/poliklinik_ups/</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText25461"
 },
 "paddingTop": 10,
 "scrollBarOpacity": 0.5
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94, this.camera_E36AC0A2_F00F_1652_41D5_ECF6712B9061); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_95D62768_98FB_0AC4_4186_4920377E921F",
   "pitch": -13.01,
   "yaw": 10.05,
   "hfov": 30.69,
   "distance": 100
  }
 ],
 "id": "overlay_959595A9_98E7_0E44_41E2_A7C4186794D6",
 "data": {
  "label": "Ke-Klinik"
 },
 "maps": [
  {
   "yaw": 10.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.01,
   "hfov": 30.69
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1, this.camera_E37D3139_F00F_16B1_41A8_AA1B8492EABA); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8894FC66_98E9_FECC_41DC_3920F83E9DA2",
   "pitch": -15.75,
   "yaw": -97.58,
   "hfov": 30.31,
   "distance": 100
  }
 ],
 "id": "overlay_966D5BF4_98F9_39C3_41DE_7C0B57576B47",
 "data": {
  "label": "Ke-Audit"
 },
 "maps": [
  {
   "yaw": -97.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.75,
   "hfov": 30.31
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94, this.camera_E2ED6BE1_F00F_09CE_41E4_D948B33E7578); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8894BC67_98E9_FECC_41DF_D42E464ED949",
   "pitch": -11.4,
   "yaw": 53.15,
   "hfov": 30.87,
   "distance": 100
  }
 ],
 "id": "overlay_951C22FE_98F9_0BBF_41BA_0089D2E3697F",
 "data": {
  "label": "Ke-Klinik"
 },
 "maps": [
  {
   "yaw": 53.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.4,
   "hfov": 30.87
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27, this.camera_E2D09AF3_F00F_0BB2_41D5_DABD5C674F1C); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88957C67_98E9_FECC_41D4_25EC8A65C7FD",
   "pitch": -11.97,
   "yaw": 115.29,
   "hfov": 30.81,
   "distance": 100
  }
 ],
 "id": "overlay_96C3722D_98FF_0A5C_41D7_ACA0A25FE3A6",
 "data": {
  "label": "Ke-Gerbang"
 },
 "maps": [
  {
   "yaw": 115.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.97,
   "hfov": 30.81
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97, this.camera_E2D95B6B_F00F_0AD2_41DB_F7522C3830DF); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88953C68_98E9_FEC4_41C4_B5A6938F5697",
   "pitch": -21.71,
   "yaw": -120.11,
   "hfov": 29.26,
   "distance": 100
  }
 ],
 "id": "overlay_96EC8C47_98F9_FECC_41B3_F1403A5B6596",
 "data": {
  "label": "Ke-Audit"
 },
 "maps": [
  {
   "yaw": -120.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.71,
   "hfov": 29.26
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA, this.camera_E285BCD0_F00F_0FCE_41B6_158BB774FA7C); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90EB3984_9E60_9F21_41B4_53BA30DD8987",
   "pitch": 6.58,
   "yaw": -138.12,
   "hfov": 16.48,
   "distance": 100
  }
 ],
 "id": "overlay_901423B2_9E60_B361_41CC_419D60EACED0",
 "data": {
  "label": "View-1"
 },
 "maps": [
  {
   "yaw": -138.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.58,
   "hfov": 16.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_91DCF201_9E60_6D20_41DD_F218C16554D2, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','paddingLeft':5}, this.ImageResource_8F899BD8_9EA1_B320_41D8_C2016D42DAE8, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8E703BB1_9EA1_B360_41D9_C007B0685418",
   "pitch": 11.11,
   "yaw": 66.28,
   "hfov": 14.62,
   "distance": 100
  }
 ],
 "id": "overlay_91DDB14E_9E60_6F20_41D7_A73AEC1F568D",
 "data": {
  "label": "Info-SIP"
 },
 "maps": [
  {
   "yaw": 66.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.11,
   "hfov": 14.62
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8E28FF0A_9E60_9320_41C2_81D7EC3489DA, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','paddingLeft':5}, this.ImageResource_8F969BDB_9EA1_B320_41C1_EB22E6B4F00B, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8E705BB2_9EA1_B360_41BA_5BF99ECB7329",
   "pitch": -1.99,
   "yaw": 123.62,
   "hfov": 14.89,
   "distance": 100
  }
 ],
 "id": "overlay_8E49FFB0_9E63_B360_41B7_26A7D3D64C56",
 "data": {
  "label": "Ruang-Periksa"
 },
 "maps": [
  {
   "yaw": 123.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.99,
   "hfov": 14.89
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92DA80AE_98EB_065F_41D4_4E7127498345, this.camera_E2F18C59_F00F_0EFE_41E5_BC7CA86F1CD9); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8E71EBB3_9EA1_B360_41E0_081343D68535",
   "pitch": 6.17,
   "yaw": 30.62,
   "hfov": 16.49,
   "distance": 100
  }
 ],
 "id": "overlay_8E42DB0A_9E60_9320_41D1_12F92F5DD3FC",
 "data": {
  "label": "Keluar-Klinik"
 },
 "maps": [
  {
   "yaw": 30.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.17,
   "hfov": 16.49
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8F2BFDC6_9EA3_9720_41BB_A29C22CC74DE, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','paddingLeft':5}, this.ImageResource_8F2BEDC6_9EA3_9720_41A5_9AF11EEA5A66, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8BAF9440_9EE1_9520_41D4_FD2A13640D8C",
   "pitch": -31.06,
   "yaw": -43.55,
   "hfov": 12.04,
   "distance": 100
  }
 ],
 "id": "overlay_8F4AAE70_9EA3_95E0_41CF_927360BAAC19",
 "data": {
  "label": "Ruang-Tunggu"
 },
 "maps": [
  {
   "yaw": -43.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.06,
   "hfov": 12.04
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_FE72AFA3_F00D_0A52_41D3_23A5DF4F8056, true, 0, this.effect_E1D791AF_F005_1652_41B0_548A50065D6C, 'showEffect', false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.13,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_5_0.png",
      "width": 341,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.98,
   "yaw": -107.82
  }
 ],
 "id": "overlay_E022BBB3_F03F_09B2_41E5_1BFD10375CAC",
 "data": {
  "label": "Video-Intro"
 },
 "maps": [
  {
   "yaw": -107.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.98,
   "hfov": 28.13
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA, this.camera_E3C1642E_F00F_1E52_41EC_81F40201015D); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8892CC6B_98E9_FEC4_41D1_BDA78EEBD925",
   "pitch": -6.5,
   "yaw": 85.36,
   "hfov": 31.29,
   "distance": 100
  }
 ],
 "id": "overlay_951760C0_98F9_07C4_41D5_4D1D52F82A8F",
 "data": {
  "label": "Ke-Klinik"
 },
 "maps": [
  {
   "yaw": 85.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.5,
   "hfov": 31.29
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D44C80_98E9_1E43_41E0_488248FACA94, this.camera_E3315398_F00F_1A7E_41A3_9A5A8BE73A01); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88928C6B_98E9_FEC4_41E1_53007707A6D4",
   "pitch": -17.39,
   "yaw": -155.7,
   "hfov": 30.05,
   "distance": 100
  }
 ],
 "id": "overlay_96CF45BC_98F9_09BC_41DB_F3BCF0462A0A",
 "data": {
  "label": "Kembali"
 },
 "maps": [
  {
   "yaw": -155.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.39,
   "hfov": 30.05
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4, this.camera_E2B67E37_F00F_0AB1_41E3_29AB89530A88); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88959C69_98E9_FEC4_41DE_836D18D8AC01",
   "pitch": -10.84,
   "yaw": 67.2,
   "hfov": 30.93,
   "distance": 100
  }
 ],
 "id": "overlay_953787F9_98FB_09C4_41D7_D35469E00409",
 "data": {
  "label": "Ke-Klinik"
 },
 "maps": [
  {
   "yaw": 67.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.84,
   "hfov": 30.93
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27, this.camera_E2947D47_F00F_0ED2_41E7_1C85CA760468); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88926C6A_98E9_FEC4_41CA_165E28C39584",
   "pitch": -25.36,
   "yaw": -159.33,
   "hfov": 28.46,
   "distance": 100
  }
 ],
 "id": "overlay_96C2FB6E_98FB_3ADC_41DD_AD8D012EBBA7",
 "data": {
  "label": "Ke-Gerbang"
 },
 "maps": [
  {
   "yaw": -159.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.36,
   "hfov": 28.46
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1, this.camera_E2A66DBE_F00F_09B2_41E3_5A9F23BCF261); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88920C6A_98E9_FEC4_41BC_1362EC0344B7",
   "pitch": -17.65,
   "yaw": -97.13,
   "hfov": 30.01,
   "distance": 100
  }
 ],
 "id": "overlay_967080B8_98FB_0644_41DD_F63E5D6BA912",
 "data": {
  "label": "Ke-Audit"
 },
 "maps": [
  {
   "yaw": -97.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.65,
   "hfov": 30.01
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7, this.camera_E358E009_F00F_165E_41EA_216442D23336); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88934C6C_98E9_FEDC_41B4_86B5C108078D",
   "pitch": -14.57,
   "yaw": -35.85,
   "hfov": 30.48,
   "distance": 100
  }
 ],
 "id": "overlay_96781BAE_98E7_7A5C_41A7_3F44464079D9",
 "data": {
  "label": "Ke-Klinik"
 },
 "maps": [
  {
   "yaw": -35.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.57,
   "hfov": 30.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4, this.camera_E348BF72_F00F_0AB2_41E0_4D5FDD303484); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8893EC6D_98E9_FEDD_41D7_63F6CF91E201",
   "pitch": -20.47,
   "yaw": -157.06,
   "hfov": 29.5,
   "distance": 100
  }
 ],
 "id": "overlay_96FC6E25_98E7_FA4C_41BD_0C7D29CDEF7A",
 "data": {
  "label": "Kembali"
 },
 "maps": [
  {
   "yaw": -157.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.47,
   "hfov": 29.5
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA, this.camera_E2B87EB0_F00F_0A4E_41DF_CF10FF9D146E); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90EAB981_9E60_9F23_41D0_19F961868A94",
   "pitch": 8.79,
   "yaw": 30.17,
   "hfov": 16.33,
   "distance": 100
  }
 ],
 "id": "overlay_9062979F_9E61_B35F_41D3_B90711471868",
 "data": {
  "label": "Masuk-Klinik"
 },
 "maps": [
  {
   "yaw": 30.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.79,
   "hfov": 16.33
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_E1C69F30_F003_0A4E_41C5_2759C68BDF40, true, 0, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2741FF0_F003_09CE_41E8_1A6C014D0138",
   "pitch": 13.21,
   "yaw": 2.45,
   "hfov": 13.67,
   "distance": 100
  }
 ],
 "id": "overlay_E20C73D2_F003_39F2_41C5_C55F9E60FCCF",
 "data": {
  "label": "Info-Google-Map"
 },
 "maps": [
  {
   "yaw": 2.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.21,
   "hfov": 13.67
  }
 ],
 "rollOverDisplay": false
},
{
 "height": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "width": "100%",
 "id": "htmlText_8CB5C927_9EE0_7F60_41D0_169BF652BB8B",
 "borderRadius": 0,
 "paddingBottom": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">Tugas Kelompok</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">Pengantar Informatika</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">Dosen :</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">Hasbi Firmansyah, M.Kom</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">Kerja Sama :</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">Klinik Pratama Universitas Pancasakti Tegal</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">Anggota :</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">1. Nada Finansih (6622600049)</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">[Pengambilan dan Editing Gambar Non-Panorama]</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">2. Sofa Machabba Haeta (6622600044)</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">[Pengambilan dan Visualisasi Panorama]</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">3. Yuli Indriyani (6622600034).</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\">[Pengambilan dan Editing Video]</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText27827"
 },
 "paddingTop": 10,
 "scrollBarOpacity": 0.5
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1, this.camera_E30C91D2_F00F_19F2_41DB_811375842071); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_90EB1983_9E60_9F27_41DF_E600FF727E3D",
   "pitch": -36.7,
   "yaw": 114.58,
   "hfov": 17.9,
   "distance": 100
  }
 ],
 "id": "overlay_904CD444_9E60_9521_41CF_0B53B70FD857",
 "data": {
  "label": "View-2"
 },
 "maps": [
  {
   "yaw": 114.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.7,
   "hfov": 17.9
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8E6E5BA1_9EA1_B360_41C9_FCD7A46DFEC3",
   "pitch": 11.59,
   "yaw": 158.79,
   "hfov": 16.25,
   "distance": 100
  }
 ],
 "id": "overlay_8E6B6561_9E60_B7E0_41B0_23618349DFDC",
 "data": {
  "label": "Keluar-Klinik-Samping"
 },
 "maps": [
  {
   "yaw": 158.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.59,
   "hfov": 16.25
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA, this.camera_E31F3269_F00F_1ADE_41EC_6FAAFD8A7851); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8E6FEBA2_9EA1_B360_41C6_00A3C306B6F6",
   "pitch": 6.67,
   "yaw": -25.1,
   "hfov": 16.48,
   "distance": 100
  }
 ],
 "id": "overlay_8EEE079F_9E60_7320_41C5_FDF7B07859D0",
 "data": {
  "label": "Keluar-Klinik-Depan"
 },
 "maps": [
  {
   "yaw": -25.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.67,
   "hfov": 16.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8EA81C01_9EA0_B520_41E3_6810006A6DDC, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','paddingLeft':5}, this.ImageResource_8F83CBC7_9EA1_B320_41DF_112C002D0291, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8E6F0BA2_9EA1_B360_41D9_35DC1EC8D81F",
   "pitch": -12.95,
   "yaw": 99.38,
   "hfov": 13.7,
   "distance": 100
  }
 ],
 "id": "overlay_8E20E712_9E60_9320_41D7_B5A12AE2D38D",
 "data": {
  "label": "Ruang-Tunggu"
 },
 "maps": [
  {
   "yaw": 99.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.95,
   "hfov": 13.7
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8EE9D326_9EA3_B360_41C6_F1C08A41BA8C, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','paddingLeft':5}, this.ImageResource_8F8D6BD3_9EA1_B320_41D9_E8E69DE91075, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8E6F5BA3_9EA1_B360_41DB_4589D880275C",
   "pitch": 2.61,
   "yaw": -0.55,
   "hfov": 14.04,
   "distance": 100
  }
 ],
 "id": "overlay_8EED5F57_9EA0_7320_41B9_EA20F0CFB74C",
 "data": {
  "label": "Tempat-Bermain"
 },
 "maps": [
  {
   "yaw": -0.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.61,
   "hfov": 14.04
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Intermezo"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.93,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_6_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 319
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.53,
   "yaw": 22.75
  }
 ],
 "id": "overlay_8F06D7CE_9EA0_F320_41C8_DB1694FD1940",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 22.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.53,
   "hfov": 17.93
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8F6FB6ED_9EA0_92E0_41BC_F9F116AC01D5, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','paddingLeft':5}, this.ImageResource_8BB09466_9EE1_95E0_4192_3988E07EDA5E, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8BA1143D_9EE1_9560_41DD_4C8F2EB65EBB",
   "pitch": -3.1,
   "yaw": -50.51,
   "hfov": 14.04,
   "distance": 100
  }
 ],
 "id": "overlay_8C9EA545_9EA1_9720_41DB_FF595C54F65E",
 "data": {
  "label": "Daftar-Harga"
 },
 "maps": [
  {
   "yaw": -50.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.1,
   "hfov": 14.04
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_E27CA9A8_F005_765D_41A3_FB896E1CA134, true, 0, this.effect_E18D3A81_F005_0A4F_41E9_E00A58A55F72, 'showEffect', false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B568D9B5_A45C_16F1_41E0_0789763363C3",
   "pitch": -4.74,
   "yaw": -148.42,
   "hfov": 14.01,
   "distance": 100
  }
 ],
 "id": "overlay_AA700F6B_A451_7301_41D4_3649A8340831",
 "data": {
  "label": "Lantai-2"
 },
 "maps": [
  {
   "yaw": -148.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.74,
   "hfov": 14.01
  }
 ],
 "rollOverDisplay": false
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 1"
 },
 "class": "Label",
 "left": 0,
 "backgroundOpacity": 0,
 "width": 409,
 "id": "Label_88FEA582_9E60_9720_41B9_682D02DB4890",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 5,
 "text": "INFORMATIKA",
 "height": 67,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": 54,
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "textShadowHorizontalLength": 0,
 "textShadowVerticalLength": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "textShadowColor": "#000000",
 "minWidth": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 2"
 },
 "class": "Label",
 "left": 5,
 "backgroundOpacity": 0,
 "width": 321,
 "id": "Label_88FE9582_9E60_9720_41AC_F9A3F8E9301D",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "text": "Copyright (c) Semester 1 / B - Tahun 2022",
 "bottom": 9,
 "height": 22,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": 18,
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "textShadowHorizontalLength": 0,
 "textShadowVerticalLength": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "textShadowColor": "#000000",
 "minWidth": 1,
 "fontWeight": "normal"
},
{
 "children": [
  "this.WebFrame_FF7C06DA_F005_1BF2_41E5_7125C4496CA1",
  "this.IconButton_FFDCB8E8_F003_17DE_41CE_86BF69516717"
 ],
 "class": "Container",
 "left": "7%",
 "backgroundOpacity": 1,
 "layout": "absolute",
 "id": "Container_FF07DEF5_F003_0BB6_41EB_675978370B75",
 "right": "7%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Viewer"
 }
},
{
 "children": [
  "this.WebFrame_E119CD51_F003_0ECF_41DB_E2CDDD10E97D",
  "this.IconButton_E119AD52_F003_0ECD_419B_EE6AD0ED6BA6"
 ],
 "class": "Container",
 "left": "7%",
 "backgroundOpacity": 1,
 "layout": "absolute",
 "id": "Container_E1775E3B_F003_0AB3_41E8_7E9A8280A1DF",
 "right": "7%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Viewer"
 }
},
{
 "children": [
  "this.WebFrame_E1FD8D4F_F003_0ED1_41CA_1403AE1111A4",
  "this.IconButton_E1FDAD50_F003_0ECE_41CD_EB94CF229DBF"
 ],
 "class": "Container",
 "left": "7%",
 "backgroundOpacity": 1,
 "layout": "absolute",
 "id": "Container_E1C2AEBA_F003_0BB2_41D9_06AD5DE44B54",
 "right": "7%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Viewer"
 }
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88901C6F_98E9_FEDC_41C9_5E293926596D",
 "levels": [
  {
   "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8BA3143A_9EE1_9560_41D6_AE0AAFF98E72",
 "levels": [
  {
   "url": "media/panorama_92DA80AE_98EB_065F_41D4_4E7127498345_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_8895EC68_98E9_FEC5_41DB_04E16EE24C9F",
 "levels": [
  {
   "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8B7DE538_9EE7_B760_41CB_E6E8E5C774CE",
 "levels": [
  {
   "url": "media/panorama_92D76EEE_98E9_3BDF_4185_05DFDB82FF97_0_HS_1_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_8893AC6D_98E9_FEDD_41D0_5A562E95C96F",
 "levels": [
  {
   "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88906C6E_98E9_FEDC_41DA_730924A9BFE3",
 "levels": [
  {
   "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8BA5D42F_9EE1_9560_41DB_96442CD7ECAF",
 "levels": [
  {
   "url": "media/panorama_92D765ED_98EB_09DD_41B6_2F04A2514CB7_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_95D62768_98FB_0AC4_4186_4920377E921F",
 "levels": [
  {
   "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_1_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_8894FC66_98E9_FECC_41DC_3920F83E9DA2",
 "levels": [
  {
   "url": "media/panorama_93D75B32_98E9_1A44_41C5_11911BEFFC27_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_8894BC67_98E9_FECC_41DF_D42E464ED949",
 "levels": [
  {
   "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88957C67_98E9_FECC_41D4_25EC8A65C7FD",
 "levels": [
  {
   "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88953C68_98E9_FEC4_41C4_B5A6938F5697",
 "levels": [
  {
   "url": "media/panorama_92AE40EB_98E9_07C4_41BE_5E7FD30A9FD1_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_90EB3984_9E60_9F21_41B4_53BA30DD8987",
 "levels": [
  {
   "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8E703BB1_9EA1_B360_41D9_C007B0685418",
 "levels": [
  {
   "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8E705BB2_9EA1_B360_41BA_5BF99ECB7329",
 "levels": [
  {
   "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8E71EBB3_9EA1_B360_41E0_081343D68535",
 "levels": [
  {
   "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8BAF9440_9EE1_9520_41D4_FD2A13640D8C",
 "levels": [
  {
   "url": "media/panorama_94FFEB05_9E61_9320_418E_4F39643FE4A1_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_8892CC6B_98E9_FEC4_41D1_BDA78EEBD925",
 "levels": [
  {
   "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88928C6B_98E9_FEC4_41E1_53007707A6D4",
 "levels": [
  {
   "url": "media/panorama_92DBD9F3_98EA_F9C5_41E0_CEC7B42271E4_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88959C69_98E9_FEC4_41DE_836D18D8AC01",
 "levels": [
  {
   "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88926C6A_98E9_FEC4_41CA_165E28C39584",
 "levels": [
  {
   "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88920C6A_98E9_FEC4_41BC_1362EC0344B7",
 "levels": [
  {
   "url": "media/panorama_92D44C80_98E9_1E43_41E0_488248FACA94_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_88934C6C_98E9_FEDC_41B4_86B5C108078D",
 "levels": [
  {
   "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "id": "AnimatedImageResource_8893EC6D_98E9_FEDD_41D7_63F6CF91E201",
 "levels": [
  {
   "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_90EAB981_9E60_9F23_41D0_19F961868A94",
 "levels": [
  {
   "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_E2741FF0_F003_09CE_41E8_1A6C014D0138",
 "levels": [
  {
   "url": "media/panorama_92D5D7C1_98EB_09C4_41E2_4114D73BF2FA_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_90EB1983_9E60_9F27_41DF_E600FF727E3D",
 "levels": [
  {
   "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8E6E5BA1_9EA1_B360_41C9_FCD7A46DFEC3",
 "levels": [
  {
   "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8E6FEBA2_9EA1_B360_41C6_00A3C306B6F6",
 "levels": [
  {
   "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8E6F0BA2_9EA1_B360_41D9_35DC1EC8D81F",
 "levels": [
  {
   "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8E6F5BA3_9EA1_B360_41DB_4589D880275C",
 "levels": [
  {
   "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_8BA1143D_9EE1_9560_41DD_4C8F2EB65EBB",
 "levels": [
  {
   "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_B568D9B5_A45C_16F1_41E0_0789763363C3",
 "levels": [
  {
   "url": "media/panorama_948A97D4_9E61_9321_41D6_54D1B639DAFA_0_HS_8_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "insetBorder": false,
 "class": "WebFrame",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": "99.954%",
 "id": "WebFrame_FF7C06DA_F005_1BF2_41E5_7125C4496CA1",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "//www.youtube.com/embed/GQzCrWCZN4A",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "minWidth": 1,
 "data": {
  "name": "Frame"
 },
 "paddingTop": 0,
 "height": "100.004%"
},
{
 "maxHeight": 70,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "width": 38.75,
 "id": "IconButton_FFDCB8E8_F003_17DE_41CE_86BF69516717",
 "borderRadius": 0,
 "right": "0%",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "height": 38.75,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_FE72AFA3_F00D_0A52_41D3_23A5DF4F8056, false, 0, this.effect_FFE780E4_F00F_77D6_41EA_87773433B16C, 'hideEffect', false)",
 "transparencyActive": false,
 "paddingRight": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_FFDCB8E8_F003_17DE_41CE_86BF69516717.jpg",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 70,
 "data": {
  "name": "Close"
 }
},
{
 "insetBorder": false,
 "class": "WebFrame",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": "99.954%",
 "id": "WebFrame_E119CD51_F003_0ECF_41DB_E2CDDD10E97D",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "//www.youtube.com/embed/3YO4ArlH9KA",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "minWidth": 1,
 "data": {
  "name": "Frame"
 },
 "paddingTop": 0,
 "height": "100.004%"
},
{
 "maxHeight": 70,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "width": 38.75,
 "id": "IconButton_E119AD52_F003_0ECD_419B_EE6AD0ED6BA6",
 "borderRadius": 0,
 "right": "0%",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "height": 38.75,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_E27CA9A8_F005_765D_41A3_FB896E1CA134, false, 0, this.effect_E2ADC9A6_F007_1652_41C2_24C0DB1B62AA, 'hideEffect', false)",
 "transparencyActive": false,
 "paddingRight": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_E119AD52_F003_0ECD_419B_EE6AD0ED6BA6.jpg",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 70,
 "data": {
  "name": "Close"
 }
},
{
 "insetBorder": false,
 "class": "WebFrame",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": "99.954%",
 "id": "WebFrame_E1FD8D4F_F003_0ED1_41CA_1403AE1111A4",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "https://maps.google.com/maps?output=embed&center=-6.850495,109.147552&z=17&q=6%C2%B051'01.8%22S+109%C2%B008'51.2%22E",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "minWidth": 1,
 "data": {
  "name": "Frame"
 },
 "paddingTop": 0,
 "height": "100.004%"
},
{
 "maxHeight": 70,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "width": 38.75,
 "id": "IconButton_E1FDAD50_F003_0ECE_41CD_EB94CF229DBF",
 "borderRadius": 0,
 "right": "0%",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "height": 38.75,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_E1C69F30_F003_0A4E_41C5_2759C68BDF40, false, 0, this.effect_E112A7CB_F007_39D2_41C1_660D40CADDA5, 'hideEffect', false)",
 "transparencyActive": false,
 "paddingRight": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_E1FDAD50_F003_0ECE_41CD_EB94CF229DBF.jpg",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 70,
 "data": {
  "name": "Close"
 }
}],
 "borderSize": 0,
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "paddingRight": 0,
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "scripts": {
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "existsKey": function(key){  return key in window; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
