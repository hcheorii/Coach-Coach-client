import { ICoachingSports } from "./sports.model";

export interface IPopularCoach {
  coachId: number;
  coachName: string;
  coachImageUrl: string;
  description: string;
  countOfLikes: number;
  liked: boolean;
  coachingSports: ICoachingSports[];
}

export interface ICoach {
  coachId: number;
  coachName: string;
  localInfo: string; // localAddress로 변경
  profileImageUrl: string | null;
  coachIntroduction: string;
  coachingSports: ICoachingSports[];
  countOfReviews: number;
  rating: number;
  liked: boolean;
  countOfLikes: number;
}

export interface ICoachList {
  data: ICoach[];
  totalCount: number;
  currentPage: number;
}

export interface IAllCoachList {
  filter: {
    sports?: string; // 종목
    search?: string; // 검색어
    latest?: boolean; // 최신순
    review?: boolean; // 리뷰순
    liked?: boolean; // 좋아요순
    my?: boolean; // 내 코치
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

export interface ICoachDetail {
  coachName: string;
  coachGender: string;
  localInfo: string;
  profileImageUrl: string;
  createdAt: string;
  coachIntroduction: string;
  coachingSports: string[];
  activeCenter: string | null;
  activeCenterDetail: string | null;
  activeHours: string;
  chattingUrl: string;
  reviews: {
    userId: number;
    userName: string;
    contents: string;
    stars: number;
    createdAt: string;
  }[];
  isOpen: boolean;
  countOfReviews: number;
  rating: number;
  liked: boolean;
  countOfLikes: number;
}