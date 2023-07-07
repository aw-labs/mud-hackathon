// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IHackathonSystem {
  function createHackathon(
    address _prizeToken,
    uint256 _startTimestamp,
    uint256 _submitPeriod,
    uint256 _votingPeriod,
    uint256 _withdrawalPeriod,
    uint8 _winnerCount,
    string memory _name,
    string memory _uri
  ) external;

  function updateHackathon(
    bytes32 _hackathonId,
    address _prizeToken,
    uint256 _startTimestamp,
    uint256 _submitPeriod,
    uint256 _votingPeriod,
    uint256 _withdrawalPeriod,
    uint8 _winnerCount,
    string memory _name,
    string memory _uri
  ) external;

  function fixHackathon(bytes32 _hackathonId) external;

  function proceedPhase(bytes32 _hackathonId) external;

  function withdrawByOwner(bytes32 _hackathonId) external;
}