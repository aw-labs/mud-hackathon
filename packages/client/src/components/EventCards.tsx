import { useComponentValue } from '@latticexyz/react';
import { useMUD } from '../MUDContext';
import { EventCard } from './EventCard';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

export const EventCards = () => {
  const {
    components: { Hackathon, Config },
    network: { singletonEntity },
  } = useMUD();
  const [maxHackathonNum, setMaxHackathonNum] = useState(0);

  const config = useComponentValue(Config, singletonEntity);

  useEffect(() => {
    if (config && config.maxHackathonId) {
      const bigNum = ethers.BigNumber.from(config.maxHackathonId);
      console.log('bigNum: ', bigNum);
      setMaxHackathonNum(bigNum.toNumber());
    }
  }, [config]);

  return (
    <div
      className="bg-white mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8"
      style={{ minHeight: '500px' }}
    >
      {Array.from({ length: maxHackathonNum }, (_, i) => i + 1).map((hackathonNum) => (
        <EventCard hackathonNum={hackathonNum} />
      ))}
    </div>
  );
};