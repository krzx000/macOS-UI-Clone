import { WALLPAPERS } from "./assets";

export const getBackgroundImage = (theme: "light" | "dark") => {
  return theme === "light" ? WALLPAPERS.Sequoia.Light : WALLPAPERS.Sequoia.Dark;
};
