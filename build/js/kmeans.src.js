
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"vars","title":"Variables to cluster","type":"Variables","permitted":["continuous"],"description":"The variables to use."},{"name":"k","title":"Number of groups (k)","default":2,"type":"Integer","min":1},{"name":"algo","title":"Algorithm","type":"List","options":["Hartigan-Wong","Lloyd","Forgy","MacQueen"],"default":"Hartigan-Wong"},{"name":"nstart","title":"Number of random starting configurations","type":"Integer","default":10},{"name":"stand","title":"Normalize Variables","type":"Bool","default":false}];

const view = View.extend({

    events: [

	]

});

view.layout = ui.extend({

    label: "kmeans",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.VariableTargetListBox,
					name: "vars",
					label: "Variables to cluster",
					showColumnHeaders: false,
					fullRowSelect: true,
					columns: [
						{
							type: DefaultControls.ListItem.VariableLabel,
							name: "column1",
							label: "",
							stretchFactor: 1
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
					name: "k",
					type: DefaultControls.TextBox,
					label: "Number of groups (k)",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				},
				{
					name: "algo",
					type: DefaultControls.ComboBox,
					label: "Algorithm",
					options: [{"label":"Hartigan-Wong","value":"Hartigan-Wong"},{"label":"Lloyd","value":"Lloyd"},{"label":"Forgy","value":"Forgy"},{"label":"MacQueen","value":"MacQueen"}]
				},
				{
					name: "nstart",
					type: DefaultControls.TextBox,
					label: "Number of random starting configurations",
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
					name: "stand",
					type: DefaultControls.CheckBox,
					label: "Standardize Variables"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
