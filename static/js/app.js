let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);


// Display the default plot
function buildcharts(subjectid) {
  samples = data.samples
  filterid = samples.filter(sample => sample.id == subjectid);
  result = filterid[0]
  otu_ids = result.otu_ids.slice(0, 10).reverse();
  otu_labels = result.otu_labels.slice(0, 10).reverse();
  sample_values = result.sample_values.slice(0, 10).reverse();

  let bardata = [{
    y: otu_ids.map(otu_id => `OTU ${otu_id}`),
    x: sample_values,
    text: otu_labels,
    type: "bar",
    orientation: "h"
  }];

  let barlayout = {
    hei: 600,
    width: 800
  };

  Plotly.newPlot("bar", bardata, barlayout);
}
buildcharts(940);

});