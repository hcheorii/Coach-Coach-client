import { useEditReview, usePostReview } from "@/hooks/queries/useReview";
import { IPostReview } from "@/models/review.model";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import RatingStars from "../common/Card/ReviewCard.tsx/RatingStars";

export type TReviewMethod = "enroll" | "edit";

interface Props {
  id: number; //  리뷰 작성 시 코치 아이디, 리뷰 수정 시 리뷰 아이디
  onClose: () => void;
  type: TReviewMethod;
  refetchCoachId?: number;
}

const ReviewInner = ({ id, onClose, type, refetchCoachId }: Props) => {
  const { mutate: postMutate } = usePostReview(id);
  const { mutate: editMutate } = useEditReview(refetchCoachId);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IPostReview>();

  const onSubmit = (data: IPostReview) => {
    if (type === "enroll") {
      postMutate({ coachId: id, data });
    } else {
      editMutate({ reviewId: id, data });
    }
    onClose();
  };

  return (
    <ReviewStyle onSubmit={handleSubmit(onSubmit)}>
      <Stars>
        <Controller
          control={control}
          name="stars"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RatingStars stars={value} onClick={(stars) => onChange(stars)} />
          )}
        />
      </Stars>
      <StyledTextField
        multiline
        rows={3}
        placeholder="코치에 대한 리뷰를 적어주세요"
        fullWidth
        {...control.register("contents", { required: true, maxLength: 500 })}
      />
      {errors.stars ? (
        <Error>별점을 등록해주세요</Error>
      ) : errors.contents ? (
        <Error>리뷰는 500자까지 가능해요</Error>
      ) : (
        ""
      )}

      <Footer>
        <button onClick={onClose} type="button">
          취소
        </button>
        <button type="submit">등록하기</button>
      </Footer>
    </ReviewStyle>
  );
};

const ReviewStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;

  button:first-of-type {
    color: inherit;
  }

  button:nth-of-type(2) {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    font-size: 14px;
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.color.third};
    }
  }
`;

const Error = styled.p`
  font-size: 12px;
  color: red;
`;

export default ReviewInner;
