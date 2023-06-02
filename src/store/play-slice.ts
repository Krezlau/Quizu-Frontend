import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPlayQuestion from "../types/IPlayQuestion";
import IPlayQuestionsResponse from "../types/IPlayQuestionsResponse";

interface IPlayState {
  isActive: boolean;
  quizName: string;
  questionNumber: number;
  timeForAnswer_s: number;
  questions: IPlayQuestion[];
  userAnswers: string[];
  score: number;
  timer: {
    isRunning: boolean;
    timeLeft_s: number;
  };
}

const initialState: IPlayState = {
  isActive: false,
  quizName: "",
  questionNumber: 0,
  timeForAnswer_s: 0,
  questions: [],
  userAnswers: [],
  score: 0,
  timer: {
    isRunning: false,
    timeLeft_s: 0,
  },
};

const playSlice = createSlice({
  name: "play",
  initialState: initialState,
  reducers: {
    startPlaying: (state, action: PayloadAction<IPlayQuestionsResponse>) => {
      state.isActive = true;
      state.questionNumber = 0;
      state.quizName = action.payload.quizName;
      state.timeForAnswer_s = action.payload.answerTimeS;
      state.questions = action.payload.questions;
      state.userAnswers = [];
      state.score = 0;
      state.timer.isRunning = true;
      state.timer.timeLeft_s = action.payload.answerTimeS;
    },
    stopPlaying: (state) => {
      state.isActive = initialState.isActive;
      state.quizName = initialState.quizName;
      state.questionNumber = initialState.questionNumber;
      state.timeForAnswer_s = initialState.timeForAnswer_s;
      state.questions = initialState.questions;
      state.userAnswers = initialState.userAnswers;
      state.score = initialState.score;
      state.timer.isRunning = initialState.timer.isRunning;
      state.timer.timeLeft_s = initialState.timer.timeLeft_s;
    },
    nextQuestion: (state) => {
      state.questionNumber++;
      state.timer.timeLeft_s = state.timeForAnswer_s;
      state.timer.isRunning = true;
    },
    answerQuestion: (
      state,
      action: PayloadAction<{ answerId: string; score: number }>
    ) => {
      state.userAnswers.push(action.payload.answerId);
      state.timer.isRunning = false;
      state.score +=
        (action.payload.score * state.timer.timeLeft_s) / state.timeForAnswer_s;
    },
    tick: (state) => {
      state.timer.timeLeft_s -= 0.01;
      if (state.timer.timeLeft_s <= 0) {
        state.timer.isRunning = false;
        state.userAnswers.push("");
      }
    },
  },
});

export const playActions = playSlice.actions;

export default playSlice;
