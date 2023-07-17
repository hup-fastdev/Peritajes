export default ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['WPhAV2hv6qsn7vHaeVf3xcePcd54hfL'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

