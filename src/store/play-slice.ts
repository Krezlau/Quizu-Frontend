import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPlayQuestion from "../types/IPlayQuestion";
import IPlayQuestionsResponse from "../types/IPlayQuestionsResponse";

interface IPlayState {
  isActive: boolean;
  quizName: string;
  questionNumber: number;
  timeForAnswer_s: number;
  questions: IPlayQuestion[];
  userAnswers: number[];
  score: number;
}

const initialState: IPlayState = {
  isActive: false,
  quizName: "",
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
      state.quizName = action.payload.quizName;
      state.timeForAnswer_s = action.payload.answerTimeS;
      state.questions = action.payload.questions;
      state.userAnswers = [];
      state.score = 0;
    },
    stopPlaying: (state) => {
      state.isActive = initialState.isActive;
      state.quizName = initialState.quizName;
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
