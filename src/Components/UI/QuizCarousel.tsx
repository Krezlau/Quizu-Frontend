import {useRef, WheelEventHandler} from "react";

const QuizCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelHandler: WheelEventHandler<HTMLDivElement> = (event) => {
    if (!event.deltaY) {
      return;
    }
    carouselRef.current!.scrollLeft += 5*event.deltaY + event.deltaX;
  }

  return <div className="carousel carousel-center p-4 bg-neutral space-x-4 rounded-box h-64" ref={carouselRef} onWheel={wheelHandler}>
    <div className="carousel-item w-3/5 h-full border-2">
      q1
    </div>
    <div className="carousel-item w-3/5 h-full border-2">
      q2
    </div>
    <div className="carousel-item w-3/5 h-full border-2">
      q3
    </div>
    <div className="carousel-item w-3/5 h-full border-2">
      q4
    </div>
    <div className="carousel-item w-3/5 h-full border-2">
      q5
    </div>
    <div className="carousel-item w-3/5 h-full border-2">
      q6
    </div>
    <div className="carousel-item w-3/5 h-full border-2">
      q7
    </div>
  </div>
}

export default QuizCarousel;
