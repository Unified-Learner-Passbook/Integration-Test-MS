# Integration Test Microservice

This repository hold integration tests for all the transactions that take place in the [Unified Learner's Passbook](http://github.com/Unified-Learners-Passbook) project.

## Testing Flow

- generate did
- resolve did
- create a cred schema
- resolve a cred schema
- create a credential
- generate a QR Code and template
- parse QR Code and parse template (extract credential)
- verify the credential