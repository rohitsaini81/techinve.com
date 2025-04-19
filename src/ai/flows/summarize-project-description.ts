'use server';

/**
 * @fileOverview Summarizes a project description using AI.
 *
 * - summarizeProjectDescription - A function that summarizes the project description.
 * - SummarizeProjectDescriptionInput - The input type for the summarizeProjectDescription function.
 * - SummarizeProjectDescriptionOutput - The return type for the summarizeProjectDescription function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeProjectDescriptionInputSchema = z.object({
  projectDescription: z.string().describe('The full description of the project.'),
});
export type SummarizeProjectDescriptionInput = z.infer<typeof SummarizeProjectDescriptionInputSchema>;

const SummarizeProjectDescriptionOutputSchema = z.object({
  summary: z.string().describe('A short, concise summary of the project description.'),
});
export type SummarizeProjectDescriptionOutput = z.infer<typeof SummarizeProjectDescriptionOutputSchema>;

export async function summarizeProjectDescription(
  input: SummarizeProjectDescriptionInput
): Promise<SummarizeProjectDescriptionOutput> {
  return summarizeProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectDescriptionPrompt',
  input: {
    schema: z.object({
      projectDescription: z.string().describe('The full description of the project.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A short, concise summary of the project description.'),
    }),
  },
  prompt: `Summarize the following project description in a concise and engaging manner, highlighting the project's purpose and key features.\n\nProject Description: {{{projectDescription}}}`,
});

const summarizeProjectDescriptionFlow = ai.defineFlow<
  typeof SummarizeProjectDescriptionInputSchema,
  typeof SummarizeProjectDescriptionOutputSchema
>({
  name: 'summarizeProjectDescriptionFlow',
  inputSchema: SummarizeProjectDescriptionInputSchema,
  outputSchema: SummarizeProjectDescriptionOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
