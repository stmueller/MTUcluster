
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"vars","title":"Variables to scale","type":"Variables","permitted":["continuous"],"description":"The variables to use."},{"name":"k","title":"No. of Dimensions","default":2,"type":"Integer","min":1},{"name":"label","type":"Variable","title":"Point labels"},{"name":"color","type":"Variable","title":"Variable to map to color"},{"name":"size","type":"Variable","title":"Variable to map to point size"},{"name":"dist","title":"Distance Measure","type":"List","options":["euclidean","manhattan"],"default":"euclidean"},{"name":"stand","title":"Normalize Variables","type":"Bool","default":false}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "MDS Classic Scaling (cmdscale)",
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
					label: "Variables to scale",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "vars",
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
					type: DefaultControls.TextBox,
					name: "k",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				}
			]
		},
		{
			type: DefaultControls.VariableSupplier,
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Point labels",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "label",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Variable to map to color",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "color",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Variable to map to point size",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "size",
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
					name: "dist"
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
