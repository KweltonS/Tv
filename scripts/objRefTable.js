const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.iframe,
		C3.Behaviors.Anchor,
		C3.Plugins.TextBox,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.TextBox.Cnds.OnTextChanged,
		C3.Plugins.iframe.Acts.NavigateURL,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.TextBox.Acts.SetCSSStyle,
		C3.Plugins.Button.Acts.SetCSSStyle
	];
};
self.C3_JsPropNameTable = [
	{Якорь: 0},
	{iframe: 0},
	{ВводТекста: 0},
	{Текст: 0},
	{Кнопка: 0}
];

self.InstanceType = {
	iframe: class extends self.IIframeInstance {},
	ВводТекста: class extends self.ITextInputInstance {},
	Текст: class extends self.ITextInstance {},
	Кнопка: class extends self.IButtonInstance {}
}