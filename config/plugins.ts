export default ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AKIAWLMGJQT3L24LUL4L'),
                secretAccessKey: env('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'),
                region: env('us-east-1'),
                params: {
                    Bucket: env('imagesperitajes'),
                },
            },
        },
    }
  });