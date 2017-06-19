import assert from 'assert';

const isCorrectAnswer = (answer) => {
  const newAnswewr = answer.id
  const trueAnswer = trueSong.id

  if(newAnswewr === trueAnswer) {
    return true;
  }
  else {
    return false;
  }
}

let object = {id: 1};
let trueSong = {id:2};

describe(`Проверка правильного ответа`, function(){
	it(`Функция isCorrectAnswer возвращает boolean `, function(){
		assert(typeof(isCorrectAnswer(object)) === `boolean`);
	})
})