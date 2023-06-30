import algoliasearch from "algoliasearch";

const client = algoliasearch("MZWCGOFY5I", process.env.ALGOLIA_KEY);
const index = client.initIndex("Products");

export { index };
