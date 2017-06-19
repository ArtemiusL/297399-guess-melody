import convertTime from '../support/convert-time';
import assert from 'assert';

describe(`convertTime`, () => {

  it(`should return 00:00`, () => {
    assert.deepEqual({min: `00`, sec: `00`}, convertTime(0));
  });
  it(`should return 50:00`, () => {
    assert.deepEqual({min: `50`, sec: `00`}, convertTime(3000));
  });
});
