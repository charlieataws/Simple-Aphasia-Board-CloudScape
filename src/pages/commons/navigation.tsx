// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react";
import SideNavigation, {
  SideNavigationProps
} from "@cloudscape-design/components/side-navigation";

const navHeader = { text: "Simple Aphasia Board", href: "#/" };
export const navItems: SideNavigationProps["items"] = [
  {
    type: "section",
    text: "Device Registration and Configuration",
    items: [
      { type: "link", text: "Register Device", href: "#/registrations" },
      { type: "link", text: "Associate Device to User", href: "#/users" },
      { type: "link", text: "Monitoring and alarms", href: "#/monitoring" }
    ]
  },
  {
    type: "section",
    text: "Create Device Templates",
    items: [
      {
        type: "link",
        text: "Use organizational template",
        href: "#/templates"
      },
      { type: "link", text: "Create a template", href: "#/createtemplate" }
    ]
  }
];

const defaultOnFollowHandler: SideNavigationProps["onFollow"] = (event) => {
  // keep the locked href for our demo pages
  event.preventDefault();
};

interface NavigationProps {
  activeHref?: string;
  header?: SideNavigationProps["header"];
  items?: SideNavigationProps["items"];
  onFollowHandler?: SideNavigationProps["onFollow"];
}

export function Navigation({
  activeHref,
  header = navHeader,
  items = navItems,
  onFollowHandler = defaultOnFollowHandler
}: NavigationProps) {
  return (
    <SideNavigation
      items={items}
      header={header}
      activeHref={activeHref}
      onFollow={onFollowHandler}
    />
  );
}
