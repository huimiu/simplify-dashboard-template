import { BaseDashboard } from "@microsoft/teamsfx-react";

import ListWidget from "./ListWidget";

export default class SampleDashboard extends BaseDashboard<any, any> {
  override layout(): JSX.Element | undefined {
    return (
      <>
        <ListWidget />
      </>
    );
  }
}
