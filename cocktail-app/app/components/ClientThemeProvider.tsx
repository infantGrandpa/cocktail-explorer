import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
    return <Theme appearance="dark">{children}</Theme>;
}