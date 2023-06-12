import { useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
import {
  categoryState,
  themeState,
  dateState,
  menuNameState,
  menuPriceState,
  starRatingState,
  reviewState,
  tagListState,
  imageListState,
  inputValidState,
  imageDeleteState,
} from '../atom/postUploadRecoil';
import placeState from '../atom/mapRecoil';

function useResetInput() {
  const navigate = useNavigate();

  const resetCategory = useResetRecoilState(categoryState);
  const resetTheme = useResetRecoilState(themeState);
  const resetDate = useResetRecoilState(dateState);
  const resetMenuName = useResetRecoilState(menuNameState);
  const resetMenuPrice = useResetRecoilState(menuPriceState);
  const resetStarRating = useResetRecoilState(starRatingState);
  const resetPlace = useResetRecoilState(placeState);
  const resetReview = useResetRecoilState(reviewState);
  const resetTagList = useResetRecoilState(tagListState);
  const resetImageList = useResetRecoilState(imageListState);
  const resetInputValid = useResetRecoilState(inputValidState);
  const resetImageDeleteList = useResetRecoilState(imageDeleteState);

  const resetInput = (path, queryString) => {
    resetCategory();
    resetTheme();
    resetDate();
    resetMenuName();
    resetMenuPrice();
    resetStarRating();
    resetPlace();
    resetReview();
    resetTagList();
    resetImageList();
    resetInputValid();
    resetImageDeleteList();

    navigate(path === 'home' ? `/${path}?${queryString}` : `/${path}`);
  };

  return { resetInput };
}

export default useResetInput;
