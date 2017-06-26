import computePercentage from '../support/computer-percentage';
import assert from 'assert';

describe(`computePercentage`, () => {

  it(`computePercentage should return 100% for empty stats`, () => {
    assert.equal(100, computePercentage({time: 38, score: 10, statistics: [{time: 40, score: 10},
 {time: 80, score: 9},
 {time: 44, score: 10},
 {time: 30, score: 8},
 {time: 50, score: 0}]}));
  });

  it(`computePercentage should return 50% for 1st place of 2`, () => {
    assert.equal(50, computePercentage({time: 100, score: 2, statistics: [{time: 100, score: 1}, {time: 100, score: 3}]}));
  });

  it(`computePercentage should return 33% for second place of 3`, () => {
    assert.equal(33, computePercentage({time: 100, score: 2, statistics: [{time: 80, score: 1}, {time: 10, score: 3}, {time: 10, score: 2}]}));
  });

  it(`computePercentage should return 0% for last place`, () => {
    assert.equal(0, computePercentage({time: 90, score: 1, statistics: [{time: 100, score: 2}]}));
  });

});
