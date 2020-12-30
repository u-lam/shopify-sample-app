import { withRouter } from "next/router";
// need clientrouter to render client-side routing through next;
import { ClientRouter as AppBridgeClientRouter } from "@shopify/app-bridge-react";

const ClientRouter = props => {
  const { router } = props;
  return <AppBridgeClientRouter history={router} />;
};

export default withRouter(ClientRouter);
