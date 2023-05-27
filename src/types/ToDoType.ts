import { z } from 'zod';

export const ToDoSchema = z.object({
  id: z.string().uuid(),
  text: z.string().nonempty('Você precisa digitar algo'),
  hasDone: z.boolean(),
})

export type Todo = z.infer<typeof ToDoSchema>;

