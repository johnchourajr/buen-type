import { CustomTypeDefinitions } from "../types.ts";
type AddUtilities = {
    (utilities: Record<string, any>, options?: any): void;
};
/**
 * A module that converts an object of headlines and text definitions into Tailwind CSS utilities.
 *
 * @todo Explore making minScreenSize and maxScreenSize configurable in createRemClamp
 * @todo Make addUtilities a named parameter, importing @tailwindcss/types
 * @todo Make return type more specific to what tailwind plugins expect
 */
export declare function buenTypeTailwind({ addUtilities }: {
    addUtilities: AddUtilities;
}, options?: CustomTypeDefinitions): void;
export {};
