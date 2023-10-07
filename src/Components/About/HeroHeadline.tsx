import image from "../../assets/stock.jpg" 

const HeroHeadline: React.FC<{title: string, text: string, imgRight?: boolean}> = (props) => {
  return (
    <div className="hero my-10 rounded-3xl bg-base-200">
      <div className="hero-content w-full flex-col justify-between lg:flex-row">
        {/* !props.imgRight && <img src={image} className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-7xl text-primary font-bold">{props.title}</h1>
          <p className="py-6 text-xl">
            {props.text}
          </p>
        </div>
        {/* props.imgRight && <img src={image} className="max-w-sm rounded-lg shadow-2xl" /> */}
      </div>
    </div>
  );
};

export default HeroHeadline;
