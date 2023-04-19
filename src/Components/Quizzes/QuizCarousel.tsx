import React, {useRef, WheelEventHandler} from "react";
import IQuiz from "../../types/IQuiz";
import Quiz from "./Quiz";

const QuizCarousel: React.FC<{quizzes: IQuiz[]}> = (props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelHandler: WheelEventHandler<HTMLDivElement> = (event) => {
    if (!event.deltaY) {
      return;
    }
    carouselRef.current!.scrollLeft += 5*event.deltaY + event.deltaX;
  }

  return <div className="overflow-x-scroll flex flex-col gap-2 max-h-[40rem] md:carousel md:carousel-center p-4 bg-neutral md:flex-row md:space-x-4 rounded-box md:h-64 md:px-6" ref={carouselRef} onWheel={wheelHandler}>
    {props.quizzes.length > 0 ? props.quizzes.map(q => <Quiz />) : <p className="m-auto text-xl font-semibold">Nothing to see here, unfortunately.</p>}
  </div>
}

export default QuizCarousel;
