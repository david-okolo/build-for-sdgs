import xml from 'xml';

/**
 * To handle the conversion of the javascript object returned from the estimator function
 * into xml or json formats
 */
class Estimator {
  /**
   * Assigns the estimator to be used and passes the required data
   * @param {Function} estimator - a function to return estimates from a covid-19 status input data
   * @param {Object} data - stats about covid-19.
   */
  constructor(estimator, data) {
    this.estimate = estimator(data);
  }

  /**
   * Returns estimate data as javascript object
   * @returns {Object} - The estimated output data
   */
  toJSON() {
    return this.estimate;
  }

  /**
   * Returns estimate data as xml string
   * @returns {String} - The estimated output data
   */
  toXML() {
    /**
     * Recursive algorithm to convert a javascript object into xml.
     * @param {Object} object - A javascript object
     * @returns {xml} - The estimated output data
     */
    const createXML = (object) => {
      const objectKeys = Object.keys(object);
      const xmlElement = [];

      if (typeof object !== 'object') {
        return object;
      }

      objectKeys.forEach((childKey) => {
        xmlElement.push({ [childKey]: createXML(object[childKey]) });
      });

      return xmlElement;
    };

    const xmlString = xml({ root: createXML(this.estimate) });

    return xmlString;
  }
}

export default Estimator;
