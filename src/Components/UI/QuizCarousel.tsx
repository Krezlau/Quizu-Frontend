import {useRef, WheelEventHandler} from "react";
import Quiz from "../Quizzes/Quiz";

const QuizCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelHandler: WheelEventHandler<HTMLDivElement> = (event) => {
    if (!event.deltaY) {
      return;
    }
    carouselRef.current!.scrollLeft += 5*event.deltaY + event.deltaX;
  }

  return <div className="overflow-x-scroll flex flex-col gap-2 max-h-[40rem] md:carousel md:carousel-center p-4 bg-neutral md:flex-row md:space-x-4 rounded-box md:h-64" ref={carouselRef} onWheel={wheelHandler}>
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
  </div>
}

export default QuizCarousel;
