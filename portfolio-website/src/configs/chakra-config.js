import { createSystem, defineConfig, defaultConfig, defineTextStyles, defineTokens } from "@chakra-ui/react";
var textStyles = defineTextStyles({
    h1: {
        base: {
            description: "h1",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "61px",
                lineHeight: "73.2px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "h1Bold",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "61px",
                lineHeight: "73px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    h2: {
        base: {
            description: "h2",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "49px",
                lineHeight: "55.8px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "h2",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "49px",
                lineHeight: "55.8px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    h3: {
        base: {
            description: "h3",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "39px",
                lineHeight: "46.8px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "h3Bold",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "39px",
                lineHeight: "46.8px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    h4: {
        base: {
            description: "h4",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "31px",
                lineHeight: "37.2px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "h4Bold",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "31px",
                lineHeight: "37.2px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    h5: {
        base: {
            description: "h5",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "25px",
                lineHeight: "42px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "h5Bold",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "25px",
                lineHeight: "42px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        light: {
            description: "h5Light",
            value: {
                fontFamily: "Outfit",
                fontWeight: "light",
                fontSize: "25px",
                lineHeight: "42px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    h6: {
        base: {
            description: "h6",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "h6Bold",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    bodyLarge: {
        base: {
            description: "bodyLarge",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "bodyLargeBold",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    bodyRegular: {
        base: {
            description: "bodyRegular",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "bodyRegularBold",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    bodySmall: {
        base: {
            description: "bodySmall",
            value: {
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
        bold: {
            description: "bodySmallBold",
            value: {
                fontFamily: "Outfit",
                fontWeight: "medium",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0",
                textDecoration: "None",
                textTransform: "None",
            },
        },
    },
    caption: {
        description: "caption",
        value: {
            fontFamily: "Outfit",
            fontWeight: "medium",
            fontSize: "11px",
            lineHeight: "16.5px",
            letterSpacing: "0",
            textDecoration: "None",
            textTransform: "None",
        },
    },
});
var colors = {
    greyscale: {
        50: { value: "#F4F3EF" },
        100: { value: "#E9E5DB" },
        200: { value: "#CBC9C0" },
        300: { value: "#B0AEA6" },
        400: { value: "#95938C" },
        500: { value: "#787771" },
        600: { value: "#5F5E5B" },
        700: { value: "#474743" },
        800: { value: "#31302E" },
        900: { value: "#1C1C1A" },
        950: { value: "#111110" },
        white: { value: "#FFFFFF" },
        black: { value: "#000000" },
        surface: {
            "subtle": { "value": "{colors.greyscale.50}" },
            "default": { "value": "{colors.greyscale.100}" },
            "darker": { "value": "{colors.greyscale.200}" },
            "disabled": { "value": "{colors.greyscale.300}" }
        },
        border: {
            "default": { "value": "{colors.greyscale.500}" },
            "disabled": { "value": "{colors.greyscale.200}" },
            "darker": { "value": "{colors.greyscale.600}" }
        },
        text: {
            "title": { "value": "{colors.greyscale.900}" },
            "body": { "value": "{colors.greyscale.600}" },
            "subtitle": { "value": "{colors.greyscale.800}" },
            "caption": { "value": "{colors.greyscale.500}" },
            "negative": { "value": "{colors.greyscale.white}" },
            "disabled": { "value": "{colors.greyscale.400}" }
        }
    },
};
var spacing = {
    100: { value: "2px" },
    200: { value: "4px" },
    300: { value: "6px" },
    400: { value: "8px" },
    450: { value: "12px" },
    500: { value: "16px" },
    600: { value: "24px" },
    700: { value: "32px" },
    800: { value: "48px" },
    900: { value: "64px" },
    950: { value: "100px" },
    "2xs": { value: "{spacing.100}" },
    "xs": { value: "{spacing.200}" },
    "s": { value: "{spacing.300}" },
    "md": { value: "{spacing.400}" },
    "l": { value: "{spacing.500}" },
    "xl": { value: "{spacing.600}" },
    "2xl": { value: "{spacing.700}" },
    "3xl": { value: "{spacing.800}" },
    "4xl": { value: "{spacing.900}" },
    "5xl": { value: "{spacing.950}" }
};
var radii = {
    "s": { value: "4px" },
    "md": { value: "8px" },
    "l": { value: "16px" }
};
var shadows = {
    "s": { value: "0px 6px 16px -4px rgba(0,0,0,0.2)" }
};
var tokens = defineTokens({
    colors: colors,
    spacing: spacing,
    radii: radii,
    shadows: shadows
});
var config = defineConfig({
    theme: {
        textStyles: textStyles,
        tokens: tokens
    },
});
var system = createSystem(defaultConfig, config);
export default system;
