import { User } from "@prisma/client";

export type SafeUser = Omit<
	User,
	"createdAt" | "updatedAt" | "emailVerified"
> & {
	cretedAt: string;
	updatedAt: string;
	emailVerified: string | null;
};
