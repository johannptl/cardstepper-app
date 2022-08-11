import { Appearance } from "react-native";

var tWHITE = "#ffffff";
var tBLACK = "#000000";
var tSHADOW = "#000000";
var tBACKGROUND = "#efefef";

const colorScheme = Appearance.getColorScheme();

if (colorScheme === "dark") {
  tWHITE = "#fff";
  tBLACK = "#000";
  tSHADOW = "#000";
  tBACKGROUND = "#000";
}

export const WHITE = tWHITE;
export const BLACK = tBLACK;
export const SHADOW = tSHADOW;
export const BACKGROUND = tBACKGROUND;
