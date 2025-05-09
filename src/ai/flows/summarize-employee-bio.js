'use server';

/**
 * @fileOverview Summarizes employee bios to provide a quick understanding of their expertise.
 *
 * - summarizeEmployeeBio - A function that summarizes the employee bio.
 */

import { ai } from '@/ai/ai-instance';
import { z } from 'genkit';

const SummarizeEmployeeBioInputSchema = z.object({
  bio: z.string().describe('The employee bio to summarize.'),
});

const SummarizeEmployeeBioOutputSchema = z.object({
  summary: z.string().describe('The summarized employee bio.'),
});

export async function summarizeEmployeeBio(input) {
  return summarizeEmployeeBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeEmployeeBioPrompt',
  input: {
    schema: z.object({
      bio: z.string().describe('The employee bio to summarize.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('The summarized employee bio.'),
    }),
  },
  prompt: `Summarize the following employee bio in a concise and impactful manner. Focus on their key skills, experiences, and contributions. Aim for a summary that is no more than two sentences.\n\n{{{bio}}}`,
});

const summarizeEmployeeBioFlow = ai.defineFlow(
  {
    name: 'summarizeEmployeeBioFlow',
    inputSchema: SummarizeEmployeeBioInputSchema,
    outputSchema: SummarizeEmployeeBioOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output;
  }
);
