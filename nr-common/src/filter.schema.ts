import { z } from "../deps.ts";

export const filterSchema = z.object({
  ids: z.string().array().optional(),
  kinds: z.number().array().optional(),
  authors: z.string().array().optional(),
  since: z.number().optional(),
  until: z.number().optional(),
  limit: z.number().optional(),
  search: z.string().optional(),
  "#a": z.string().array().optional(),
  "#b": z.string().array().optional(),
  "#c": z.string().array().optional(),
  "#d": z.string().array().optional(),
  "#e": z.string().array().optional(),
  "#f": z.string().array().optional(),
  "#g": z.string().array().optional(),
  "#h": z.string().array().optional(),
  "#i": z.string().array().optional(),
  "#j": z.string().array().optional(),
  "#k": z.string().array().optional(),
  "#l": z.string().array().optional(),
  "#m": z.string().array().optional(),
  "#n": z.string().array().optional(),
  "#o": z.string().array().optional(),
  "#p": z.string().array().optional(),
  "#q": z.string().array().optional(),
  "#r": z.string().array().optional(),
  "#s": z.string().array().optional(),
  "#t": z.string().array().optional(),
  "#u": z.string().array().optional(),
  "#v": z.string().array().optional(),
  "#w": z.string().array().optional(),
  "#x": z.string().array().optional(),
  "#y": z.string().array().optional(),
  "#z": z.string().array().optional(),
  "#A": z.string().array().optional(),
  "#B": z.string().array().optional(),
  "#C": z.string().array().optional(),
  "#D": z.string().array().optional(),
  "#E": z.string().array().optional(),
  "#F": z.string().array().optional(),
  "#G": z.string().array().optional(),
  "#H": z.string().array().optional(),
  "#I": z.string().array().optional(),
  "#J": z.string().array().optional(),
  "#K": z.string().array().optional(),
  "#L": z.string().array().optional(),
  "#M": z.string().array().optional(),
  "#N": z.string().array().optional(),
  "#O": z.string().array().optional(),
  "#P": z.string().array().optional(),
  "#Q": z.string().array().optional(),
  "#R": z.string().array().optional(),
  "#S": z.string().array().optional(),
  "#T": z.string().array().optional(),
  "#U": z.string().array().optional(),
  "#V": z.string().array().optional(),
  "#W": z.string().array().optional(),
  "#X": z.string().array().optional(),
  "#Y": z.string().array().optional(),
  "#Z": z.string().array().optional(),
});

export type Filter = z.infer<typeof filterSchema>;
