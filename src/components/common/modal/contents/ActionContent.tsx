import { styled } from "styled-components";
import InputInModal from "../../InputField/Text/InputInModal";
import { useModalInfo } from "@/store/modalInfo.store";
import InputNumberInModal from "../../InputField/Text/InputNumberInModal";

const ActionContent = () => {
  const setActionName = useModalInfo((state) => state.setActionName);

  const setCountOrMinutes = useModalInfo((state) => state.setCountOrMinutes);

  const setSets = useModalInfo((state) => state.setSets);

  const setDescription = useModalInfo((state) => state.setDescription);

  return (
    <ActionContentStyle>
      <h2>운동명</h2>
      <InputInModal content="종목" setFn={setActionName} />
      <h2>횟수/시간</h2>
      <InputInModal content="횟수/시간" setFn={setCountOrMinutes} />
      <h2>세트</h2>
      <InputNumberInModal content="세트" setFn={setSets} />
      <h2>주의사항</h2>
      <InputInModal content="주의사항" setFn={setDescription} />
    </ActionContentStyle>
  );
};

const ActionContentStyle = styled.div`
  width: 100%;
  height: 100%;
  h2 {
    padding: 10px;
  }
`;

export default ActionContent;