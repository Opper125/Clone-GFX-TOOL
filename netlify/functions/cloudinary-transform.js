const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  try {
    const { public_id, transformations } = JSON.parse(event.body);

    if (!public_id || !transformations) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'public_id and transformations are required' }),
      };
    }

    // Generate transformed URL
    const transformedUrl = cloudinary.url(public_id, {
      transformation: transformations,
    });

    // Common transformations for different use cases
    const commonTransformations = {
      thumbnail: cloudinary.url(public_id, {
        transformation: [
          { width: 150, height: 150, crop: 'fill' },
          { quality: 'auto', format: 'auto' }
        ]
      }),
      medium: cloudinary.url(public_id, {
        transformation: [
          { width: 500, height: 500, crop: 'limit' },
          { quality: 'auto', format: 'auto' }
        ]
      }),
      large: cloudinary.url(public_id, {
        transformation: [
          { width: 1200, height: 1200, crop: 'limit' },
          { quality: 'auto', format: 'auto' }
        ]
      }),
      optimized: cloudinary.url(public_id, {
        transformation: [
          { quality: 'auto', format: 'auto' },
          { fetch_format: 'auto' }
        ]
      })
    };

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        original_url: cloudinary.url(public_id),
        transformed_url: transformedUrl,
        common_transformations: commonTransformations,
        public_id: public_id,
      }),
    };
  } catch (error) {
    console.error('Cloudinary transform error:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Transform failed',
        message: error.message,
      }),
    };
  }
};