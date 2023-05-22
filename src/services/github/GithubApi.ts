import ApolloClient, { gql } from 'apollo-boost'

export class GithubApi {
  private githubApiUrl = 'https://api.github.com/graphql';
  private client: ApolloClient<any>;

  constructor (readonly githubToken: string) {
    const authorization = `Bearer ${githubToken}`;
    this.client = new ApolloClient({
      uri: this.githubApiUrl,
      headers: {
        authorization,
      },
    });
    this.verifyToken().catch((error: unknown) => {
      throw Error('Github API Token not valid. Please generate one from your Github profile.' + (error instanceof Error ? 'Message: ' + error.message : ''));
    });
  }

  async verifyToken (): Promise<any> {
    const query = gql`
      query {
        viewer {
          login
        }
      }
    `;

    return this.client.query({
      query,
    }).catch(error => {
      throw Error(error.message);
    });
  }
}


