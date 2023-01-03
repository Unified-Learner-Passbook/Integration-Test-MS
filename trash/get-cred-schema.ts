// import axios from 'axios';
const axios = require('axios');

describe('get a credential schema', () => {
  it('GET proof_of_alumni schema from /schema/proof_of_alumni', async () => {
    const resp = await axios.get(`http://localhost:3000/schema/proof_of_alumni`).then(res => {
      expect(res.status).toBe(200)
      console.log('res.data', res.data);
      expect(res.data).toStrictEqual({
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1",
          "https://playground.chapi.io/examples/alumni/alumni-v1.json",
          "https://w3id.org/security/suites/ed25519-2020/v1"
        ],
        "type": "https://w3c-ccg.github.io/vc-json-schemas/",
        "version": "1.0",
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "name": "Alumni Credential",
        "author": "did:example:c276e12ec21ebfeb1f712ebc6f1",
        "authored": "2022-12-19T09:22:23.064Z",
        "schema": {
          "$id": "Alumni-Credential-1.0",
          "$schema": "https://json-schema.org/draft/2019-09/schema",
          "description": "The holder is an alumni of Example University.",
          "type": "object",
          "properties": {
            "alumniOf": {
              "type": "object",
              "properties": {
                "identifier": {
                  "type": "string",
                  "format": "did",
                  "description": "The did for the issuing university (issuer)."
                },
                "name": {
                  "type": "string",
                  "description": "Name of the issuing university (issuer)."
                }
              },
              "required": [
                "identifier",
                "name"
              ]
            }
          },
          "required": [
            "alumniOf"
          ],
          "additionalProperties": false
        },
        "proof": {
          "type": "Ed25519Signature2020",
          "created": "2022-12-19T09:22:23Z",
          "verificationMethod": "did:key:z6MkqYDbJ5yVgg5UvfRt5DAsk5dvPTgo6H9CZcenziWdHTqN#z6MkqYDbJ5yVgg5UvfRt5DAsk5dvPTgo6H9CZcenziWdHTqN",
          "proofPurpose": "assertionMethod",
          "proofValue": "z5iBktnPCr3hPqN7FViY948ds5yMhrL1qujMmVD1GmzsbtXw5RUCdu4GKrQZw8U9c4G78SUNmPLTS87tz6kGAHgXB"
        }
      })
    })
  });
});