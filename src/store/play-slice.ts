import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPlayQuestion from "../types/IPlayQuestion";

interface IPlayState {
  isActive: boolean;
  questionNumber: number;
  timeForAnswer_s: number;
  questions: IPlayQuestion[];
  userAnswers: number[];
  score: number;
}

const initialState: IPlayState = {
  isActive: true, //false,
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
      action: PayloadAction<{
        count: number;
        timeForAnswer_s: number;
        questions: IPlayQuestion[];
      }>
    ) => {
      state.isActive = true;
      state.questionNumber = 0;
      state.timeForAnswer_s = action.payload.timeForAnswer_s;
      state.questions = action.payload.questions;
      state.userAnswers = [];
      state.score = 0;
    },
    stopPlaying: (state) => {
      state = initialState;
    },
  },
});

export const playActions = playSlice.actions;

export default playSlice;
