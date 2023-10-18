// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react";
import { Link, StatusIndicator } from "@cloudscape-design/components";

export const CARD_DEFINITIONS = {
  header: (item) => (
    <div>
      <Link fontSize="heading-m" href="#">
        Item Identifier F45E-
        {(parseInt(item.rowandcolumn) + 2005).toString(16).toUpperCase()}
      </Link>
    </div>
  ),
  sections: [
    {
      id: "label",
      header: "Tile Label",
      content: (item) => item.label
    },
    {
      id: "image",
      header: "Tile Image",
      content: (item) => (
        <div>
          <img src={item.image} style={{ backgroundColor: "black" }} /> <br />
          {item.image.split("icons/")[1]}
        </div>
      )
    },
    {
      id: "api",
      header: "Calling",
      content: (item) =>
        item.api.includes("tile")
          ? item.api.split("?tile=")[1]
          : item.api
              .split("local://")[1]
              .replace("com.amazon.mp3", "Amazon Music (Fire tablets)")
              .replace("com.amazon.bueller.music", "Amazon Music (Fire TV)")
    },
    {
      id: "sound",
      header: "Sound File",
      content: (item) => (
        <div>
          <a href={item.soundfile}> {item.soundfile.split("speech/")[1]}</a>
          (Click to play)
        </div>
      )
    },
    {
      id: "state",
      header: "State",
      content: (item) => (
        <StatusIndicator
          type={item.state === "Deactivated" ? "error" : "success"}
        >
          {item.state}
        </StatusIndicator>
      )
    }
  ]
};

export const VISIBLE_CONTENT_OPTIONS = [
  {
    label: "Main tile properties",
    options: [
      { id: "label", label: "Tile Lable" },
      { id: "image", label: "Tile Image" },
      { id: "api", label: "Calling" },
      { id: "sound", label: "Sound File" },
      { id: "state", label: "State" }
    ]
  }
];

export const PAGE_SIZE_OPTIONS = [
  { value: 10, label: "10 Tiles" },
  { value: 30, label: "30 Tiles" },
  { value: 50, label: "50 Tiles" }
];

export const DEFAULT_PREFERENCES = {
  pageSize: 30,
  visibleContent: ["label", "image"]
};
