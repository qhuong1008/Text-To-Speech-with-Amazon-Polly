var AWS = require("aws-sdk");
var $ = require("jquery");
AWS.config.region = "us-east-1"; // Region
AWS.config.credentials = new AWS.Credentials(
  "ASIAWLTLA44K3BABOWLH",
  "7UXKlv+ur8FNz17dDMgcU69OqzkVaa8BJLTlLX8p",
  "FwoGZXIvYXdzEKL//////////wEaDE5Q7S8I3dUppRUKYiLPAVYDff3xnpm5WGgulqsbJtOxHYt/fQj7w+eEQ4DFboa2k8gJgJjMGl+yGR58gnhu3Lmt1KSXP4AklR9pIgdNRNwKzTnMkhDX0DruQOwdor3TTXWnq/DyubmCzm/ADmEV3TUibt2wq3tkYyWY5BqmxqhIUff9AbBuCQS04oDHk8EmgC+LcK6ov6S19FhSYMBXUDXkaIdWozXaco40Xtl4k2cDIB9JA4sMiOwXM4z/0cMsfMv2bBUMDYOtRyUpsIpkYZk+9+/YGyyqkT748e1EuCit8OCcBjIt+yS+tuaDkqvhpmQh2Gx29K7KWTtXRK5GFK/ApjqL660QiJuw1DMQNHbD1kom"
  );

export default AWS;
