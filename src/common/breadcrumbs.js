// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
export const resourcesBreadcrumbs = [
  {
    text: "Simple Aphasia Board",
    href: "#"
  },
  {
    text: "Tiles",
    href: "#"
  }
];

export const resourceDetailBreadcrumbs = [
  ...resourcesBreadcrumbs,
  {
    text: "SLCCSMWOHOFUY0",
    href: "#"
  }
];

export const resourceManageTagsBreadcrumbs = [
  ...resourceDetailBreadcrumbs,
  {
    text: "Manage tags",
    href: "#"
  }
];

export const resourceEditBreadcrumbs = [
  ...resourceDetailBreadcrumbs,
  {
    text: "Edit",
    href: "#"
  }
];

export const resourceCreateBreadcrumbs = [
  ...resourcesBreadcrumbs,
  {
    text: "Create tile",
    href: "#"
  }
];

export const readFromS3Breadcrumbs = [
  ...resourceDetailBreadcrumbs,
  {
    text: "Read tiles",
    href: "#"
  }
];

export const writeToS3Breadcrumbs = [
  ...resourceDetailBreadcrumbs,
  {
    text: "Write tiles",
    href: "#"
  }
];
