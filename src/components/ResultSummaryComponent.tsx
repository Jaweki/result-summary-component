import { sampleData } from "../models/data";

interface MapProps {
  category: string;
  icon: string;
  score: number;
}

const Stats = () => {
  const handleCategoryColor = (index: number) => {
    let textColor;

    if (index == 0) {
      textColor = "text-primary-lightRed";
    } else if (index == 1) {
      textColor = "text-primary-orangeyYellow";
    } else if (index == 2) {
      textColor = "text-primary-greenTeal";
    } else if (index == 3) {
      textColor = "text-primary-colbaltBlue";
    }

    return textColor;
  };

  return (
    <div className="flex flex-col gap-3 mt-3 max-mobile:mt-0">
      {sampleData.map(({ category, icon, score }: MapProps, index: number) => (
        <div
          key={`${category}-${score}`}
          className={` flex flex-row justify-between p-2 border-solid rounded-lg h-[35px] text-[13px] shadow-md ${
            index == 2 || index == 3 ? "bg-neutral-paleBlue" : ""
          }`}
        >
          <div className="flex flex-row gap-1">
            <img src={icon} alt={category} width={20} height={20} />
            <span className={`font-bold ${handleCategoryColor(index)}`}>
              {category}
            </span>
          </div>
          <div className=" font-extraBold text-neutral-lightLavender">
            <span className="text-neutral-darkGrayBlue">{score}</span> / 100
          </div>
        </div>
      ))}
    </div>
  );
};

const ResultSummaryComponent = () => {
  return (
    <div className=" w-[630px] h-[360px] max-mobile:w-full max-mobile:h-[100vh] max-mobile:rounded-none rounded-2xl flex flex-row max-mobile:flex-col gap-2 font-hankenGrotesk shadow-2xl max-mobile:gap-0 max-mobile:shadow-none max-mobile:top-0">
      <div className="w-1/2 h-full text-neutral-white rounded-2xl flex flex-col blue-based-line-gradient py-4 gap-4 justify-center px-16 max-mobile:px-14 max-mobile:h-[50%] max-mobile:w-full max-mobile:rounded-3xl max-mobile:rounded-t-none">
        <span className=" text-bodyCopy mx-auto pt-4">Your Result</span>
        <div className="flex flex-col justify-center items-center gap-1 w-[130px] h-[130px] rounded-[50%] blue-based-circle-gradient mx-auto mt-4 max-mobile:mt-0 max-mobile:gap-0">
          <span className="font-extraBold text-[50px]">76</span>
          <span className="text-[13px] font-sans font-light text-center opacity-70">
            of 100
          </span>
        </div>

        <span className=" font-bold leading-tight text-bodyCopy mx-auto">
          Great
        </span>

        <p className=" text-[13px] font-sans font-light text-center opacity-70 mx-auto">
          {" "}
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
      <div className=" rounded-2xl max-mobile:rounded-none flex flex-col justify-center w-1/2 h-full p-8 max-mobile:h-1/2 max-mobile:w-full max-mobile:pt-3 max-mobile:py-0">
        <span className=" font-extraBold text-bodyCopy text-neutral-darkGrayBlue ">
          Summary
        </span>
        <Stats />

        <button
          type="button"
          className="rounded-3xl bg-neutral-darkGrayBlue mt-3 h-[35px] text-neutral-white button-hover max-mobile:mt-2 max-mobile:mb-3"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResultSummaryComponent;
