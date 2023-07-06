import { useComponentValue } from '@latticexyz/react';
import { useMUD } from './MUDContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EventCard } from './components/EventCard';

export const App = () => {
  const {
    components: { Counter },
    systemCalls: { increment },
    network: { singletonEntity },
  } = useMUD();

  return (
    <>
      <Header />
      <div className="text-center mt-12 mb-6">
        <h1 className="font-bold  text-3xl">
          Autonomous World <br /> hackathons for future
        </h1>
        <p className="text-gray-600 text-xl mt-2">
          Build products, practice skills, learn technologies, win prizes, and grow your network
        </p>
        <div className="card-actions justify-center mt-4">
          <button className="bg-black text-white pl-4 pr-4 pt-1 pb-1 text-sm rounded-3xl">
            Join our discord
          </button>
        </div>
      </div>
      <div className="bg-white mt-6 mb-6 grid grid-cols-3 gap-4 px-8">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <Footer />
    </>
  );
};
