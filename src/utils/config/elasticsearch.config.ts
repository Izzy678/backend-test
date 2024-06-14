
import { Client } from "@elastic/elasticsearch";


const elasticsearchClient = new Client({
  node: 'https://f07b3f08dec44372a0b02ef6ed7340c9.europe-west2.gcp.elastic-cloud.com:443',
  auth: {
      apiKey: 'QlRmOUVwQUJpWGJ0bjF6UkN4VUk6Q2UwcTN4U2ZScHFra2o2Vm1oSGswdw=='
  }
});

export { elasticsearchClient };
