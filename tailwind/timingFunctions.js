import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities }) => {
  addUtilities({
    '.ease-in-quad': {
      'transition-timing-function': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    },
    '.ease-in-cubic': {
      'transition-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '.ease-in-quart': {
      'transition-timing-function': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    },
    '.ease-in-quint': {
      'transition-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    },
    '.ease-in-sine': {
      'transition-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    },
    '.ease-in-expo': {
      'transition-timing-function': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    },
    '.ease-in-circ': {
      'transition-timing-function': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    },
    '.ease-in-back': {
      'transition-timing-function': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    },
    '.ease-out-quad': {
      'transition-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    '.ease-out-cubic': {
      'transition-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '.ease-out-quart': {
      'transition-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    },
    '.ease-out-quint': {
      'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
    },
    '.ease-out-sine': {
      'transition-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    },
    '.ease-out-expo': {
      'transition-timing-function': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
    '.ease-out-circ': {
      'transition-timing-function': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    },
    '.ease-out-back': {
      'transition-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    '.ease-in-out-quad': {
      'transition-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    },
    '.ease-in-out-cubic': {
      'transition-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
    '.ease-in-out-quart': {
      'transition-timing-function': 'cubic-bezier(0.77, 0, 0.175, 1)',
    },
    '.ease-in-out-quint': {
      'transition-timing-function': 'cubic-bezier(0.86, 0, 0.07, 1)',
    },
    '.ease-in-out-sine': {
      'transition-timing-function': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    },
    '.ease-in-out-expo': {
      'transition-timing-function': 'cubic-bezier(1, 0, 0, 1)',
    },
    '.ease-in-out-circ': {
      'transition-timing-function': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    },
    '.ease-in-out-back': {
      'transition-timing-function': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  })
})
