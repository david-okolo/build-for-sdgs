import library from './estimatorSupport';

const {
  impactCurrentlyInfected,
  severeCurrentlyInfected,
  normalizedPeriod,
  infectionsByRequestedTime,
  severeCasesByRequestedTime,
  hospitalBedsByRequestedTime,
  casesForICUByRequestedTime,
  casesForVentilatorsByRequestedTime,
  dollarsInFlight
} = library;

describe('Support Functions Unit Tests', () => {
  it('should return correct "currentlyInfected"', () => {
    expect(impactCurrentlyInfected(10)).toEqual(100);
    expect(impactCurrentlyInfected(23)).toEqual(230);
    expect(severeCurrentlyInfected(12)).toEqual(600);
    expect(severeCurrentlyInfected(30)).toEqual(1500);
  });

  it('should return normalized periods', () => {
    expect(normalizedPeriod(21, 'days')).toEqual(21);
    expect(normalizedPeriod(4, 'weeks')).toEqual(28);
    expect(normalizedPeriod(2, 'months')).toEqual(60);
  });

  it('should return correct "infectionsByRequestedTime"', () => {
    expect(infectionsByRequestedTime(100, 21)).toEqual(12800);
    expect(infectionsByRequestedTime(100, 23)).toEqual(12800);
    expect(infectionsByRequestedTime(100, 25)).toEqual(25600);
  });

  it('should return correct number of "severeCases"', () => {
    expect(severeCasesByRequestedTime(12800)).toEqual(1920);
    expect(severeCasesByRequestedTime(12832)).toEqual(1924);
    expect(severeCasesByRequestedTime(12828)).toEqual(1924);
  });

  it('should return correct number of hostital beds', () => {
    expect(hospitalBedsByRequestedTime(12800, 300000)).toEqual(-2300);
    expect(hospitalBedsByRequestedTime(1280, 300000)).toEqual(9220);
  });

  it('should return correct number of cases for ICU', () => {
    expect(casesForICUByRequestedTime(12800)).toEqual(640);
  });

  it('should return correct number of cases for ventilators', () => {
    expect(casesForVentilatorsByRequestedTime(12800)).toEqual(256);
  });

  it('should return the correct value of money lost', () => {
    expect(dollarsInFlight(12800, 0.71, 5)).toEqual(1363200);
  });
});
