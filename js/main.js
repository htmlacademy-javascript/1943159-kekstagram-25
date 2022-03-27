const getRandomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
getRandomInteger(0, 3);

const getLengthComparison = (lineLength, maxLineLength) => lineLength <= maxLineLength;
getLengthComparison(25, 140);

const DESCRIPTIONS = [
  'Концептуальная фотография',
  'Туристическая фотография',
  'Пейзажная фотография',
  'Рекламная фотография',
  'Свадебная фотография',
  'HDR-фотография',
  'Аэрофотография',
  'Уличная фотография',
  'Спортивная фотография',
  'Портретная фотография',
  'Предметная фотография',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Елена',
  'Роман',
  'Виктория',
  'Дмитрий',
  'Ариша',
];

const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const COMMENTS = [
  {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },

  {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
];

const createPhotoDescription = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: COMMENTS[0],
});

const similarWizards = Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);

similarWizards();
