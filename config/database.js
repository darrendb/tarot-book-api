
module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {};
  } else {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.data/bwt-data.db'),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    }
  }
};
