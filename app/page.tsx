"use client";

import Overview from "@/components/home/pages/overview";
import * as ui5Base from "@ui5/webcomponents-base";
import { ObjectPage, ObjectPageSection } from "@ui5/webcomponents-react";

export default function Home() {
  console.log(ui5Base);

  return (
    <ObjectPage>
      <ObjectPageSection id="overview " titleText="Overview">
        <Overview />
      </ObjectPageSection>
    </ObjectPage>
  );
}
