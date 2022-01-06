const xl = require("excel4node");
const swagger = require("./swagger");

const wb = new xl.Workbook();
const ws = wb.addWorksheet("Swagger");

const lines = [];
const endpoints = Object.keys(swagger);

endpoints.forEach(key => {
  const endpoint = swagger[key];
  const methods = Object.keys(endpoint);
  methods.forEach(method => {
    let tag = "default";
    if (endpoint[method].tags) {
      tag = endpoint[method].tags[0];
    }

    lines.push([tag, key, method]);
  });
});

const headingColumnNames = [
  "Module",
  "Endpoint",
  "Method",
];

headingColumnNames.forEach((data, index) => {
  ws.cell(1, index + 1).string(data);
});

let rowIndex = 2;
lines.forEach((record) => {
  let columnIndex = 1;
  record.forEach(data => {
    ws.cell(rowIndex, columnIndex++).string(data);
  });
  rowIndex++;
});

wb.write("swagger.xlsx");