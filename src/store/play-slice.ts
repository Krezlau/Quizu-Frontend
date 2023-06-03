import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPlayQuestion from "../types/IPlayQuestion";
import IPlayQuestionsResponse from "../types/IPlayQuestionsResponse";

interface IPlayState {
  isActive: boolean;
  quizName: string;
  quizId: string;
  questionNumber: number;
  timeForAnswer_s: number;
  questions: IPlayQuestion[];
  userAnswers: string[];
  timeTaken_s: number[],
  score: number;
  timer: {
    isRunning: boolean;
    timeLeft_s: number;
  };
}

const initialState: IPlayState = {
  isActive: false,
  quizName: "",
  quizId: "",
  questionNumber: 0,
  timeForAnswer_s: 0,
  questions: [],
  userAnswers: [],
  timeTaken_s: [],
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
      state.quizId = action.payload.quizId;
      state.timeForAnswer_s = action.payload.answerTimeS;
      state.questions = action.payload.questions;
      state.userAnswers = [];
      state.timeTaken_s = [];
      state.score = 0;
      state.timer.isRunning = true;
      state.timer.timeLeft_s = action.payload.answerTimeS;
    },
    stopPlaying: (state) => {
      state.isActive = initialState.isActive;
      state.quizName = initialState.quizName;
      state.quizId = initialState.quizId;
      state.questionNumber = initialState.questionNumber;
      state.timeForAnswer_s = initialState.timeForAnswer_s;
      state.questions = initialState.questions;
      state.userAnswers = initialState.userAnswers;
      state.timeTaken_s = initialState.timeTaken_s;
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
      state.timeTaken_s.push(state.timeForAnswer_s - state.timer.timeLeft_s);
    },
    tick: (state) => {
      state.timer.timeLeft_s -= 0.01;
      if (state.timer.timeLeft_s <= 0) {
        state.timer.isRunning = false;
        state.userAnswers.push("");
      }
    },
    timesUp: (state) => {
      state.userAnswers.push("");
      state.timer.isRunning = false;
      state.timeTaken_s.push(state.timeForAnswer_s);
    },
  },
});

export const playActions = playSlice.actions;

export default playSlice;
