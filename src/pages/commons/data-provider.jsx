// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
export default class DataProvider {
  getData(name) {
    return fetch(
      "https://8xd6b8el51.execute-api.us-east-1.amazonaws.com/demo/getTiles"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => data.map((it) => ({ ...it, date: new Date(it.date) })));
  }
}
