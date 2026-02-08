export const LAYOUT_CONFIG = {
  container: {
    maxWidth: "1280px", // matches max-w-7xl roughly
    padding: "1.5rem", // matches px-6
  },
  navbar: {
    height: "64px", // matches h-16
  },
} as const;

export const DERIVED_LAYOUT = {
    content: {
        height: `calc(100vh - ${LAYOUT_CONFIG.navbar.height})`,
    }
}