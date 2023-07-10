import { useComponentValue } from '@latticexyz/react';
import { useMUD } from './MUDContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EventCards } from './components/EventCards';
import React, { useState } from 'react';
import { SyncState } from '@latticexyz/network';

export const App = () => {
  const {
    components: { LoadingState },
    network: { singletonEntity },
  } = useMUD();
  const [activeTab, setActiveTab] = useState(1);

  const loadingState = useComponentValue(LoadingState, singletonEntity, {
    state: SyncState.CONNECTING,
    msg: 'Connecting',
    percentage: 0,
  });

  return (
    <>
      <Header />
      <div className="text-center mt-12 mb-6">
        <h1 className="font-bold text-3xl">
          Autonomous World <br /> hackathons for future
        </h1>
        <p className="text-[#9D9D9D] text-xl mt-4 mb-8">
          Build products, practice skills, learn technologies, win prizes, and grow your network
        </p>
      </div>

      {loadingState.state !== SyncState.LIVE ? (
        <div className="font-dot text-center mt-32">
          {loadingState.msg}
          <br />
          <progress
            className="mt-6 [&::-webkit-progress-bar]:rounded-sm [&::-webkit-progress-value]:rounded-sm [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-violet-600 [&::-moz-progress-bar]:bg-violet-600"
            value={Math.floor(loadingState.percentage)}
            max="100"
          />
        </div>
      ) : (
        <EventCards />
      )}

      <Footer />
    </>
  );
};
