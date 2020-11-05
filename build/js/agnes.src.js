
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"vars","title":"Variables to cluster","type":"Variables","description":"The variables to use."},{"name":"labels","title":"Labels for dendrogram","type":"Variable"},{"name":"distan","title":"The Distance measure to be used","type":"List","options":["euclidean","maximum","manhattan","canberra","binary","minkowski"],"default":"euclidean"},{"name":"algo","title":"Type of Linkage","type":"List","options":["single","complete","average","weighted","ward"],"default":"average"},{"name":"stand","title":"Normalize Variables","type":"Bool","default":false}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Hierarchical Clustering - Agglomerative",
    jus: "2.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Variables to cluster",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "vars",
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Labels for dendrogram",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "labels",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "distan"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "algo"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.CheckBox,
					name: "stand"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
