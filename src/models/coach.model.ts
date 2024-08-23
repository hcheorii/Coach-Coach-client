import { ICoachingSports } from "./sports.model";

export interface IPopularCoach {
  coachId: number;
  coachName: string;
  profileImageUrl: string;
  description: string;
  countOfLikes: number;
  isLiked: boolean;
  coachingSports: ICoachingSports[];
}

export interface ISimpleCoach {
  coachId: number;
  coachName: string;
  profileImageUrl: string | null;
}

export interface ICoach extends ISimpleCoach {
  localAddress: string;
  coachIntroduction: string;
  coachingSports: ICoachingSports[];
  countOfReviews: number;
  reviewRating: number;
  isLiked: boolean;
  countOfLikes: number;
}

export interface ICoachList {
  data: ICoach[];
  totalCount: number;
  currentPage: number;
}

export interface IAllCoachList {
  filter: {
    search?: string; // 검색어
    filterId: number; // 정렬 필터
    sportsIdList?: number[]; // 종목 필터
  };
  page: number;
}

export interface IMyPageCoachFormValues {
  coachIntroduction: string;
  activeCenter: string;
  activeCenterDetail: string;
  coachingSports: string[];
  activeHours: string;
  chattingUrl: string;
  isOpen: boolean;
}
export type IMyPageCoachFormWithSports = Omit<
  IMyPageCoachFormValues,
  "coachingSports"
> & {
  coachingSports: { sportName: string }[];
};
export interface ICoachDetail {
  coachName: string;
  coachGender: "M" | "W";
  localAddress: string;
  profileImageUrl: string | null;
  createdAt: string;
  coachIntroduction: string;
  coachingSports: ICoachingSports[];
  activeCenter: string | null;
  activeCenterDetail: string | null;
  activeHours: string;
  chattingUrl: string;
  reviews: IReview[];
  isOpen: boolean;
  countOfReviews: number;
  reviewRating: number;
  isLiked: boolean;
  countOfLikes: number;
}

export interface IReview {
  userId: number;
  userName: string;
  contents: string;
  stars: number;
  createdAt: string;
}
