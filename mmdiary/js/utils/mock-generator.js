/**
 * @author leon
 */
import { 
  MockDialectList, 
  MockDynamicsList,
  MockFoodList 
} from './mock-data';
import uuid from 'react-native-uuid';

let MockGenerator = {

  generateErrorResponse: function() {
    var response = {
      code: -1,
      message: 'unknown',
    }
    return new Promise(function(resolve, reject) {
      setTimeout(() => {reject(response)}, 1000);
    })
  },

  generateLoginResponse: function() {
    var response = {
      code: 0,
      message: 'success',
      data: {
        userId: '1000',
        username: 'sdsxleon',
        mobile: '18810789600',
        avatarUrl: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=8c78c3ed855494ee932f074b4c9c8b9b/eac4b74543a98226b05a69758382b9014b90ebcd.jpg',
        nickname: '李昂',
        sex: 1,
      }
    }
    return new Promise(function(resolve, reject) {
      setTimeout(() => {resolve(response)}, 1000);
    })
  },

  generateFoodListResponse(index_, pageSize_) {
    var pageable = {
      index: index_,
      pageSize: pageSize_,
      total: MockFoodList.length,
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
        pageable.data[i] = MockFoodList[index_ + i];
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
  },

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

  generateNewsListResponse: function() {

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