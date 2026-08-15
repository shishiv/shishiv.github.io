import type { Metadata } from "next";
import { ProfilePage } from "@/components/ProfilePage";
import { ui } from "@/i18n/ui";

export const metadata: Metadata = {
  title: ui.en.title,
  description: ui.en.description,
};

export default function EnPage() {
  return (
    <html lang="en">
      <body>
        <ProfilePage locale="en" />
      </body>
    </html>
  );
}
