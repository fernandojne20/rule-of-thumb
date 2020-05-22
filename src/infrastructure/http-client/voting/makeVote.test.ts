import { makeVote } from './makeVote';
import { successMakeVote, failingMakeVote} from './fake'
import { VoteType } from '../../../domains/voting/entities';

describe("MakeVote", () => {
  it("Vote sent successfully", () => {

    return expect(makeVote(successMakeVote)({id: 1, voteType: VoteType.UP}))
    .resolves.toStrictEqual({success: true, status: 202, result: true});
  })
  it("Vote sent failed", () => {

    return expect(makeVote(failingMakeVote)({id: 1, voteType: VoteType.UP}))
    .resolves.toStrictEqual({success: true, status: 404, result: false})
  })
})