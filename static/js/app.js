

// Build the metadata panel
function buildmetaData(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(sample)
    // get the metadata field
    let metaData = data.metadata;
    console.log(metaData);

    // Filter the metadata for the object with the desired sample number
    let valueData = metaData.filter(sample => sample.id == metaData)[0];

    console.log(valueData);

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // // // Inside a loop, you will need to use d3 to append new
    // for (let i = 0; i < valueData.length; i++) {
    //   panel.append('option').text(valueData[i]).property('value', valueData[i]);
    // }
    for (value in valueData) { panel.append("h5").text( `${result[value]}`)}

        // // tags for each key-value in the filtered metadata.
        Object.entries(valueData).forEach(([key, val]) => {
          panel.append("h5").text(`${key}: ${val}`);
        });
      });
    }




// function to build both charts
// function buildCharts(sample) {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the samples field
//     let sampleData = data.samples;

//     // Filter the samples for the object with the desired sample number
//     let valueArray = sampleData.filter(result => result.id == sample);

//     let valueNum = valueArray[0]

//     // Get the otu_ids, otu_labels, and sample_values
//     let otuID= valueArray.otu_ids
//     let otuLabels = valueArray.otu_labels
//     let sampleValue = valueArray.sample_values

//     // Build a Bubble Chart
//     let trace = [{
//       title:'Bubble',
//       x: otuID,
//       y: otuLabels,
//     }]

//     let layout = {}

//     // Render the Bubble Chart     (((((OBJECT MUST B IN LUST)))))
//     Plotly.newplot('bubble', [trace], layout)

//     // For the Bar Chart, map the otu_ids to a list of strings for your yticks


//     // Build a Bar Chart
//     // Don't forget to slice and reverse the input data appropriately


//     // Render the Bar Chart
//   });
// }


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
    // buildCharts(first);
    buildMetadata(first);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  // buildCharts(newSample);
  buildmetaData(newSample);
}

// Initialize the dashboard
init();
