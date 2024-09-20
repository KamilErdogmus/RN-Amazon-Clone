import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

export const getRating = rating => {
  const renderStar = (type, key) => (
    <FontAwesome name={type} color="#ffa41c" size={10} key={key} />
  );

  const ratingStar = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      ratingStar.push(renderStar('star', i));
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      ratingStar.push(renderStar('star-half-empty', i));
    } else {
      ratingStar.push(renderStar('star-o', i));
    }
  }

  return ratingStar;
};
