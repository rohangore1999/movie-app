// For Lazy Loading

// Components
import Loader from "../../components/Loader";

// Utils
import loadable from "../../utils/loadable";

export default loadable(() => import("./index"), <Loader />);
