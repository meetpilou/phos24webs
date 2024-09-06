import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

export const useScreen = () => {
  return {
    isMobile: breakpoints.smallerOrEqual('sm'),
    isTablet: breakpoints.between('sm', 'md'),
    isDesktop: breakpoints.greaterOrEqual('lg'),
  }
}
