import React from "react";
import ProcessPart from "./ProcessPart";
import Check from "./svg/Check";
import PaperIcon from "./svg/Paper";
import RollerIcon from "./svg/Roller";

const WholeProcess = ({
  parts = [
    {
      icon: <PaperIcon />,
      title: "Rezervácie",
      year: 2022,
      quarter: "3. kvartál",
    },
    {
      icon: <RollerIcon />,
      title: "Výstavba",
      year: 2022,
      quarter: "4. kvartál",
    },
    { icon: <Check />, title: "Kolaudácia", year: 2024, quarter: "2. kvartál" },
  ],
}) => {
  return (
    <div className="mx-[190px] flex gap-[110px] items-center justify-center mb-[135px]">
      {parts.map((p, k) =>
        k === 0 ? (
          <ProcessPart
            key={k}
            icon={p.icon}
            title={p.title}
            year={p.year}
            quarter={p.quarter}
            isGreen={true}
          />
        ) : (
          <ProcessPart
            key={k}
            icon={p.icon}
            title={p.title}
            year={p.year}
            quarter={p.quarter}
          />
        )
      )}
    </div>
  );
};

export default WholeProcess;
