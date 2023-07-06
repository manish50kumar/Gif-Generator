
import './App.css';
import RandomGif from './components/RandomGif';
import GenerateGif from './components/GenerateGif';

function App() {
  return (
    <div className=" bg-slate-600 h-full w-full flex flex-col items-center">
      <h1 className='bg-white mt-[40px] w-11/12 text-center text-2xl font-bold px-10 py-2 '>Random Gif Generator</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px] '>
        <RandomGif></RandomGif>
      <GenerateGif></GenerateGif>
      </div>
    </div>
  );
}

export default App;
