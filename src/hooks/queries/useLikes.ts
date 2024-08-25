import { likePost, unlikePost } from "@/api/likes.api";
import { queryClient } from "@/api/queryClient";
import { IResponseMessage } from "@/models/responseMessage.model";
import { useMutation } from "@tanstack/react-query";

export const useLikePost = (id: number) => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => likePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getHomeData"] });
      queryClient.invalidateQueries({ queryKey: ["getCoachDetail", id] });
    }
  });

  return {
    mutate,
    isError
  };
};

export const useUnLikePost = (id: number) => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => unlikePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getHomeData"] });
      queryClient.invalidateQueries({ queryKey: ["getCoachDetail", id] });
    }
  });

  return {
    mutate,
    isError
  };
};