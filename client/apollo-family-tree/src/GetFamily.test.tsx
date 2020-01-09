import { MockedProvider } from '@apollo/react-testing';
import { gql } from 'apollo-boost';

const GET_FAMILY_QUERY = gql`
 query ($first: Int, $cursor: String, $type: String){
   allPeople(first: $first, cursor: $cursor, type: $type) {
      edges {
        node {
          name
        }
      }
   }
 }`


const mocks = [
    {
        request: {
            query: GET_FAMILY_QUERY,
            variables: {
                first: 5,
                cursor: "random cursor is fine for now",
                type: "Royalties"
            }
        },
        result: {
            data: {
                allPeople: {
                    edges: [
                        {
                            node: {
                                name: "Queen Elizabeth"
                            }
                        },                        {
                            node: {
                                name: "King Elizabeth"
                            }
                        },                        {
                            node: {
                                name: "Prince Harry"
                            }
                        },                        {
                            node: {
                                name: "Princess Joseph"
                            }
                        },
                    ]
                }
            }
        }
    }
]

it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetFamily />
    </MockedProvider>
  );
});

