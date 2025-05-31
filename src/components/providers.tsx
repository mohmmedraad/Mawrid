import { NextIntlClientProvider } from "next-intl";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import DirectionProvider from "./direction-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextIntlClientProvider>
			<NuqsAdapter>
				<DirectionProvider>{children}</DirectionProvider>
			</NuqsAdapter>
		</NextIntlClientProvider>
	);
}
