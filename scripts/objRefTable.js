const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Button.Acts.SetText,
		C3.Plugins.Button.Acts.SetInstanceVar,
		C3.Plugins.Text.Cnds.IsEffectEnabled,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Button.Cnds.CompareInstanceVar,
		C3.Plugins.Button.Cnds.IsVisible,
		C3.Plugins.System.Acts.SetLayerBackground,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.AddVar
	];
};
self.C3_JsPropNameTable = [
	{NumberQS: 0},
	{TextVoprosa: 0},
	{True: 0},
	{Otvet1: 0},
	{Otvet2: 0},
	{Otvet3: 0},
	{TextGameUI: 0},
	{NumberVopros: 0},
	{HP: 0}
];

self.InstanceType = {
	NumberQS: class extends self.ITextInstance {},
	TextVoprosa: class extends self.ITextInstance {},
	Otvet1: class extends self.IButtonInstance {},
	Otvet2: class extends self.IButtonInstance {},
	Otvet3: class extends self.IButtonInstance {},
	TextGameUI: class extends self.ITextInstance {}
}