const axios = require('axios');

describe('get a credential schema', () => {
  it('get a credential schema by did', async () => {
    await axios.get('http://localhost:3000/schema', {
      params: {
        id: 'did:example:sbfeb1f712ebc6f1c276e12ec21'
      }
    }).then(res => {
      expect(res.status).toBe(200);
      expect(res.data).toStrictEqual({
        "id": "did:example:sbfeb1f712ebc6f1c276e12ec21",
        "type": "https://w3c-ccg.github.io/vc-json-schemas/",
        "version": "1.0",
        "name": "Proof of Academic Evaluation Credential",
        "author": "did:example:c276e12ec21ebfeb1f712ebc6f1",
        "authored": "2022-12-19T09:22:23.064Z",
        "schema": {
          "$id": "Proof-of-Academic-Evaluation-Credential-1.0",
          "type": "object",
          "$schema": "https://json-schema.org/draft/2019-09/schema",
          "required": [
            "grade",
            "programme",
            "certifyingInstitute",
            "evaluatingInstitute"
          ],
          "properties": {
            "grade": {
              "type": "string",
              "description": "Grade (%age, GPA, etc.) secured by the holder."
            },
            "programme": {
              "type": "string",
              "description": "Name of the programme pursed by the holder."
            },
            "certifyingInstitute": {
              "type": "string",
              "description": "Name of the instute which certified the said grade in the said skill"
            },
            "evaluatingInstitute": {
              "type": "string",
              "description": "Name of the institute which ran the programme and evaluated the holder."
            }
          },
          "description": "The holder has secured the <PERCENTAGE/GRADE> in <PROGRAMME> from <ABC_Institute>.",
          "additionalProperties": false
        },
        "proof": {
          "type": "Ed25519Signature2020",
          "created": "2022-12-19T09:22:23Z",
          "proofValue": "z5iBktnPCr3hPqN7FViY948ds5yMhrL1qujMmVD1GmzsbtXw5RUCdu4GKrQZw8U9c4G78SUNmPLTS87tz6kGAHgXB",
          "proofPurpose": "assertionMethod",
          "verificationMethod": "did:key:z6MkqYDbJ5yVgg5UvfRt5DAsk5dvPTgo6H9CZcenziWdHTqN#z6MkqYDbJ5yVgg5UvfRt5DAsk5dvPTgo6H9CZcenziWdHTqN"
        },
        "createdAt": "2023-01-03T10:03:13.331Z",
        "updatedAt": "2023-01-03T10:03:13.331Z",
        "deletedAt": null,
        "tags": []
      })
    })
  })
});