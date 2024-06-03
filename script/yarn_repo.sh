DOMAIN=euclidea
OWNER=347233190161

CODEARTIFACT_YARN_TOKEN=$(aws codeartifact get-authorization-token --domain $DOMAIN --domain-owner $OWNER --query authorizationToken --output text)
export CODEARTIFACT_YARN_TOKEN
