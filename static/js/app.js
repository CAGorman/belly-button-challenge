
// // Build the metadata panel
// Function to build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let metadata = data.metadata;
    console.log(metadata);
    // Filter the metadata for the object with the desired sample number
    let valueData = metadata.filter(object => object.id == sample)[0];
    console.log(valueData);
    // Use d3 to select the panel with id of #sample-metadata
    let panel = d3.select("#sample-metadata");
    // Use .html("") to clear any existing metadata
    panel.html("");
    // Append new data to the panel
    for (const [key, value] of Object.entries(valueData)) {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    }
  });
}


//function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let sampleData = data.samples;

    // Filter the samples for the object with the desired sample number
    let valueArray = sampleData.filter(result => result.id == sample)[0];


    // Get the otu_ids, otu_labels, and sample_values
    let otuID= valueArray.otu_ids;
    let otuLabels = valueArray.otu_labels;
    let sampleValue = valueArray.sample_values;

    // Build a Bubble Chart
    let trace = [{
      x: otuID,
      y: sampleValue,
      mode: 'markers',
      marker: {
        size: sampleValue,
        color: otuID,
        colorscale: 'Earth',
        text: otuLabels
      }
    }];

    let layout = {
      title: 'Bacteria Cultures per Sample',
      xaxis: {title: 'OTU ID'},
      yaxis: {title: 'Number of Bacteria'}
};

    // Render the Bubble Chart   
    Plotly.newPlot('bubble', trace, layout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otuID.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

    // Don't forget to slice and reverse the input data appropriately
    let filteredSample = sampleValue.sort((a, b) => (b-a)).slice(0, 10)
    console.log(filteredSample)

    // Build a Bar Chart
    let barData = [{
        y: yticks,
        x: filteredSample,
        text: otuLabels,
        type: "bar",
        orientation: "h",
    }];

    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 },
      xaxis: {title: 'Number of Bacteria'}
  };

    // Render the Bar Chart
    Plotly.newPlot("bar", barData, barLayout);

  });
}


// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(data);
    // Get the names field
    let names = data.names
    console.log(names);


    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < names.length; i++) {
      dropdown.append('option').text(names[i]).property('value', names[i]);
    }
    // Get the first sample from the list
    var first = names[0]

    // Build charts and metadata panel with the first sample
    buildCharts(first);
    buildMetadata(first);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
