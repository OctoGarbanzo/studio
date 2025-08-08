import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import 'dotenv/config';

if (!process.env.GEMINI_API_KEY) {
  throw new Error(
    'La variable de entorno GEMINI_API_KEY no está definida. Por favor, configúrala en tu archivo .env'
  );
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
