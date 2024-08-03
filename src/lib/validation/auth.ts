import { z } from "zod";

export const username = z.string().min(2).max(48);
export const email = z.string().email();
export const password = z.string().min(8).max(64);
export const confirmPassword = z.string();
