import { MainLayout } from "@/components/MainLayout/MainLayout";
import { SliceFeatures } from "@/components/SliceFeatures";
import { SliceHero } from "@/components/SliceHero";
import { SliceTypeScale } from "@/components/SliceTypeScale";

export default function Home() {
  return (
    <MainLayout>
      <SliceHero />
      <SliceTypeScale />
      <SliceFeatures />
    </MainLayout>
  );
}
