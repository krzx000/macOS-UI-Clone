import { WALLPAPERS } from "./assets";

/**
 * Retrieves the background image based on the provided theme.
 *
 * @param theme - The theme for which to get the background image. Can be either "light" or "dark".
 * @returns The corresponding background image for the specified theme.
 */
export const getBackgroundImage = (theme: "light" | "dark") => {
  return theme === "light" ? WALLPAPERS.Sequoia.Light : WALLPAPERS.Sequoia.Dark;
};

/**
 * Retrieves the style for a button based on its state and enabled status.
 *
 * @param state - The state of the button. Can be either "primary", "secondary", or "destructive".
 * @param enabled - A boolean indicating whether the button is enabled.
 * @returns The corresponding style for the button based on its state and enabled status.
 */
export const getButtonStyle = (state: "primary" | "secondary" | "destructive", enabled: boolean) => {
  if (state === "primary" && enabled)
    return "BUTTON-PRIMARY-ENABLED bg-macos-blue bg-primary-enabled-gradient text-white hover:bg-primary-enabled-gradient-hovered";
  if (state === "primary" && !enabled)
    return "BUTTON-PRIMARY-DISABLED bg-white/80  text-black/25 cursor-not-allowed";
  if (state === "secondary" && enabled)
    return "BUTTON-SECONDARY-ENABLED bg-white hover:bg-white/90 text-black/85";
  if (state === "secondary" && !enabled)
    return "BUTTON-SECONDARY-DISABLED bg-white/50 text-black/25 cursor-not-allowed";
  if (state === "destructive") return "BUTTON-DESTRUCTIVE bg-white hover:bg-white/90 text-[#FF3B30]";
};
