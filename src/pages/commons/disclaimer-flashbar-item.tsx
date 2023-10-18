// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useId } from "react";
import { FlashbarProps } from "@cloudscape-design/components/flashbar";

export function useDisclaimerFlashbarItem(
  onDismiss: (id: string) => void
): FlashbarProps.MessageDefinition | null {
  const id = useId();

  return {
    type: "info",
    dismissible: true,
    dismissLabel: "Dismiss message",
    onDismiss: () => onDismiss(id),
    statusIconAriaLabel: "info",
    content: (
      <>
        This demo is an example of a Simple Aphasia Board, drawn from sessions
        with the Richmond VAMC staff (thank you!). The tiles are entirely
        configurable, and designed with the Fire Tablet and Fire TV in mind.
      </>
    ),
    id
  };
}
