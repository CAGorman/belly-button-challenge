# belly-button-challenge

## Overview
  In this assignment, an interactive dashboard is created to explore the Belly Button Biodiversity, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. In this project, both D3 and Plotly were utilized.
  
The following steps were completed:
1. Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
3. Create a bubble chart that displays each sample.
4. Display the sample's metadata, i.e., an individual's demographic information.

## Components
1. Sample ID dropdown menu
2. Corresponding demographic information panel
3. Bubble Chart:
    x values: otu_ids
    y values: sample_values
    marker size: sample_values
    marker colors: otu_ids
    text values: otu_labels
4. Bar Graph:
    values: sample_values
    labels: otu_ids
    hovertext: otu_labels

## Application Function
  Begin by selecting a sample ID from the dropdown menu. Successful execution will result in plots and demographic info changing each time a new sample ID is selected. Hover over the charts to see more information about the bacteria in that sample. Click on the link to explore the free static page hosting service that was created:
https://cagorman.github.io/belly-button-challenge/

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable:
( https://robdunnlab.com/projects/belly-button-biodiversity/ )
  
