import React, { FC } from 'react';
import DateTimePicker from './DateTimePicker';

const HackathonPrizes = () => {
  return (
    <div className="mr-10">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold">Prizes</h2>
        <button className="bg-[#333333] text-white pl-4 pr-4 pt-2 pb-2 text-sm rounded-xl">
          <a href="https://oasys.framer.website/" target="_blank" rel="noopener noreferrer" >
            Depost USDC
          </a>
        </button>
      </div>
      
      <p>5000 USDC will be distributed to the top 5 winners.</p>
      <h2 className="text-2xl font-bold mt-4">Transactions</h2>
      <div className="grid grid-cols-4 p-4 rounded-md shadow-md">
        <div className="col-span-1 border-b font-bold pb-2">Account</div>
        <div className="col-span-1 border-b font-bold pb-2">To</div>
        <div className="col-span-1 border-b font-bold pb-2">Token Amount</div>
        <div className="col-span-1 border-b font-bold pb-2">Time</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 5</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 6</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 7</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 8</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 9</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 10</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 11</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 12</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 13</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 14</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 15</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 16</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 17</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 18</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 19</div>
        <div className="col-span-1 border-b pb-2 pt-2 text-gray-500">Cell 20</div>
      </div>
    </div>
  );
};

export default HackathonPrizes;
