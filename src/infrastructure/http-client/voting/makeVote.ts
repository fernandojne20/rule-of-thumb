import axios, { AxiosError } from 'axios';
import { MakeVoteDTO } from '../../../domains/voting/entities';
import { StatusResponse } from '../entities';

export type Accessor = (makeVote: MakeVoteDTO) => Promise<number>;

export const makeVoteAccessor: () => Accessor = () => async (makeVote) => {

  const url = ``;
  const { status } = await axios.post(url, makeVote);

  return status;
}

type MakeVote = (accessor: Accessor) => (makeVote: MakeVoteDTO) => Promise<StatusResponse>;

export const makeVote: MakeVote = (accessor) => async (makeVote) => {

  try {
    const response = await accessor(makeVote)
    return handleRequestStatus(response);
  } catch (error) {
    return handleRequestError(error);
  }
}

const handleRequestError = (error: AxiosError) : StatusResponse => {

  if(error.response) {
    return {success: false, message: error.response.data.message, status: error.response.status};
  } else {
    return {success: false, message: 'Network Error', status: null}
  }

}

const handleRequestStatus: (status: number) => StatusResponse = (status) => {
  const ACCEPTED_RESONSE: number = 202;
  return {success: true, status, result: status === ACCEPTED_RESONSE};
}