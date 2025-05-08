import AgentDetails from "@/components/agents/AgentDetails";

import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { allAgents } from "@/data/agents";
import React from "react";

export const metadata = {
  title: "Agents Details || Proty - Real Estate React Nextjs Template",
  description: "Proty - Real Estate React Nextjs Template",
};
export default async function page({ params }) {
  const { id } = await params;

  const agent = allAgents.filter((elm) => elm.id == id)[0] || allAgents[0];

  return (
    <>
      <div id="wrapper">
        <Header1 />
        <div className="page-content">
          <Breadcumb pageName="Agents Details" />
          <AgentDetails agent={agent} />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
