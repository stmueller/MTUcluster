
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"vars","title":"Variables to cluster","type":"Variables","permitted":["continuous"],"description":"The variables to use."},{"name":"k","title":"Number of groups (k)","default":2,"type":"Integer","min":1},{"name":"algo","title":"Algorithm","type":"List","options":["Hartigan-Wong","Lloyd","Forgy","MacQueen"],"default":"Hartigan-Wong"},{"name":"nstart","title":"Number of random starting configurations","type":"Integer","default":10},{"name":"stand","title":"Normalize Variables","type":"Bool","default":false}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "k-means clustering",
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
					type: DefaultControls.TextBox,
					name: "nstart",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
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
