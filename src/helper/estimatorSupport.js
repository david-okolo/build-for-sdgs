import constants from './constants';

/**
 * Function tagged with "Optimization" were abstracted
 * because if the requirements we want it housed in a single place.
 * Also, for easier testing.
 */

const monthInDays = 30;
const weekInDays = 7;
const bestCaseInfectionsMultiplier = 10;
const worstCaseInfectionsMultiplier = 50;
const { days, weeks, months } = constants;

/**
 * Optimization
 *
 * Calculates the best case currently infected by multiplying reported cases by 10
 *
 * @param {number} reportedCases - the number of reportedCases
 */
const getImpactCurrentlyInfected = (reportedCases) => reportedCases * bestCaseInfectionsMultiplier;

/**
 * Optimization
 *
 * Calculates the worst case currently infected by multiplying reported cases by 50
 *
 * @param {number} reportedCases - the number of reportedCases
 */
const getSevereCurrentlyInfected = (reportedCases) => reportedCases * worstCaseInfectionsMultiplier;

/**
 * Calculates the total period in days
 *
 * @param {number} timeToElapse - value for time to elapse
 * @param {string} periodType - value for its unit
 */
const getNormalizedPeriod = (timeToElapse, periodType = days) => {
  switch (periodType) {
    case months:
      return timeToElapse * monthInDays;
    case weeks:
      return timeToElapse * weekInDays;
    default:
      return timeToElapse;
  }
};

/**
 * Calculates the value of infection by requested time.
 * The infections double every three days
 *
 * @param {number} currentlyInfected
 * @param {number} period
 */
const getInfectionsByRequestedTime = (currentlyInfected, period) => {
  const factor = Math.trunc(period / 3); // gets the total number of 3 day sets in the period
  return currentlyInfected * (2 ** factor);
};

/**
 * Calculates the number of severe cases
 * @param {number} numberOfInfections
 * @returns {number} the truncated value
 */
const getSevereCasesCount = (numberOfInfections) => Math.trunc(numberOfInfections * 0.15);

/**
 * Calculates hospital beds remaining
 * @param {number} numberOfSevereCases
 * @param {number} totalBeds
 * @returns {number} the truncated value
 */
const getRemainingHospitalBedsCount = (
  numberOfSevereCases,
  totalBeds
) => {
  const availableBeds = totalBeds * 0.35;
  return Math.trunc(availableBeds - numberOfSevereCases);
};

/**
 * Calculates the cases that'll need the ICU
 * @param {number} numberOfInfections
 * @returns {number} the truncated value
 */
const getCasesForICUCount = (numberOfInfections) => Math.trunc(numberOfInfections * 0.05);

/**
 * Calculates cases that'll need to use ventilators
 * @param {number} numberOfInfections
 * @returns {number} the truncated value
 */
const getCasesForVentilatorsCount = (numberOfInfections) => Math.trunc(numberOfInfections * 0.02);

/**
 * Calculates the economic loss in dollarsfor that period
 * @param {number} numberOfInfections
 * @param {number} avgIncomePopulationPercentage - as a decimal e.g. 0.76
 * @param {number} avgDailyIncome - in US dollars
 * @param {number} period - in days
 * @returns {number} the truncated value
 */
const getDollarsInFlight = (
  numberOfInfections,
  avgIncomePopulationPercentage,
  avgDailyIncome,
  period
) => {
  const result = (numberOfInfections * avgIncomePopulationPercentage * avgDailyIncome) / period;
  return Math.trunc(result);
};

const library = {
  getImpactCurrentlyInfected,
  getSevereCurrentlyInfected,
  getNormalizedPeriod,
  getInfectionsByRequestedTime,
  getSevereCasesCount,
  getRemainingHospitalBedsCount,
  getCasesForICUCount,
  getCasesForVentilatorsCount,
  getDollarsInFlight
};

export default library;
