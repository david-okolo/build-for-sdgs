import estimator from './estimator';

const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

describe('Estimator Unit Tests', () => {
  it('should return object with correct keys', () => {
    expect(estimator(data)).toHaveProperty('data');
    expect(estimator(data)).toHaveProperty('impact');
    expect(estimator(data)).toHaveProperty('severeImpact');
  });

  it('should have a data property that holds the input data', () => {
    const result = estimator(data);

    // Runs test loops to verify all data properties
    Object.keys(data.region).forEach((key) => {
      expect(result).toHaveProperty(['data', 'region', key], data.region[key]);
    });

    Object.keys(data).forEach((key) => {
      if (key !== 'region') {
        expect(result).toHaveProperty(['data', key], data[key]);
      }
    });
  });

  it('should have all required output data', () => {
    const requiredImpactKeys = ['currentlyInfected', 'infectionsByRequestedTime', 'severeCasesByRequestedTime', 'hospitalBedsByRequestedTime', 'casesForVentilatorsByRequestedTime', 'casesForICUByRequestedTime', 'dollarsInFlight'];
    const requiredSevereImpactKeys = ['currentlyInfected', 'infectionsByRequestedTime', 'severeCasesByRequestedTime', 'hospitalBedsByRequestedTime', 'casesForVentilatorsByRequestedTime', 'casesForICUByRequestedTime', 'dollarsInFlight'];
    const { impact, severeImpact } = estimator(data);

    requiredImpactKeys.forEach((_key) => {
      expect(impact).toHaveProperty(_key);
    });

    requiredSevereImpactKeys.forEach((_key) => {
      expect(severeImpact).toHaveProperty(_key);
    });
  });
});
