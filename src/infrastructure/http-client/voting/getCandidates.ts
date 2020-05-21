import axios from 'axios';
import { Candidate } from '../../../domains/voting/entities';

export type Accessor = () => Promise<Candidate[]>;

export const getCandidatesAccesor: () => Accessor = () => async () => {

  const url = `${process.env.REACT_APP_BACKEND_URL}/candidates`;
  const { data } = await axios.get(url);
  return data;

}

type GetCandidates = (accessor: Accessor) => () => Promise<Candidate[]>;

export const getCandidates: GetCandidates = (accessor) => async () => {

  const response: Candidate[] = await accessor();
  return response;
}

export default getCandidates;