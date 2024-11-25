import { ICoachDetail } from "@/models/coach.model";
import { useState } from "react";
import styled from "styled-components";
import DefaultTab from "../tab/DefaultTab";
import ActiveCenterMap from "./ActiveCenterMap";
import Introduction from "./Introduction";
import Review from "./Review";

interface Props {
  coach: ICoachDetail;
}
const CoachDetails = ({ coach }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <DefaultTab
        value={activeTabIndex}
        onTabChange={handleTabChange}
        labels={["자기소개", "활동 센터", "리뷰"]}
      />
      <Details>
        {activeTabIndex === 0 && (
          <Introduction
            coachingSports={coach.coachingSports}
            introduction={coach.coachIntroduction}
          />
        )}
        {activeTabIndex === 1 && (
          <ActiveCenterMap roadNameAddress={coach.activeCenter} />
        )}
        {activeTabIndex === 2 && (
          <Review coachId={coach.coachId} isMatched={coach.isMatched} />
        )}
      </Details>
    </div>
  );
};

const Details = styled.div`
  margin: 20px 0;
`;

export default CoachDetails;
