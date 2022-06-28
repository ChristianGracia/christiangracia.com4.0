import { LanguageColors } from "../enums/colors";

/**
 * Adds color to string based on coding language
 * @param { string } language - conding language to add conditional color
 */
export const formatRepoLanguage = (language: string) => {
  const color = LanguageColors[language];

  return color ?? "";
};
