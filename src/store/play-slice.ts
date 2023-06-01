import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPlayQuestion from "../types/IPlayQuestion";
import IPlayQuestionsResponse from "../types/IPlayQuestionsResponse";

interface IPlayState {
  isActive: boolean;
  questionNumber: number;
  timeForAnswer_s: number;
  questions: IPlayQuestion[];
  userAnswers: number[];
  score: number;
}

const initialState: IPlayState = {
  isActive: false,
  questionNumber: 0,
  timeForAnswer_s: 0,
  questions: [],
  userAnswers: [],
  score: 0,
};

const playSlice = createSlice({
  name: "play",
  initialState: initialState,
  reducers: {
    startPlaying: (
      state,
      action: PayloadAction<IPlayQuestionsResponse>
    ) => {
      state.isActive = true;
      state.questionNumber = 0;
      state.timeForAnswer_s = action.payload.answerTime_s;
      state.questions = action.payload.questions;
      state.userAnswers = [];
      state.score = 0;
    },
    stopPlaying: (state) => {
      state.isActive = initialState.isActive;
      state.questionNumber = initialState.questionNumber;
      state.timeForAnswer_s = initialState.timeForAnswer_s;
      state.questions = initialState.questions;
      state.userAnswers = initialState.userAnswers;
      state.score = initialState.score;
    },
  },
});

export const playActions = playSlice.actions;

export default playSlice;
