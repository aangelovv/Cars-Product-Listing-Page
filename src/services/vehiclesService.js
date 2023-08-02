import Parse from "parse/dist/parse.min.js";

const PARSE_APPLICATION_ID = "zGhlCvGoaMHN2tWoQt3fIN4Ta1tYPaaZObwaAAqR";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "4JOaaym3W4WxVdIiZbcw0tIBwucnC5kcM2lgAbHo";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export async function getAllWithCount(vehicleType, skipCount) {
  // Create your Parse Query using the Person Class you've created
  const query = new Parse.Query(vehicleType);

  // Skip the initial number of vehicles based on skipCount
  query.skip(skipCount);

  // Fetch 5 vehicles per query
  query.limit(5);

  // Run the query to get the vehicles
  const data = await query.find();

  // Get the total count of vehicles available in the database
  const countQuery = new Parse.Query(vehicleType);
  const count = await countQuery.count();

  // Add id to the result
  const result = data.map((x) => ({ ...x.attributes, id: x.id }));

  return { data: result, count };
}

export async function getAllColors(vehicleType) {
  const query = new Parse.Query(vehicleType);
  query.select("color");
  query.limit(1000); // Set a higher limit to ensure all colors are retrieved
  const projects = await query.find();

  // Get unique colors from the projects
  const uniqueColors = [
    ...new Set(projects.map((project) => project.get("color"))),
  ];

  return uniqueColors;
}

export async function getLatest(vehicleType, listings) {
  const query = new Parse.Query(vehicleType);
  query.limit(listings + 5);
  // run the query
  const Project = await query.find();

  //add id to the result
  const result = Project.map((x) => ({ ...x.attributes, id: x.id }));

  return result;
}
