/**
 * @author leon
 */

import MockGenerator from '../utils/mock-generator';
import Settings from '../settings';

let DataApi = {

  getDialectList: function(index, pageSize) {
    if(Settings.mockData()) {
      return MockGenerator.generateDialectList(index, pageSize);
    }
  }
};

export default DataApi;