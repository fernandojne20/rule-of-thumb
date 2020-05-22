import { getCandidates} from './getCandidates';
import { successGetCandidates, CANDIDATES } from './fake';

describe("GetCandidates", () => {

  it("Should get Candidates", () => {
    return expect(getCandidates(successGetCandidates)())
    .resolves.toStrictEqual(CANDIDATES);
  });
});