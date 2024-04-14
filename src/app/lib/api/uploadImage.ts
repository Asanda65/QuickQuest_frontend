import axios from 'axios';

const uploadImage = async (file: File): Promise<string> => {
  try {
    // Generate pre-signed URL
    const presignedUrlResponse = await axios.post<{ presignedUrl: string; s3url: string }>(
      'https://api.quick-quest.dfanso.dev/v1/s3/generate-presigned-url',
      {
        fileName: file.name,
        domain: 'DP',
        contentType: file.type,
      }
    );

    const { presignedUrl, s3url } = presignedUrlResponse.data;

    // Check if the URL is valid
    if (presignedUrl && presignedUrl.startsWith('http')) {
      // Upload image to S3
      await axios.put(presignedUrl, file, {
        headers: {
          'Content-Type': file.type,
        },
      });

      return s3url;
    } else {
      throw new Error('Invalid pre-signed URL');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default uploadImage;