import { MainLayout } from "@/components/MainLayout/MainLayout";
import { SliceFeatures } from "@/components/SliceFeatures";
import { SliceHero } from "@/components/SliceHero";
import { SliceInstallation } from "@/components/SliceInstallation";
import { SliceTypeScale } from "@/components/SliceTypeScale";
import { SliceUsage } from "@/components/SliceUsage";

export default function Home() {
  return (
    <MainLayout>
      <SliceHero />
      <SliceTypeScale />
      <SliceFeatures />
      <SliceInstallation />
      <SliceUsage />
    </MainLayout>
  );
}
