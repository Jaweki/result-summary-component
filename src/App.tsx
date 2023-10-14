// import ColorPalleteInView from "./components/ColorPalleteInView";
import ResultSummaryComponent from "./components/ResultSummaryComponent";

const App = () => {
  return (
    <main className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <ResultSummaryComponent />
      {/* <ColorPalleteInView /> */}
      <span className="bottom-0 mobile:mt-5 text-[12px] font-sans font-light">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          target="_blank"
          className=" text-blue-700 underline "
        >
          Frontend Mentor.
        </a>{" "}
        Coded by{" "}
        <a
          href="https://portfolio.jaweki.com"
          target="_blank"
          className="text-blue-700 underline"
        >
          Jaweki.
        </a>
      </span>
    </main>
  );
};

export default App;
