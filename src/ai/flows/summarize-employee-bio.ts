'use server';
/**
 * @fileOverview Summarizes employee bios to provide a quick understanding of their expertise.
 *
 * - summarizeEmployeeBio - A function that summarizes the employee bio.
 * - SummarizeEmployeeBioInput - The input type for the summarizeEmployeeBio function.
 * - SummarizeEmployeeBioOutput - The return type for the summarizeEmployeeBio function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeEmployeeBioInputSchema = z.object({
  bio: z.string().describe('The employee bio to summarize.'),
});
export type SummarizeEmployeeBioInput = z.infer<typeof SummarizeEmployeeBioInputSchema>;

const SummarizeEmployeeBioOutputSchema = z.object({
  summary: z.string().describe('The summarized employee bio.'),
});
export type SummarizeEmployeeBioOutput = z.infer<typeof SummarizeEmployeeBioOutputSchema>;

export async function summarizeEmployeeBio(input: SummarizeEmployeeBioInput): Promise<SummarizeEmployeeBioOutput> {
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
  prompt: `Summarize the following employee bio in a concise manner:\n\n{{{bio}}}`, // Keep the prompt simple for summarization
});

const summarizeEmployeeBioFlow = ai.defineFlow<
  typeof SummarizeEmployeeBioInputSchema,
  typeof SummarizeEmployeeBioOutputSchema
>(
  {
    name: 'summarizeEmployeeBioFlow',
    inputSchema: SummarizeEmployeeBioInputSchema,
    outputSchema: SummarizeEmployeeBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
