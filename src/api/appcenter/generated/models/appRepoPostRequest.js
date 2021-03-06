/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AppRepoPostRequest.
 */
class AppRepoPostRequest {
  /**
   * Create a AppRepoPostRequest.
   * @member {string} repoUrl The absolute URL of the repository
   * @member {string} [repoProvider] The provider of the repository. Possible
   * values include: 'github', 'bitbucket', 'vsts'
   * @member {string} userId The unique id (UUID) of the user who configured
   * the repository
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppRepoPostRequest
   *
   * @returns {object} metadata of AppRepoPostRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppRepoPostRequest',
      type: {
        name: 'Composite',
        className: 'AppRepoPostRequest',
        modelProperties: {
          repoUrl: {
            required: true,
            serializedName: 'repo_url',
            type: {
              name: 'String'
            }
          },
          repoProvider: {
            required: false,
            serializedName: 'repo_provider',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: true,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppRepoPostRequest;
