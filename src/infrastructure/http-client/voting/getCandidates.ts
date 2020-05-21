import axios from 'axios';
import { Candidate } from '../../../domains/voting/entities';

export type Accessor = () => Promise<Candidate[]>;

export const getCandidatesAccesor: () => Accessor = () => async () => {

  const url = `https://jsonplaceholder.typicode.com/users`;
  const { data } = await axios.get(url);
  return data;

}

type GetCandidates = (accessor: Accessor) => () => Promise<Candidate[]>;

export const getCandidates: GetCandidates = (accessor) => async () => {

  const response: Candidate[] = await accessor();
  return response;
}

export default getCandidates;