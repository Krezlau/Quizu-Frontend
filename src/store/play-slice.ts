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
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  percentage: number;
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
  correctCount: 0,
  incorrectCount: 0,
  unansweredCount: 0,
  percentage: 0,
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
      state.correctCount = 0;
      state.incorrectCount = 0;
      state.unansweredCount = 0;
      state.percentage = 0;
    },
    stopPlaying: (state) => {
      state.isActive = initialState.isActive;
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
      if (action.payload.score > 0) {
        state.correctCount++;
      } else  {
        state.incorrectCount++;
      } 
    },
    tick: (state) => {
      state.timer.timeLeft_s -= 0.01;
      if (state.timer.timeLeft_s <= 0) {
        state.timer.isRunning = false;
        state.userAnswers.push("");
        state.timeTaken_s.push(state.timeForAnswer_s);
        state.unansweredCount++;
      }
    },
    setPercentage: (state, action: PayloadAction<number>) => {
      state.percentage = action.payload;
    },
  },
});

export const playActions = playSlice.actions;

export default playSlice;
