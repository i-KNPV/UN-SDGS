const importAll = (requireContext) => requireContext.keys().map(requireContext);
const svgs = importAll(require.context("./", false, /\.svg$/));
export default svgs;
