module.exports = ({ env }) => ({
  url: env("https://strapi-pp-back.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["some", "magic"]),
  },
});
