import { Accessor } from '../makeVote';

export const successMakeVote: Accessor = async (makeVote) => {
  const SUCCESS_RESPONSE = 202;
  return Promise.resolve(SUCCESS_RESPONSE);
}

export const failingMakeVote: Accessor = async (makeVote) => {
  const ERROR_RESPONSE = 404;
  return Promise.resolve(ERROR_RESPONSE);
}