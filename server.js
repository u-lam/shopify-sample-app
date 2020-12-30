// setting up node server with dependencies
require("isomorphic-fetch");
const dotenv = require("dotenv");
const Koa = require("koa");
const next = require("next");
const { default: createShopitfyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

// adding routing middleware and koa server
app.prepare().then(() => {
  const server = new Koa();
  server.use(session({ secure: true, sameSite: "none" }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];
  server.use(
    // The createShopifyAuth functions take the Shopify API key and the Shopify API secret key and trigger the authentication screen. The function provides you the afterAuth, where you can use your own logic or redirect.
    createShopitfyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ["read_products"],
      afterAuth(ctx) {
        const urlParams = new URLSearchParams(ctx.request.url);
        const shop = urlParams.get("shop");

        ctx.redirect(`/?shop=${shop}`);
      }
    })
  );
  // The verifyRequest redirects users to the OAuth route if they haven’t been authenticated.
  server.use(verifyRequest());
  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  // setting port to listen on 3000
  server.listen(port, () => console.log(`>Ready on http:localhost:${port}`));
});
