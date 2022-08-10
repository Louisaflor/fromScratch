export default function parseContent(formValues) {
  console.log("got in here");
  var namess = formValues.name
    .toLowerCase()
    .split(" ")
    .map((s) => {
      return s.charAt(0).toUpperCase() + s.slice(1);
    });

  var updateIngredients = formValues.ingredients.split("\n").map((e) => {
    return e.trim();
  });

  var updateSteps = formValues.steps.split("\n").map((e) => {
    return e.trim();
  });

  // console.log("CHECK FIRST", updateSteps);
  //console.log("GIVE ME ANSWER IN PARSE: ", namess)
  const result = {
    name: namess.join(" "),
    ingredients: updateIngredients,
    steps: updateSteps,
    description: formValues.description, //added this just in case
  };

  // TODO: Implement the parser module

  return result;
}
