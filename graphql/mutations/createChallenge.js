import { gql } from "@apollo/client";

const CREATE_CHALLENGE = gql`
  mutation createChallenge($create_challenge_input: ChallengeInput!) {
    createChallenge(input: $create_challenge_input) {
      title
      short_description
      type
      domaine
      technologies
      difficulty
      brief
      getting_started
      ideas
      taken
      done
    }
  }
`;

export default CREATE_CHALLENGE;
