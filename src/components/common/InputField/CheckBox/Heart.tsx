import IconButton from "@/components/Icon/IconButton";
import { useLikePost, useUnLikePost } from "@/hooks/queries/useLikes";
import { MouseEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  id: number;
  checked: boolean;
  size: string;
}

const Heart = ({ id, checked, size }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);
  const { mutate: mutateLike } = useLikePost(id);
  const { mutate: mutateUnlike } = useUnLikePost(id);

  const handleHeart = (e: MouseEvent, id: number) => {
    e.stopPropagation();
    if (isChecked) {
      mutateUnlike(id);
    } else {
      mutateLike(id);
    }
    setIsChecked(!isChecked);
  };

  return (
    <HeartStyle>
      {isChecked ? (
        <IconButton
          size={size}
          name="heart"
          color="likes"
          onClick={(e) => handleHeart(e, id)}
        />
      ) : (
        <IconButton
          size={size}
          name="emptyHeart"
          color="likes"
          onClick={(e) => handleHeart(e, id)}
        />
      )}
    </HeartStyle>
  );
};

const HeartStyle = styled.div``;

export default Heart;
