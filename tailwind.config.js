const defaultSans = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];

module.exports = {
  purge: {
    mode: "all",
    content: [
      "./components/**/*.{js,ts,jsx,tsx,css}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: { deep: [/blur$/] },
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'theme-orange-light-100': '#ffefed',
        'theme-orange-light-200': '#ffe0da',
        'theme-orange-light-300': '#ffd0c8',
        'theme-orange-light-400': '#ffc1b5',
        'theme-orange-light-500': '#ffb1a3',
        'theme-orange-light-600': '#ffa191',
        'theme-orange-light-700': '#ff927e',

        'theme-orange-light-800': '#ff826c',
        'theme-orange-light-900': '#ff7359',

        'theme-orange-dark-100': '#e65940',
        'theme-orange-dark-200': '#cc4f39',
        'theme-orange-dark-300': '#b34532',
        'theme-orange-dark-400': '#993b2b',
        'theme-orange-dark-500': '#803224',

        'theme-orange-dark-600': '#66281c',
        'theme-orange-dark-700': '#4c1e15',
        'theme-orange-dark-800': '#33140e',
        'theme-orange-dark-900': '#190a07',

        // purple
        'theme-secondary': '#2f2f41',
        'theme-secondary-lighter': '#403C56',

        // gray
        'theme-tertiary': '#B8C4D1',
        'theme-gray-100': '#f8f9fa',
        'theme-gray-200': '#f1f3f6',
        'theme-gray-300': '#eaedf1',
        'theme-gray-400': '#e3e7ed',
        'theme-gray-500': '#dce2e8',
        'theme-gray-600': '#d4dce3',
        'theme-gray-700': '#cdd6df',
        'theme-gray-800': '#c6d0da',
   

      },
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        14: "3.375rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
            },
            "ol > li::before": {
              color: theme("colors.gray.700"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.700"),
            },
            a: {
              color: theme("colors.neon-orange"),
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.100"),
            blockquote: {
              borderLeftColor: theme("colors.gray.300"),
            },
            "ol > li::before": {
              color: theme("colors.gray.300"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.300"),
            },
            a: {
              color: theme("colors.yellow.500"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            h5: {
              color: theme("colors.gray.100"),
            },
            h6: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.100"),
            },
            figcaption: {
              color: theme("colors.gray.100"),
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
    fontFamily: {
      display: ["Open Sans", ...defaultSans],
      body: ["Merriweather", ...defaultSerif],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
};
