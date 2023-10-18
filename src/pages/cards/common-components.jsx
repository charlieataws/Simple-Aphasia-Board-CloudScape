// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react";
import { BreadcrumbGroup, HelpPanel } from "@cloudscape-design/components";
import { resourcesBreadcrumbs } from "../../common/breadcrumbs";
import { ExternalLinkGroup } from "../commons";

export const Breadcrumbs = () => (
  <BreadcrumbGroup
    items={resourcesBreadcrumbs}
    expandAriaLabel="Show path"
    ariaLabel="Breadcrumbs"
  />
);

const toolsFooter = (
  <ExternalLinkGroup
    items={[
      {
        text: "Working with Simple Aphasia Board.",
        href: "https://aws.amazon.com"
      },
      {
        text: "Working with your account team.",
        href: "https://aws.amazon.com"
      }
    ]}
  />
);
export const ToolsContent = () => (
  <HelpPanel footer={toolsFooter} header={<h2>Distributions</h2>}>
    <p>View your current tiles.</p>
  </HelpPanel>
);
