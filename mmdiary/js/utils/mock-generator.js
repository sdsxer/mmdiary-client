/**
 * @author leon
 */
import { MockDialectList, MockDynamicsList } from './mock-data';
import uuid from 'react-native-uuid';

let MockGenerator = {

  generateDynamicsList: function() {
    var response = {
      code: 0,
      message: 'success',
      data: MockDynamicsList
    }
    return new Promise(function(resolve, reject) {
      setTimeout(() => {resolve(response)}, 1000);
    });
  },

  generateNewsList: function() {

  },

  generateDialectList: function(index_, pageSize_) {
    var pageable = {
      index: index_,
      pageSize: pageSize_,
      total: MockDialectList.length,
      data: [],
      hasMore: true
    };

    if(pageable.index < pageable.total) {
      var left = pageable.total - pageable.index;
      if(left > pageSize_) {
        pageable.pageSize = pageSize_;
        pageable.hasMore = true;
      }
      else {
        pageable.pageSize = left;
        pageable.hasMore = false;
      }
      for(var i = 0; i < pageable.pageSize; i++) {
        pageable.data[i] = MockDialectList[index_ + i];
        pageable.data[i].id = uuid.v4();
      }
    }
    else {
      pageable.hasMore = false;
    }

    var response = {
      code: 0,
      message: "success",
      data: pageable,
    };

    return new Promise(function(resolve, reject) {
      setTimeout(() => {resolve(response)}, 1000);
    });
  }
}

export default MockGenerator;