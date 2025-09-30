import { Theme } from "@radix-ui/themes";

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
    return <Theme>{children}</Theme>;
}